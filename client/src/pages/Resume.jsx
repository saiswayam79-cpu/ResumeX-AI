
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save, Download, Sparkles } from "lucide-react";
import supabase from "../lib/supabase";
import ResumePreview from "../components/ResumePreview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Resume() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resumeRef = useRef(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");

  const [suggestion, setSuggestion] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [downloadingPDF, setDownloadingPDF] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      fetchResume();
    }
  }, [id]);

  const fetchResume = async () => {
    const { data, error } = await supabase
      .from("resumes")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    setFullName(data.full_name || "");
    setEmail(data.email || "");
    setPhone(data.phone || "");
    setCollege(data.college || "");
    setDegree(data.degree || "");
    setCgpa(data.cgpa || "");
    setSkills(data.skills || "");
    setProjects(data.projects || "");
  };

  const handleSaveResume = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        throw new Error("Please log in before saving your resume.");
      }

      const resumeData = {
        full_name: fullName,
        email,
        phone,
        college,
        degree,
        cgpa,
        skills,
        projects,
      };

      let error;

      if (id) {
        const result = await supabase
          .from("resumes")
          .update(resumeData)
          .eq("id", id);

        error = result.error;
      } else {
        const result = await supabase
          .from("resumes")
          .insert([
            {
              user_id: user.id,
              ...resumeData,
            },
          ]);

        error = result.error;
      }

      if (error) {
        throw error;
      }

      alert(
        id
          ? "Resume updated successfully!"
          : "Resume saved successfully!"
      );

      if (!id) {
        navigate("/my-resumes");
      }
    } catch (error) {
      console.error("Save resume error:", error);
      alert(error.message || "Failed to save resume.");
    } finally {
      setSaving(false);
    }
  };

  const handleAISuggestions = async () => {
    try {
      setLoadingAI(true);
      setSuggestion("");

      const resume = `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
College: ${college}
Degree: ${degree}
CGPA: ${cgpa}
Skills: ${skills}
Projects: ${projects}
`;

      const response = await fetch(
        "https://resumex-ai-rs94.onrender.com/ai/suggest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resume,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed.");
      }

      setSuggestion(
        data.suggestion || "No suggestions were returned."
      );
    } catch (error) {
      console.error("AI suggestions error:", error);
      alert(
        error.message ||
          "Failed to get AI suggestions. Please try again."
      );
    } finally {
      setLoadingAI(false);
    }
  };

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;

    if (!element) {
      alert("Resume preview not found.");
      return;
    }

    setDownloadingPDF(true);

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,

        onclone: (clonedDocument) => {
          // Replace unsupported OKLCH colors in inline styles
          // and embedded stylesheets before html2canvas reads them.
          const replaceUnsupportedColors = (text) =>
            text.replace(
              /oklch\([^)]*\)/gi,
              "#333333"
            );

          clonedDocument
            .querySelectorAll("style")
            .forEach((styleElement) => {
              styleElement.textContent =
                replaceUnsupportedColors(
                  styleElement.textContent
                );
            });

          clonedDocument
            .querySelectorAll("[style]")
            .forEach((el) => {
              const currentStyle = el.getAttribute("style");

              if (currentStyle) {
                el.setAttribute(
                  "style",
                  replaceUnsupportedColors(currentStyle)
                );
              }
            });

          const clonedElement =
            clonedDocument.querySelector("[data-resume]") ||
            clonedDocument.body;

          clonedElement.style.color = "#222222";
          clonedElement.style.backgroundColor = "#ffffff";

          // Ensure common resume text remains readable.
          clonedElement
            .querySelectorAll("*")
            .forEach((el) => {
              el.style.setProperty(
                "color",
                getSafeColor(el.style.color),
                "important"
              );
            });
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imageHeight =
        (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = 0;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        pdfWidth,
        imageHeight
      );

      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();

        pdf.addImage(
          imgData,
          "PNG",
          0,
          position,
          pdfWidth,
          imageHeight
        );

        heightLeft -= pdfHeight;
      }

      const safeName = (fullName || "Resume")
        .replace(/[<>:"/\\|?*\x00-\x1F]/g, "")
        .trim();

      pdf.save(`${safeName || "Resume"}.pdf`);
    } catch (error) {
      console.error("PDF download error:", error);

      alert(
        `PDF download failed: ${
          error.message || "Unknown error"
        }`
      );
    } finally {
      setDownloadingPDF(false);
    }
  };

  // Keep unsupported color functions out of inline text styles.
  function getSafeColor(color) {
    if (!color || /oklch|oklab|color\(/i.test(color)) {
      return "#222222";
    }

    return color;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/dashboard">
            <h1 className="text-2xl font-bold text-blue-600">
              ResumeX AI
            </h1>
          </Link>

          <Link
            to="/my-resumes"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-medium"
          >
            <ArrowLeft size={18} />
            My Resumes
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {id ? "Edit Resume" : "Create Resume"}
          </h2>

          <p className="text-gray-600 mt-2">
            Fill in your details and see your resume update instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <form onSubmit={handleSaveResume} className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h3>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Add your basic contact details.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Your Full Name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. you@example.com"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Phone
                    </label>

                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-7">
                <h3 className="text-xl font-bold text-gray-900">
                  Education
                </h3>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Add your college and academic details.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      College
                    </label>

                    <input
                      type="text"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      placeholder="e.g. Your College Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Degree
                    </label>

                    <input
                      type="text"
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      placeholder="e.g. B.Tech in CSE"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      CGPA
                    </label>

                    <input
                      type="text"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      placeholder="e.g. 8.2"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-7">
                <h3 className="text-xl font-bold text-gray-900">
                  Skills
                </h3>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Mention the skills you want to highlight.
                </p>

                <textarea
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="e.g. Java, Python, React, SQL"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="border-t border-gray-200 pt-7">
                <h3 className="text-xl font-bold text-gray-900">
                  Projects
                </h3>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Add your important academic or personal projects.
                </p>

                <textarea
                  value={projects}
                  onChange={(e) => setProjects(e.target.value)}
                  placeholder="Project name, technologies used, and what you built..."
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="border-t border-gray-200 pt-7 grid sm:grid-cols-3 gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
                >
                  <Save size={18} />
                  {saving
                    ? "Saving..."
                    : id
                    ? "Update Resume"
                    : "Save Resume"}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  disabled={downloadingPDF}
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-60"
                >
                  <Download size={18} />
                  {downloadingPDF
                    ? "Preparing PDF..."
                    : "Download PDF"}
                </button>

                <button
                  type="button"
                  onClick={handleAISuggestions}
                  disabled={loadingAI}
                  className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition disabled:opacity-60"
                >
                  <Sparkles size={18} />
                  {loadingAI
                    ? "Analyzing..."
                    : "Get AI Suggestions"}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Live Preview
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Your resume preview updates as you type.
              </p>
            </div>

            <div ref={resumeRef}>
              <ResumePreview
                fullName={fullName}
                email={email}
                phone={phone}
                college={college}
                degree={degree}
                cgpa={cgpa}
                skills={skills}
                projects={projects}
              />
            </div>

            {suggestion && (
              <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  AI Suggestions
                </h3>

                <div className="mt-4 whitespace-pre-wrap text-gray-700 leading-7">
                  {suggestion}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;

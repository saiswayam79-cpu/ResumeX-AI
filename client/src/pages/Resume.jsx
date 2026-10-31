
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save, Download, Sparkles } from "lucide-react";

import supabase from "../lib/supabase";
import ResumePreview from "../components/ResumePreview";

import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

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

  // Fetch existing resume when editing.
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

  // Save or update resume.
  const handleSaveResume = async (e) => {
    e.preventDefault();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      alert("Please log in before saving your resume.");
      return;
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
      const { error: updateError } = await supabase
        .from("resumes")
        .update(resumeData)
        .eq("id", id);

      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from("resumes")
        .insert([
          {
            user_id: user.id,
            ...resumeData,
          },
        ]);

      error = insertError;
    }

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      id
        ? "Resume updated successfully!"
        : "Resume saved successfully!"
    );

    if (!id) {
      navigate("/my-resumes");
    }
  };

  // Get AI suggestions from the deployed Render backend.
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

      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error(
          "API URL is missing. Please configure VITE_API_URL."
        );
      }

      const response = await fetch(
        `${apiUrl.replace(/\/+$/, "")}/ai/suggest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ resume }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed");
      }

      setSuggestion(
        data.suggestion || "No suggestions received."
      );
    } catch (error) {
      console.error("AI suggestion error:", error);

      alert(
        "Failed to get AI suggestions. " +
        (error.message || "Please try again.")
      );
    } finally {
      setLoadingAI(false);
    }
  };

  // Download resume as PDF.
  const handleDownloadPDF = async () => {
    const element = resumeRef.current;

    if (!element || downloadingPDF) {
      return;
    }

    try {
      setDownloadingPDF(true);

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,

        onclone: (doc) => {
          const clonedElement = doc.querySelector(
            "[data-resume]"
          );

          if (clonedElement) {
            clonedElement.style.color = "#000000";
            clonedElement.style.backgroundColor = "#ffffff";
          }
        },
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imageHeight =
        (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = 0;

      // Add first page.
      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        pageWidth,
        imageHeight
      );

      heightLeft -= pageHeight;

      // Add additional pages if needed.
      while (heightLeft > 0) {
        position = heightLeft - imageHeight;

        pdf.addPage();

        pdf.addImage(
          imgData,
          "PNG",
          0,
          position,
          pageWidth,
          imageHeight
        );

        heightLeft -= pageHeight;
      }

      const safeName = (fullName || "Resume")
        .trim()
        .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_");

      pdf.save(`${safeName}.pdf`);
    } catch (error) {
      console.error("PDF download error:", error);

      alert(
        "PDF download failed. Please try again. " +
        (error?.message || "")
      );
    } finally {
      setDownloadingPDF(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500";

  const labelClass =
    "block font-medium text-gray-700 mb-2";

  const renderInput = (
    label,
    value,
    setter,
    placeholder,
    type = "text",
    required = false
  ) => (
    <div>
      <label className={labelClass}>{label}</label>

      <input
        type={type}
        value={value}
        onChange={(e) => setter(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
    </div>
  );

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

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Personal Information
                </h3>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Add your basic contact details.
                </p>

                <div className="space-y-4">
                  {renderInput(
                    "Full Name",
                    fullName,
                    setFullName,
                    "e.g. Your Full Name",
                    "text",
                    true
                  )}

                  {renderInput(
                    "Email",
                    email,
                    setEmail,
                    "e.g. you@example.com",
                    "email",
                    true
                  )}

                  {renderInput(
                    "Phone",
                    phone,
                    setPhone,
                    "e.g. 9876543210"
                  )}
                </div>
              </div>

              {/* Education */}
              <div className="border-t border-gray-200 pt-7">
                <h3 className="text-xl font-bold text-gray-900">
                  Education
                </h3>

                <p className="text-sm text-gray-500 mt-1 mb-5">
                  Add your college and academic details.
                </p>

                <div className="space-y-4">
                  {renderInput(
                    "College",
                    college,
                    setCollege,
                    "e.g. Your College Name"
                  )}

                  {renderInput(
                    "Degree",
                    degree,
                    setDegree,
                    "e.g. B.Tech in CSE"
                  )}

                  {renderInput(
                    "CGPA",
                    cgpa,
                    setCgpa,
                    "e.g. 8.2"
                  )}
                </div>
              </div>

              {/* Skills */}
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
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Projects */}
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
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 pt-7 grid sm:grid-cols-3 gap-3">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  <Save size={18} />
                  {id ? "Update Resume" : "Save Resume"}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  disabled={downloadingPDF}
                  className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-60"
                >
                  <Download size={18} />
                  {downloadingPDF ? "Preparing PDF..." : "Download PDF"}
                </button>

                <button
                  type="button"
                  onClick={handleAISuggestions}
                  disabled={loadingAI}
                  className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition disabled:opacity-60"
                >
                  <Sparkles size={18} />
                  {loadingAI ? "Analyzing..." : "Get AI Suggestions"}
                </button>
              </div>
            </form>
          </div>

          {/* Resume Preview */}
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

            {/* AI Suggestions Result */}
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

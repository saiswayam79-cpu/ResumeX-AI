import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Pencil, Trash2, Plus } from "lucide-react";
import supabase from "../lib/supabase";

function MyResumes() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("resumes")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      alert(error.message);
      return;
    }

    setResumes(data);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from("resumes")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Resume deleted successfully!");
    fetchResumes();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 md:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Resumes
            </h1>

            <p className="text-gray-600 mt-3">
              View, edit, and manage your saved resumes.
            </p>
          </div>

          <Link
            to="/resume"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            <Plus size={19} />
            Create Resume
          </Link>

        </div>

        {resumes.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 md:p-14 text-center">

            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
              <FileText size={28} />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">
              No resumes yet
            </h2>

            <p className="text-gray-600 mt-3 mb-7">
              Create your first resume to see it here.
            </p>

            <Link
              to="/resume"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Create Resume
            </Link>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-7">

            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-lg transition"
              >

                <div className="flex items-start gap-4 border-b border-gray-200 pb-5">

                  <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                    <FileText size={22} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 truncate">
                      {resume.full_name || "Unnamed Resume"}
                    </h2>

                    <p className="text-gray-600 mt-1 truncate">
                      {resume.email || "No email provided"}
                    </p>
                  </div>

                </div>

                <div className="mt-5 space-y-3 text-gray-700">

                  <p>
                    <span className="font-medium">Degree:</span>{" "}
                    {resume.degree || "-"}
                  </p>

                  <p>
                    <span className="font-medium">College:</span>{" "}
                    {resume.college || "-"}
                  </p>

                  <p>
                    <span className="font-medium">CGPA:</span>{" "}
                    {resume.cgpa || "-"}
                  </p>

                </div>

                <div className="grid sm:grid-cols-2 gap-3 mt-7">

                  <Link
                    to={`/resume/${resume.id}`}
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    <Pencil size={17} />
                    Edit
                  </Link>

                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this resume?"
                        )
                      ) {
                        handleDelete(resume.id);
                      }
                    }}
                    className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-red-700 transition"
                  >
                    <Trash2 size={17} />
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default MyResumes;
import { Link, useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";
import { FileText, FolderOpen, LogOut } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    alert("Logged out successfully.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-600">
              ResumeX AI
            </h1>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Welcome to ResumeX AI
          </h2>

          <p className="text-gray-600 mt-3">
            Create, manage, and improve your resumes from one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">

          <Link
            to="/resume"
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-6">
              <FileText size={25} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Create Resume
            </h3>

            <p className="text-gray-600 mt-3 leading-6">
              Build a new resume by adding your education, skills,
              projects, and other details.
            </p>

            <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
              Create a resume →
            </div>
          </Link>

          <Link
            to="/my-resumes"
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-6">
              <FolderOpen size={25} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              My Resumes
            </h3>

            <p className="text-gray-600 mt-3 leading-6">
              View your saved resumes and easily edit or delete
              them whenever you need.
            </p>

            <div className="mt-6 text-blue-600 font-medium group-hover:text-blue-700">
              View my resumes →
            </div>
          </Link>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;
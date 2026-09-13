import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              ResumeX AI
            </h2>

            <p className="text-gray-400 mt-2">
              Build. Improve. Get Hired.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition"
            >
              Home
            </Link>

            <a
              href="#features"
              className="text-gray-300 hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </a>

            <Link
              to="/signup"
              className="text-gray-300 hover:text-white transition"
            >
              Get Started
            </Link>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            ResumeX AI — Student Project
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
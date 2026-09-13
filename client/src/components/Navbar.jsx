import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">
            ResumeX AI
          </h1>
        </Link>

        <ul className="flex items-center gap-7 font-medium text-gray-700">

          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="#features"
              className="hover:text-blue-600 transition"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <Link
              to="/login"
              className="hover:text-blue-600 transition"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
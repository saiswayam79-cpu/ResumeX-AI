
import { Link } from "react-router-dom";
import { FileText, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-[#e9e6f3] bg-white">
      <div className="rx-container py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
              aria-label="ResumeX AI home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-md shadow-violet-200">
                <FileText size={21} />
              </span>

              <span className="text-xl font-bold tracking-tight text-[#19172b]">
                ResumeX <span className="rx-gradient-text">AI</span>
              </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#77758b]">
              Build a resume that reflects your skills, highlights your
              projects, and helps you take the next step in your career.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <Link
              to="/"
              className="text-sm font-medium text-[#77758b] transition-colors hover:text-violet-600"
            >
              Home
            </Link>

            <Link
              to="/#features"
              className="text-sm font-medium text-[#77758b] transition-colors hover:text-violet-600"
            >
              Features
            </Link>

            <Link
              to="/#about"
              className="text-sm font-medium text-[#77758b] transition-colors hover:text-violet-600"
            >
              About
            </Link>

            <Link
              to="/login"
              className="text-sm font-medium text-[#77758b] transition-colors hover:text-violet-600"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition-colors hover:text-blue-600"
            >
              Get Started
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#eeeaf6] pt-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#89869b] sm:text-sm">
            © {new Date().getFullYear()} ResumeX AI. Built as a student project.
          </p>

          <p className="text-xs leading-5 text-[#89869b] sm:text-sm">
            Build. Improve. Get Hired.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

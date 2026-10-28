
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#111111] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-7 sm:gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="min-w-0">
            <Link
              to="/"
              className="inline-block text-xl font-bold tracking-tight text-[#7892ff] sm:text-2xl"
            >
              ResumeX AI
            </Link>

            <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
              Build. Improve. Get Hired.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7"
          >
            <Link
              to="/"
              className="text-sm text-gray-300 transition hover:text-white sm:text-base"
            >
              Home
            </Link>

            <a
              href="/#features"
              className="text-sm text-gray-300 transition hover:text-white sm:text-base"
            >
              Features
            </a>

            <a
              href="/#about"
              className="text-sm text-gray-300 transition hover:text-white sm:text-base"
            >
              About
            </a>

            <Link
              to="/signup"
              className="text-sm font-medium text-[#9aafff] transition hover:text-white sm:text-base"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-7 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">
          <p className="text-center text-xs leading-5 text-gray-500 sm:text-sm">
            ResumeX AI — Student Project
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

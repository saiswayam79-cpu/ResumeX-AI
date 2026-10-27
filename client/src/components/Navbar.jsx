
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/#features" },
    { label: "About", to: "/#about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111111]/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0 text-xl font-bold tracking-tight text-[#7892ff] sm:text-2xl"
        >
          ResumeX AI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-gray-300 transition hover:text-[#7892ff] lg:text-base"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/login"
            className="text-sm font-medium text-gray-300 transition hover:text-[#7892ff] lg:text-base"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 lg:text-base"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#171717] px-4 py-4 md:hidden sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-200 transition hover:bg-white/5 hover:text-[#7892ff]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-base font-medium text-gray-200 transition hover:bg-white/5 hover:text-[#7892ff]"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

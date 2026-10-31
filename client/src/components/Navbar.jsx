
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/#features" },
    { label: "About", to: "/#about" },
  ];

  // Scroll to the correct section after navigating to the landing page.
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1);

      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (event, to) => {
    event.preventDefault();
    closeMenu();

    if (to === "/") {
      if (location.pathname === "/") {
        navigate("/", { replace: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    const sectionId = to.split("#")[1];

    if (location.pathname === "/") {
      navigate(to);

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(to);
    }
  };

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/" && !location.hash;

    return (
      location.pathname === "/" &&
      location.hash === to.split("#")[1]
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#e9e6f3]/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={(event) => handleNavClick(event, "/")}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="ResumeX AI home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-lg shadow-violet-500/20 transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105">
            <FileText size={21} strokeWidth={2.2} />
          </span>

          <span className="text-xl font-extrabold tracking-tight text-[#19172b] sm:text-2xl">
            ResumeX<span className="rx-gradient-text"> AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={(event) => handleNavClick(event, link.to)}
              className={`relative py-2 text-sm font-medium transition-colors duration-200 lg:text-[15px] ${
                isActive(link.to)
                  ? "text-violet-700"
                  : "text-[#77758b] hover:text-violet-700"
              }`}
            >
              {link.label}

              {isActive(link.to) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
              )}
            </Link>
          ))}

          <span className="h-6 w-px bg-[#e9e6f3]" />

          <Link
            to="/login"
            className="text-sm font-semibold text-[#514d67] transition-colors hover:text-violet-700 lg:text-[15px]"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rx-gradient-button min-h-11 rounded-xl px-5 text-sm"
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e9e6f3] bg-white text-[#19172b] transition hover:border-violet-300 hover:bg-violet-50 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#e9e6f3] bg-white/95 px-4 py-4 shadow-xl shadow-violet-950/5 backdrop-blur-xl sm:px-6 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(event) => handleNavClick(event, link.to)}
                className={`rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                  isActive(link.to)
                    ? "bg-violet-50 text-violet-700"
                    : "text-[#514d67] hover:bg-violet-50 hover:text-violet-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 border-t border-[#e9e6f3]" />

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-[15px] font-semibold text-[#514d67] transition hover:bg-violet-50 hover:text-violet-700"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="rx-gradient-button mt-2 w-full rounded-xl"
            >
              Get Started
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

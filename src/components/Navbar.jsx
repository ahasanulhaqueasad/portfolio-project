import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/", type: "route" },
  { name: "About", href: "/#about", type: "section" },
  { name: "Skills", href: "/#skills", type: "section" },
  { name: "Projects", href: "/projects", type: "route" },
  { name: "Contact", href: "/#contact", type: "section" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSectionClick = (sectionId) => {
    closeMenu();

    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080B14]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          Mark Adam<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            if (link.type === "section") {
              const sectionId = link.href.split("#")[1];

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => {
                    if (location.pathname === "/") {
                      event.preventDefault();
                      handleSectionClick(sectionId);
                    }
                  }}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/ahasanulhaqueasad"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 md:inline-flex"
        >
          GitHub ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <span className="text-2xl" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080B14] px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => {
              if (link.type === "section") {
                const sectionId = link.href.split("#")[1];

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => {
                      if (location.pathname === "/") {
                        event.preventDefault();
                        handleSectionClick(sectionId);
                      } else {
                        closeMenu();
                      }
                    }}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-blue-400 ${
                    location.pathname === link.href
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="https://github.com/ahasanulhaqueasad"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

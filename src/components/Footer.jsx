function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080B14] px-6">
      <div className="mx-auto max-w-7xl py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Asad<span className="text-blue-500">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              Frontend Developer creating responsive and user-friendly digital
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {currentYear} Md Ahasanul Haque Ashad. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

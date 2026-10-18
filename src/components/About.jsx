function About() {
  const highlights = [
    {
      number: "01",
      title: "Clean Code",
      description: "Writing readable, maintainable, and well-structured code.",
    },
    {
      number: "02",
      title: "Responsive Design",
      description:
        "Building interfaces that work across mobile, tablet, and desktop.",
    },
    {
      number: "03",
      title: "Continuous Learning",
      description:
        "Learning modern technologies and improving through real projects.",
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-white/5 bg-[#0B0F1A] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building thoughtful
            <span className="text-blue-400"> digital experiences.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            I am a developer who enjoys solving problems and transforming ideas
            into useful, accessible, and user-friendly web experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-gray-400">
            <p>
              My focus is on frontend development, where design and
              functionality come together to create meaningful digital products.
            </p>

            <p>
              I work with modern web technologies such as React, JavaScript, and
              Tailwind CSS to build responsive interfaces and reusable
              components.
            </p>

            <p>
              I believe good development is more than making a page look
              attractive. It also means writing maintainable code, considering
              accessibility, and making the experience simple for users.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 pt-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Highlights */}
          <div className="grid gap-4">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-blue-500/30 hover:bg-blue-500/[0.03] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-sm font-semibold text-blue-400">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

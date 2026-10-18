function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Building modern, responsive user interfaces.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "React Router"],
    },
    {
      number: "02",
      title: "Styling & UI",
      description: "Creating consistent and accessible designs.",
      skills: [
        "Tailwind CSS",
        "DaisyUI",
        "Responsive Design",
        "Flexbox",
        "CSS Grid",
      ],
    },
    {
      number: "03",
      title: "Backend & Database",
      description: "Learning to build full-stack web applications.",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
    },
    {
      number: "04",
      title: "Tools & Workflow",
      description: "Tools for building, testing, and maintaining projects.",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite"],
    },
  ];

  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-[#080B14] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I work
            <span className="text-blue-400"> with.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            A collection of technologies and tools used to build modern web
            applications and improve development workflows.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-blue-500/30 hover:bg-white/[0.035] sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {group.description}
                  </p>
                </div>

                <span className="text-sm font-medium text-blue-400">
                  {group.number}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-[#101522] px-3 py-2 text-sm text-gray-300 transition-colors hover:border-blue-500/40 hover:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-sm leading-6 text-gray-500">
          My toolkit continues to evolve as I learn, practice, and build new
          projects.
        </p>
      </div>
    </section>
  );
}

export default Skills;

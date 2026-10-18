import projects from "../data/projects.json";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-[#0B0F1A] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              My Portfolio
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected
              <span className="text-blue-400"> Projects.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              A selection of projects that reflect my learning, development
              process, and interest in building useful digital products.
            </p>
          </div>

          <a
            href="https://github.com/ahasanulhaqueasad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-blue-500/40 hover:text-blue-400"
          >
            More on GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080B14] transition-colors hover:border-blue-500/30"
            >
              {/* Project Preview */}
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-500/10 via-[#101522] to-purple-500/10">
                <div className="absolute left-5 top-5 text-sm font-medium text-gray-500">
                  PROJECT / {project.number}
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl font-bold text-blue-400">
                    {project.title.charAt(0)}
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {project.category}
                  </p>
                </div>

                <span className="absolute bottom-5 right-5 text-3xl text-white/10 transition-colors group-hover:text-blue-400/40">
                  ↗
                </span>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-300 transition-colors hover:text-blue-400"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600">
                      GitHub coming soon
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600">
                      Demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import { Link } from "react-router-dom";
import projects from "../data/projects.json";

function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#080B14] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Portfolio
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            All <span className="text-blue-500">Projects</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            Explore my projects, the technologies I use, and the problems I work
            to solve through development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
            >
              {/* Project Preview Placeholder */}
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-blue-950 via-[#10182c] to-[#080B14]">
                <span className="text-6xl font-extrabold text-white/10 transition-colors duration-300 group-hover:text-blue-400/40">
                  {project.number}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-sm font-medium text-blue-400">
                  {project.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>

                <p className="mt-4 min-h-20 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-blue-500 hover:text-blue-400"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-blue-500"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-14 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-semibold text-gray-300 transition-colors hover:border-blue-500 hover:text-blue-400"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

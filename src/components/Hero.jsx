function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#080B14] px-6 py-24 sm:py-32 lg:py-40"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Introduction */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-emerald-300">
              Available for Opportunities
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Mark
            <span className="mt-2 block text-blue-400">Adam.</span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-gray-300 sm:text-2xl">
            Frontend Developer
            <span className="text-gray-500"> & UI Enthusiast</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build responsive, user-friendly web applications with modern
            frontend technologies. I enjoy turning ideas into clean, accessible,
            and practical digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-gray-200 transition-colors hover:border-blue-400/50 hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5 text-sm text-gray-400">
            <span>Find me on</span>

            <a
              href="https://github.com/ahasanulhaqueasad"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-200 underline-offset-4 transition-colors hover:text-blue-400 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-200 underline-offset-4 transition-colors hover:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Developer Visual */}
        <div className="mx-auto w-full max-w-lg">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-blue-950/20 sm:p-5">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-gray-500">developer.js</span>

              <span className="text-xs text-gray-600">JS</span>
            </div>

            {/* Code Preview */}
            <div className="overflow-x-auto px-3 py-7 font-mono text-sm leading-8 sm:px-5 sm:text-base">
              <p className="text-gray-500">
                <span className="mr-4 text-gray-700">01</span>
                // A little about me
              </p>

              <p className="text-gray-500">
                <span className="mr-4 text-gray-700">02</span>
              </p>

              <p>
                <span className="mr-4 text-gray-700">03</span>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span> = {"{"}
              </p>

              <p className="pl-6">
                <span className="mr-4 text-gray-700">04</span>
                name: <span className="text-emerald-300">"Asad"</span>,
              </p>

              <p className="pl-6">
                <span className="mr-4 text-gray-700">05</span>
                role:{" "}
                <span className="text-emerald-300">"Frontend Developer"</span>,
              </p>

              <p className="pl-6">
                <span className="mr-4 text-gray-700">06</span>
                skills: [
              </p>

              <p className="pl-12 text-amber-300">
                <span className="mr-4 text-gray-700">07</span>
                "React",
              </p>

              <p className="pl-12 text-amber-300">
                <span className="mr-4 text-gray-700">08</span>
                "JavaScript",
              </p>

              <p className="pl-12 text-amber-300">
                <span className="mr-4 text-gray-700">09</span>
                "Tailwind CSS"
              </p>

              <p className="pl-6">
                <span className="mr-4 text-gray-700">10</span>
                ],
              </p>

              <p className="pl-6">
                <span className="mr-4 text-gray-700">11</span>
                passion:{" "}
                <span className="text-emerald-300">"Building for the web"</span>
              </p>

              <p>
                <span className="mr-4 text-gray-700">12</span>
                {"}"};
              </p>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between border-t border-white/10 px-3 pt-4 text-xs text-gray-500 sm:px-5">
              <span>● Ready to build</span>
              <span>UTF-8</span>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-gray-500">
            Turning ideas into digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

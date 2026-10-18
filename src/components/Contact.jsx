function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:your-email@example.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-[#080B14] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something
            <span className="text-blue-400"> great.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Have a project in mind, a job opportunity, or just want to connect?
            Feel free to reach out. I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Let's talk about your project.
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-gray-400">
              I'm interested in frontend development opportunities,
              collaborations, and projects where I can learn and create
              meaningful digital experiences.
            </p>

            {/* Email Card */}
            <a
              href="mailto:your-email@example.com"
              className="mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-blue-500/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-xl text-blue-400">
                @
              </div>

              <div>
                <p className="text-sm text-gray-500">Email me</p>
                <p className="mt-1 break-all font-medium text-gray-200">
                  your-email@example.com
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-gray-400">
                Connect with me
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/ahasanulhaqueasad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-blue-500/30 hover:text-blue-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-blue-500/30 hover:text-blue-400"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#080B14] px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#080B14] px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
                className="w-full rounded-lg border border-white/10 bg-[#080B14] px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me a little about your project..."
                required
                className="w-full resize-y rounded-lg border border-white/10 bg-[#080B14] px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Send Message
              <span aria-hidden="true">↗</span>
            </button>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              This form opens your default email application. It does not send
              messages directly from the website.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

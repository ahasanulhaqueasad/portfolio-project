import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-[#080B14] px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        {/* 404 Number */}
        <p className="text-8xl font-extrabold tracking-tight text-blue-500 sm:text-9xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-400">
          Sorry, the page you are looking for does not exist or may have been
          moved to another location.
        </p>

        {/* Back Home Button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-500"
        >
          <span aria-hidden="true">←</span>
          Back to Home
        </Link>

        {/* Additional Text */}
        <p className="mt-8 text-sm text-gray-500">
          Error code: 404 · Page unavailable
        </p>
      </div>
    </section>
  );
}

export default NotFound;

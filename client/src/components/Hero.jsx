
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-[#111111]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">

        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build Professional{" "}
          <span className="text-[#7892ff]">Resumes</span>{" "}
          with AI
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
          ResumeX AI helps you create ATS-friendly resumes, improve your
          resume using AI suggestions, and download beautiful PDF resumes
          in just a few minutes.
        </p>

        <div className="mt-7 flex w-full max-w-sm flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:gap-4">
          <Link
            to="/signup"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Get Started
          </Link>

          <a
            href="#features"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#7892ff] px-7 py-3 font-semibold text-[#9aafff] transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Learn More
          </a>
        </div>

        <p className="mt-5 text-sm text-gray-400 sm:mt-6">
          Build. Improve. Get Hired.
        </p>
      </div>
    </section>
  );
}

export default Hero;

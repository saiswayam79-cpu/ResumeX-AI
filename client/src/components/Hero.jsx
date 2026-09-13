import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Build Professional
          <span className="text-blue-600"> Resumes </span>
          with AI
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-7">
          ResumeX AI helps you create ATS-friendly resumes, improve your
          resume using AI suggestions, and download beautiful PDF resumes
          in just a few minutes.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/signup"
            className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md"
          >
            Get Started
          </Link>

          <a
            href="#features"
            className="border border-blue-600 text-blue-600 px-8 py-3.5 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Learn More
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;
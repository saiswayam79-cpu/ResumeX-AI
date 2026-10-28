
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="w-full bg-[#171717] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-5 py-10 text-center shadow-xl shadow-blue-950/20 sm:px-10 sm:py-14 md:rounded-3xl md:px-14 md:py-16">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Ready to Build Your Dream Resume?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
          Create a professional, ATS-friendly resume and take the next
          step toward your career.
        </p>

        <Link
          to="/signup"
          className="mt-7 inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-8 sm:w-auto"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default CTA;

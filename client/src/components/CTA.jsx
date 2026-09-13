import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-blue-600 py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Build Your Dream Resume?
        </h2>

        <p className="mt-4 md:mt-5 text-blue-100 text-base md:text-lg leading-7 max-w-2xl mx-auto">
          Create a professional, ATS-friendly resume and take the next
          step toward your career.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition shadow-sm"
        >
          Get Started
        </Link>

      </div>
    </section>
  );
}

export default CTA;
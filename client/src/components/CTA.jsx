
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FileText } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7ff] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <div className="rx-container">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-[#302064] via-[#5540a5] to-[#4268d9] px-6 py-12 text-center shadow-[0_24px_70px_rgba(75,55,160,0.22)] sm:px-10 sm:py-16 md:rounded-[36px] md:px-16 md:py-20">
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full border border-white/10 bg-white/5 sm:h-80 sm:w-80" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full border border-white/10 bg-white/5 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute right-1/4 top-0 -z-10 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-violet-100 backdrop-blur-sm">
              <Sparkles size={16} />
              Your next chapter starts here
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Make your next move{" "}
              <span className="text-violet-200">with confidence.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-violet-100/90 sm:text-lg sm:leading-8">
              Bring your skills, projects, and experience together in one
              resume. Build it, improve it with AI suggestions, and download
              your PDF when you're ready.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-[#49348e] shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              >
                Create My Resume
                <ArrowRight size={18} />
              </Link>

              <span className="inline-flex items-center gap-2 text-sm text-violet-100/90">
                <FileText size={16} />
                Build. Improve. Get Hired.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

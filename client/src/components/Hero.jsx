
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  FileText,
  CheckCircle2,
  Download,
  WandSparkles,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f7ff]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="rx-container grid items-center gap-14 py-16 sm:py-20 md:py-24 lg:grid-cols-2 lg:gap-12 lg:py-28">
        {/* Left: Hero content */}
        <div className="rx-fade-up text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3.5 py-2 text-sm font-semibold text-violet-700 shadow-sm">
            <Sparkles size={16} />
            Your next opportunity starts here
          </div>

          <h1 className="mx-auto max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#19172b] sm:text-5xl md:text-6xl lg:mx-0 lg:text-[64px]">
            Your skills deserve a{" "}
            <span className="rx-gradient-text">better resume.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#77758b] sm:text-lg sm:leading-8 lg:mx-0">
            Create your resume, get AI-powered suggestions, and turn your
            experience into a clear story that recruiters can understand.
            Start building your next opportunity today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/signup"
              className="rx-gradient-button min-h-12 rounded-xl px-6"
            >
              Build My Resume
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="rx-secondary-button min-h-12 rounded-xl px-6"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#77758b] lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-violet-600" />
              AI suggestions
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-violet-600" />
              PDF download
            </span>
          </div>
        </div>

        {/* Right: Resume preview illustration */}
        <div className="relative mx-auto w-full max-w-[510px] rx-fade-up rx-delay-2">
          <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-br from-violet-200/60 via-white/30 to-blue-200/60 blur-2xl" />

          <div className="relative rounded-[26px] border border-white bg-white/80 p-3 shadow-[0_28px_90px_-30px_rgba(79,58,160,0.3)] backdrop-blur-xl sm:p-5">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-[#eeebf7] px-2 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff8c91]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffc76b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#72d8a2]" />
              </div>

              <span className="text-xs font-medium text-[#9994ad]">
                ResumeX editor
              </span>

              <Sparkles size={17} className="text-violet-500" />
            </div>

            <div className="grid gap-4 py-4 sm:grid-cols-[1fr_0.83fr] sm:gap-5">
              {/* Resume paper */}
              <div className="rounded-xl border border-[#eeebf7] bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 text-white">
                    <FileText size={22} />
                  </div>
                  <div className="min-w-0">
                    <div className="h-3 w-28 max-w-full rounded-full bg-[#292443]" />
                    <div className="mt-2 h-2 w-20 max-w-full rounded-full bg-[#d9d5e8]" />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700">
                    Profile
                  </p>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-[#e9e6f3]" />
                    <div className="h-1.5 w-[92%] rounded-full bg-[#e9e6f3]" />
                    <div className="h-1.5 w-[75%] rounded-full bg-[#e9e6f3]" />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700">
                    Education
                  </p>
                  <div className="h-2 w-[80%] rounded-full bg-[#d9d5e8]" />
                  <div className="mt-2 h-1.5 w-[58%] rounded-full bg-[#e9e6f3]" />
                </div>

                <div className="mb-4">
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700">
                    Projects
                  </p>
                  <div className="h-2 w-[72%] rounded-full bg-[#d9d5e8]" />
                  <div className="mt-2 space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-[#e9e6f3]" />
                    <div className="h-1.5 w-[85%] rounded-full bg-[#e9e6f3]" />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-700">
                      React
                    </span>
                    <span className="rounded-md bg-blue-50 px-2 py-1 text-[9px] font-semibold text-blue-700">
                      JavaScript
                    </span>
                    <span className="rounded-md bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-700">
                      SQL
                    </span>
                  </div>
                </div>
              </div>

              {/* AI suggestion panel */}
              <div className="flex flex-col gap-3">
                <div className="rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50 to-blue-50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
                      <WandSparkles size={17} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#292443]">
                        AI Assistant
                      </p>
                      <p className="text-[10px] text-[#8a84a2]">
                        Resume feedback
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/90 bg-white/85 p-3">
                    <p className="text-xs font-bold text-[#39364d]">
                      Make it stronger
                    </p>
                    <p className="mt-1.5 text-[11px] leading-5 text-[#77758b]">
                      Use clear action words and highlight what you built.
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                      <CheckCircle2 size={12} />
                      Improvement idea
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#eeebf7] bg-white p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Download size={17} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#39364d]">
                        PDF ready
                      </p>
                      <p className="mt-1 text-[10px] text-[#9994ad]">
                        Download your resume
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#eeebf7]">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating status card */}
          <div className="rx-float absolute -left-2 top-16 hidden items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-violet-950/10 sm:flex md:-left-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={19} />
            </span>
            <span>
              <span className="block text-xs font-bold text-[#292443]">
                Looking good!
              </span>
              <span className="mt-1 block text-[10px] text-[#9994ad]">
                Keep improving your resume
              </span>
            </span>
          </div>

          <div className="rx-float absolute -bottom-4 right-1 hidden items-center gap-2 rounded-xl border border-white bg-white px-4 py-3 shadow-xl shadow-violet-950/10 sm:flex md:-right-5">
            <Sparkles size={17} className="text-violet-600" />
            <span className="text-xs font-bold text-[#39364d]">
              Built for your next step
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

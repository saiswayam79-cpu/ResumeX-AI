
import {
  UserRound,
  FileText,
  Sparkles,
  Download,
  ArrowRight,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      title: "Create Your Account",
      description:
        "Sign up with your email and get your own space to build and manage your resumes.",
      icon: UserRound,
    },
    {
      title: "Build Your Resume",
      description:
        "Add your education, skills, projects, and experience using the resume form.",
      icon: FileText,
    },
    {
      title: "Improve It with AI",
      description:
        "Get helpful suggestions to improve wording, highlight your strengths, and make your resume clearer.",
      icon: Sparkles,
    },
    {
      title: "Download Your PDF",
      description:
        "Save your completed resume as a PDF, ready for you to review and share.",
      icon: Download,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-[#f8f7ff] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="rx-container relative">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3.5 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={15} />
            Simple from start to finish
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#19172b] sm:text-4xl md:text-5xl">
            Your next resume,{" "}
            <span className="rx-gradient-text">step by step.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#77758b] sm:text-lg sm:leading-8">
            No complicated process. Just follow four simple steps to create,
            improve, and download your resume.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group relative flex h-full min-w-0 items-start gap-4 rounded-2xl border border-[#e9e6f3] bg-white p-5 shadow-[0_8px_28px_rgba(38,24,89,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_35px_rgba(76,54,145,0.09)] sm:gap-5 sm:p-6 md:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-md shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <Icon size={23} strokeWidth={1.9} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-600">
                    Step {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg font-bold leading-snug tracking-tight text-[#25213d] sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#77758b] sm:text-base">
                    {step.description}
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  className="mt-1 hidden shrink-0 text-[#c2bbd9] transition-all duration-200 group-hover:translate-x-1 group-hover:text-violet-600 sm:block"
                />
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-[#77758b]">
          Start with what you have. Improve it as you go.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;


import {
  Bot,
  Target,
  FileText,
  ShieldCheck,
  Download,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function WhyChooseUs() {
  const reasons = [
    {
      title: "AI-Powered Suggestions",
      description:
        "Get useful ideas to improve your resume wording, clarity, and presentation.",
      icon: Bot,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Clear and Readable",
      description:
        "Organize your education, skills, and projects into a resume that's easy to understand.",
      icon: Target,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Made for Students",
      description:
        "Showcase your academic work, personal projects, and skills even when you're starting out.",
      icon: FileText,
      color: "bg-fuchsia-50 text-fuchsia-600",
    },
    {
      title: "Your Own Account",
      description:
        "Sign in to manage your saved resumes through your personal account.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "PDF Export",
      description:
        "Download your resume as a PDF so it's ready to review and share.",
      icon: Download,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Simple to Use",
      description:
        "Fill in your details, review your resume, and improve it without a complicated workflow.",
      icon: Sparkles,
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-violet-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="rx-container relative">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={15} />
            Built around your goals
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#19172b] sm:text-4xl md:text-5xl">
            Your resume,{" "}
            <span className="rx-gradient-text">your next opportunity.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#77758b] sm:text-lg sm:leading-8">
            Creating a resume doesn't have to feel difficult. ResumeX AI
            brings the essential tools together in one simple place.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group relative flex h-full min-w-0 flex-col rounded-2xl border border-[#e9e6f3] bg-white p-6 shadow-[0_8px_28px_rgba(38,24,89,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-[0_18px_42px_rgba(76,54,145,0.09)] sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${reason.color} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#d5d1e4]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-[#25213d] sm:text-xl">
                  {reason.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-7 text-[#77758b] sm:text-base">
                  {reason.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-700">
                  <span>Made to help</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

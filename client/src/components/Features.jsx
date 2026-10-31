
import {
  FileText,
  Target,
  Download,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

function Features() {
  const features = [
    {
      number: "01",
      title: "AI Resume Builder",
      description:
        "Build your resume with a clear structure for your education, skills, projects, and experience.",
      icon: FileText,
      accent: "from-violet-500 to-purple-600",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      number: "02",
      title: "Smart AI Suggestions",
      description:
        "Get practical feedback to improve wording, highlight your strengths, and make your resume clearer.",
      icon: Target,
      accent: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      number: "03",
      title: "Ready-to-Download PDF",
      description:
        "Download your finished resume as a PDF that you can review, share, and use when applying for jobs.",
      icon: Download,
      accent: "from-fuchsia-500 to-violet-600",
      iconBg: "bg-fuchsia-50",
      iconColor: "text-fuchsia-600",
    },
  ];

  return (
    <section
      id="features"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="rx-container relative">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={15} />
            Everything in one place
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#19172b] sm:text-4xl md:text-5xl">
            A better way to{" "}
            <span className="rx-gradient-text">build your resume.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#77758b] sm:text-lg sm:leading-8">
            From your first draft to your final PDF, get the tools you need
            to present your skills with confidence.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e9e6f3] bg-white p-6 shadow-[0_8px_30px_rgba(38,24,89,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-[0_20px_45px_rgba(76,54,145,0.10)] sm:p-7 md:p-8"
              >
                {/* Top gradient line */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="mb-8 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} ${feature.iconColor} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-[#d5d1e4]">
                    {feature.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#25213d] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#77758b] sm:text-base">
                  {feature.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-violet-700">
                  <span>Designed to help you</span>
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

export default Features;

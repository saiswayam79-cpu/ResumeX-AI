
import { FileText, Target, Download } from "lucide-react";

function Features() {
  const features = [
    {
      title: "AI Resume Builder",
      description:
        "Create professional resumes quickly with AI assistance.",
      icon: FileText,
    },
    {
      title: "ATS Analyzer",
      description:
        "Improve your resume's ATS compatibility with smart suggestions.",
      icon: Target,
    },
    {
      title: "PDF Download",
      description:
        "Download your resume as a clean, professional PDF.",
      icon: Download,
    },
  ];

  return (
    <section
      id="features"
      className="w-full scroll-mt-20 bg-[#111111] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Our <span className="text-[#7892ff]">Features</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Everything you need to create, improve, and manage your resume.
          </p>
        </div>

        {/* Responsive Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-[#1c1c1c] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#7892ff]/50 hover:shadow-lg hover:shadow-black/20 sm:p-6 md:p-7"
              >
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-[#7892ff]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;

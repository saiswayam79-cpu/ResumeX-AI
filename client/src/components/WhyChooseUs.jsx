
import {
  Bot,
  Target,
  FileText,
  Shield,
  Download,
  Sparkles,
} from "lucide-react";

function WhyChooseUs() {
  const reasons = [
    {
      title: "AI Powered",
      description: "Smart AI suggestions to improve your resume.",
      icon: Bot,
    },
    {
      title: "ATS Friendly",
      description: "Create resumes that pass Applicant Tracking Systems.",
      icon: Target,
    },
    {
      title: "Professional Templates",
      description: "Choose from clean and modern resume templates.",
      icon: FileText,
    },
    {
      title: "Secure Storage",
      description: "Your resume data is safely stored and protected.",
      icon: Shield,
    },
    {
      title: "Fast PDF Export",
      description: "Download high-quality PDF resumes instantly.",
      icon: Download,
    },
    {
      title: "Easy to Use",
      description: "Simple interface designed for beginners and professionals.",
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="about"
      className="w-full scroll-mt-20 bg-[#111111] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Why Choose <span className="text-[#7892ff]">ResumeX AI?</span>
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-300 sm:text-lg">
            Simple tools to help you create a better resume.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-[#1c1c1c] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#7892ff]/50 hover:shadow-lg hover:shadow-black/20 sm:p-6 md:p-7"
              >
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-[#7892ff]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

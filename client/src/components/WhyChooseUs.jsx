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
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose ResumeX AI?
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Simple tools to help you create a better resume.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-xl p-7 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-5">
                  <Icon size={25} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-6">
                  {reason.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
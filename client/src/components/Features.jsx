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
    <section id="features" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Features
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, improve, and manage your resume.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-xl p-7 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-5">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;
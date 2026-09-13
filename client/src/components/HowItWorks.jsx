function HowItWorks() {
  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up securely using your email address.",
    },
    {
      title: "Build Your Resume",
      description:
        "Fill in your education, skills, projects, and experience.",
    },
    {
      title: "AI Improves Your Resume",
      description:
        "Get ATS-friendly suggestions to improve your resume.",
    },
    {
      title: "Download PDF",
      description:
        "Export your resume as a professional PDF in one click.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How ResumeX AI Works
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Create your resume in a few simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-7 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-5">

                <div className="w-11 h-11 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-6">
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
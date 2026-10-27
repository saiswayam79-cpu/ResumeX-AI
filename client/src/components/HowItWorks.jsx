
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
    <section
      id="how-it-works"
      className="w-full scroll-mt-20 bg-[#171717] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            How <span className="text-[#7892ff]">ResumeX AI</span> Works
          </h2>

          <p className="mt-3 text-base leading-7 text-gray-300 sm:text-lg">
            Create your resume in a few simple steps.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="flex h-full min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-[#202020] p-5 transition duration-200 hover:border-[#7892ff]/50 hover:bg-[#242424] sm:gap-5 sm:p-6 md:p-7"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

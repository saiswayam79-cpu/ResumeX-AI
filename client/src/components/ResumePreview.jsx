function ResumePreview({
  fullName,
  email,
  phone,
  college,
  degree,
  cgpa,
  skills,
  projects,
}) {
  return (
    <div
      data-resume
      className="bg-white shadow-lg border border-gray-200 min-h-[842px] p-8 md:p-10"
      style={{
        color: "#000000",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >

      <div className="text-center border-b-2 border-black pb-5 mb-6">

        <h1 className="text-3xl font-bold">
          {fullName || "Your Name"}
        </h1>

        <p className="text-sm mt-3">
          {email || "your@email.com"}
          {phone && " | "}
          {phone || "Phone Number"}
        </p>

      </div>

      <section className="mb-6">

        <h2 className="text-lg font-bold uppercase border-b border-gray-400 pb-1 mb-3">
          Education
        </h2>

        <div className="text-sm space-y-1">

          <p>
            <strong>{degree || "Degree"}</strong>
          </p>

          <p>
            {college || "College Name"}
          </p>

          <p>
            CGPA: {cgpa || "-"}
          </p>

        </div>

      </section>

      <section className="mb-6">

        <h2 className="text-lg font-bold uppercase border-b border-gray-400 pb-1 mb-3">
          Skills
        </h2>

        <p className="text-sm leading-6 whitespace-pre-line">
          {skills || "Add your skills here"}
        </p>

      </section>

      <section>

        <h2 className="text-lg font-bold uppercase border-b border-gray-400 pb-1 mb-3">
          Projects
        </h2>

        <p className="text-sm leading-6 whitespace-pre-line">
          {projects || "Add your projects here"}
        </p>

      </section>

    </div>
  );
}

export default ResumePreview;
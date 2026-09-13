const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log(
  process.env.GEMINI_API_KEY
    ? "Gemini API key loaded"
    : "Gemini API key missing"
);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ResumeX AI server is running");
});

app.post("/ai/suggest", async (req, res) => {
  try {
    const { resume } = req.body;

    if (!resume) {
      return res.status(400).json({
        error: "Resume data is required",
      });
    }

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
    });

    const prompt = `
You are an AI resume assistant for ResumeX AI.

Review the user's resume and provide short, practical suggestions
that can genuinely improve the resume.

Focus only on:
- ATS-friendly wording
- Grammar and spelling
- Resume structure
- Skills
- Projects
- Education
- Clarity and professionalism

IMPORTANT RULES:

1. Never invent information.
2. Never assume the user has a skill, project, achievement,
   internship, company, percentage, date, degree, certification,
   technology, or experience that is not present in the resume.
3. Do not create fake achievements or numbers.
4. If something is missing, say that it can be added if the user
   actually has that information.
5. Do not rewrite the entire resume.
6. Give a maximum of 6 important suggestions.
7. Keep each suggestion short and easy to understand.
8. Give suggestions based only on the information provided.
9. Do not give generic advice unless it is relevant to this resume.
10. If a section is already good, do not suggest unnecessary changes.

Use exactly this format:

AI Resume Suggestions

1. [Section Name]
- [Short suggestion]

2. [Section Name]
- [Short suggestion]

3. [Section Name]
- [Short suggestion]

Only include sections that actually need improvement.

Resume:
${JSON.stringify(resume)}
`;

    const result = await model.generateContent(prompt);

    const suggestion = result.response.text();

    res.json({
      suggestion: suggestion,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      error: "AI request failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY
});

async function generateContent(prompt) {
    const interaction = await ai.interactions.create({
        model: "gemini-3.8-flash",

        input: prompt,

        system_instruction: `


You are an expert code reviewer with strong software development experience. Analyze code to find bugs, logical errors, security issues, performance problems, and areas for improvement.

• Code Quality :- Clean, readable, maintainable code.
• Best Practices :- Follow DRY, SOLID, and industry standards.
• Performance :- Identify inefficient or unnecessary operations.
• Security :- Detect vulnerabilities such as SQL Injection, XSS, and CSRF.
• Scalability :- Suggest solutions that can scale.

🔍 Issues:
• ❌ Clearly identify the problem and explain its impact.

✅ Recommended Fix:

// Corrected or improved code

💡 Improvements:
• ✔ Explain what was improved and why it is better.

Be precise, practical, and concise. Provide production-quality solutions without unnecessary changes.

`
    });

    return interaction.output_text;
}

module.exports = generateContent;
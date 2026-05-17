// backend/src/controllers/codeController.js
const PAIZA_API = "https://api.paiza.io/runners";

const LANG_MAP = {
  javascript: "javascript",
  python: "python3",
  java: "java",
};

export async function executeCode(req, res) {
  try {
    const { language, code } = req.body;
    const lang = LANG_MAP[language.toLowerCase()];

    if (!lang) {
      return res.status(400).json({ success: false, error: "Unsupported language" });
    }

    // 1. Send code to Paiza
    const createRes = await fetch(`${PAIZA_API}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_code: code,
        language: lang,
        api_key: "guest",
      }),
    });

    const createData = await createRes.json();
    if (createData.error) return res.status(400).json({ success: false, error: createData.error.message });

    const runId = createData.id;

    // 2. Wait 2 seconds for compilation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 3. Fetch the result
    const resultRes = await fetch(`${PAIZA_API}/get_details?id=${runId}&api_key=guest`);
    const resultData = await resultRes.json();

    if (resultData.build_result === "failure") {
      return res.status(200).json({ success: false, error: resultData.build_stderr });
    }
    if (resultData.result !== "success") {
      return res.status(200).json({ success: false, error: resultData.stderr || "Execution failed" });
    }

    // 4. Send the result BACK to the React frontend
    return res.status(200).json({
      success: true,
      output: resultData.stdout || "No output",
    });

  } catch (error) {
    console.error("Backend Code Execution Error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
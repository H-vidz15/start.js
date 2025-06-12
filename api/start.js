export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const auth = req.headers.authorization;
  if (auth !== "Bearer nTsm66L6qqz2R3e1DEohJss0") {
    return res.status(401).send("Unauthorized");
  }

  const { action, script } = req.body;

  if (action === "stop") {
    // Replace this with your bot shutdown logic
    return res.status(200).send("✅ Bot stopped.");
  }

  if (script) {
    // Replace this with bot deployment logic (e.g., write to file, spawn child process, etc.)
    return res.status(200).send("✅ Bot deployed. Pair at: https://wa.me/9076087791");
  }

  return res.status(400).send("❌ Invalid request.");
}

import type { Prompt } from "../types";

const prompt03: Prompt = {
  id: 3,
  num: "03",
  title: "Debugging Engineer Level Produksi",
  subtitle: "Production Debug Mode",
  icon: "Bug",
  accent: "#ef4444",
  tags: ["debugging", "root cause", "edge case", "produksi"],
  filters: ["debugging"],
  desc: "Claude menginvestigasi bug produksi layaknya menangani critical outage — menelusuri akar masalah, mengidentifikasi edge case tersembunyi, dan memberikan fix paling solid.",
  useCase: "Gunakan saat ada bug misterius di produksi yang tidak jelas penyebabnya dan butuh analisis mendalam.",
  prompt: `Act like a senior debugging engineer investigating a live production issue. Analyze the codebase step by step like you're handling a critical outage at a fast-growing startup. Your job:

• Understand what the code actually does
• Trace the real root cause
• Explain why the failure happens
• Identify hidden edge cases
• Propose the most robust fix possible

Finally provide:
• Code functionality breakdown
• Root cause analysis
• Failure explanation
• Edge case analysis
• Fixed production-ready code

Do not guess. Think deeply before making changes.`,
};

export default prompt03;

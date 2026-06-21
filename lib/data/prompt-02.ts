import type { Prompt } from "../types";

const prompt02: Prompt = {
  id: 2,
  num: "02",
  title: "Audit Codebase Seperti Senior Engineer",
  subtitle: "Code Audit Mode",
  icon: "ScanSearch",
  accent: "#3b82f6",
  tags: ["audit", "refactoring", "code quality", "arsitektur"],
  filters: ["arsitektur"],
  desc: "Claude berperan sebagai senior engineer yang baru bergabung dan langsung mengaudit codebase-mu secara menyeluruh — menemukan keputusan buruk, logika duplikat, bottleneck, dan risiko skalabilitas.",
  useCase: "Ideal untuk proyek yang sudah berjalan tapi mulai terasa lambat, susah dirawat, atau penuh technical debt.",
  prompt: `Act like a senior engineer who just joined a massive unfamiliar codebase. First reverse-engineer the architecture and understand the complete data flow.

Then identify:
• Bad architecture decisions
• Duplicate logic
• Performance bottlenecks
• Scalability risks
• Maintainability issues

Finally provide:
• A clean architecture breakdown
• Critical problem areas
• Refactoring strategies
• Improved production-grade code

Do not change functionality.

Only upgrade the code quality, scalability, and maintainability.`,
};

export default prompt02;

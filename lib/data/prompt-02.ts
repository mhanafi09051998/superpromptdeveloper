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
  prompt: `Act like a senior engineer who just joined a large, unfamiliar production codebase. Your first week on the job is spent purely reading and understanding — not rewriting.

Phase 1 — Understand before judging:
• Reverse-engineer the architecture: what is the system trying to do?
• Trace the complete data flow from entry point to persistence layer
• Identify the implicit assumptions the original author made
• Note what is working well before listing what is broken

Phase 2 — Audit with severity levels:
For each issue found, classify it as:
[CRITICAL] — causes bugs, data loss, or security risk right now
[HIGH] — will cause problems at scale or makes the codebase hard to change safely
[MEDIUM] — technical debt that slows down development
[LOW] — stylistic or minor consistency issues

Categories to audit:
• Architectural decisions (coupling, separation of concerns, layering)
• Duplicate or redundant logic
• Performance bottlenecks and N+1 patterns
• Scalability risks under load
• Error handling gaps and silent failures
• Maintainability issues (naming, complexity, missing abstractions)

Phase 3 — Deliver actionable output:
• Architecture diagram in plain text or pseudocode
• Prioritized list of findings with severity and estimated fix effort (S/M/L)
• Concrete refactoring strategies with before/after code examples
• A recommended order of attack: what to fix first and why

Hard rule: Do NOT change functionality. Only improve quality, safety, and maintainability. If you are unsure whether a change affects behavior, flag it explicitly rather than silently modifying it.`,
};

export default prompt02;

import type { Prompt } from "../types";

const prompt06: Prompt = {
  id: 6,
  num: "06",
  title: "Arsitek Backend Startup Seperti Systems Engineer",
  subtitle: "Systems Architect Mode",
  icon: "Server",
  accent: "#14b8a6",
  tags: ["backend", "system design", "API", "database", "caching"],
  filters: ["backend", "arsitektur"],
  desc: "Claude merancang infrastruktur backend lengkap untuk startup kamu — arsitektur sistem, alur data, desain API, skema database, strategi caching, dan kode implementasi siap produksi.",
  useCase: "Gunakan di awal pembangunan backend atau saat hendak migrasi ke arsitektur yang lebih scalable.",
  prompt: `Act like a senior systems architect designing infrastructure for a high-growth startup.

First design a scalable production-grade system architecture. Then build the minimal implementation that could realistically scale in the future.

Include:
• System architecture
• Component structure
• Data flow
• API design
• Database schema
• Caching strategy
• Production-ready implementation code

Optimize for scalability, maintainability, and real-world production usage.`,
};

export default prompt06;

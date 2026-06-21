import type { Prompt } from "../types";

const prompt01: Prompt = {
  id: 1,
  num: "01",
  title: "Tim Engineering Startup Lengkap",
  subtitle: "Full-Stack Engineer Mode",
  icon: "Rocket",
  accent: "#f97316",
  tags: ["full-stack", "arsitektur", "MVP", "startup"],
  filters: ["arsitektur", "backend", "frontend"],
  desc: "Jadikan Claude sebagai senior full-stack engineer yang merancang dan membangun seluruh MVP startup dari nol — arsitektur sistem, database, API, hingga UI sekaligus.",
  useCase: "Cocok saat kamu mulai proyek baru dan butuh panduan arsitektur menyeluruh dari satu sumber.",
  prompt: `Act like a senior full-stack engineer building a production-ready startup MVP from scratch.

First design the complete system architecture, then build the most minimal but scalable version possible.

Include:
• System architecture
• File structure
• Database schema
• API endpoints
• UI architecture
• Production-ready code

Build it like a real startup that could scale to millions of users.`,
};

export default prompt01;

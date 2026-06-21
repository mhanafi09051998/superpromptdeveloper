import type { Prompt } from "../types";

const prompt04: Prompt = {
  id: 4,
  num: "04",
  title: "Engineer Optimasi Performa",
  subtitle: "Performance Engineer Mode",
  icon: "Zap",
  accent: "#eab308",
  tags: ["performa", "optimasi", "memory", "kecepatan"],
  filters: ["performa"],
  desc: "Claude menjadi senior performance engineer yang memburu bottleneck, memory leak, render berlebihan, dan operasi mahal — lalu menulis ulang kode untuk traffic masif.",
  useCase: "Pakai saat aplikasimu mulai lambat, CPU atau memory melonjak, atau perlu siap menghadapi lonjakan pengguna.",
  prompt: `Act like a senior performance engineer optimizing a production application used by millions of users.

Your goals:
• Maximum speed
• Lower memory usage
• Better scalability
• Faster rendering
• Cleaner execution

Carefully identify:
• Performance bottlenecks
• Inefficient logic
• Unnecessary rendering
• Expensive operations
• Memory leaks

Then provide:
• Performance issue breakdown
• Optimization strategies
• Improved production-ready code
• Scalability recommendations

Optimize the code like you're preparing it for massive traffic.`,
};

export default prompt04;

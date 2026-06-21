import type { Prompt } from "../types";

const prompt10: Prompt = {
  id: 10,
  num: "10",
  title: "Senior DevOps & Deployment Engineer",
  subtitle: "DevOps Engineer Mode",
  icon: "Container",
  accent: "#06b6d4",
  tags: ["DevOps", "CI/CD", "Docker", "Kubernetes", "monitoring"],
  filters: ["devops"],
  desc: "Di sinilah Claude menjadi benar-benar berbahaya. Claude menyiapkan seluruh infrastruktur deployment produksi kamu — pipeline CI/CD, container, strategi monitoring, dan checklist deployment.",
  useCase: "Gunakan saat hendak deploy pertama kali ke produksi atau upgrade pipeline yang masih manual.",
  prompt: `Act like a senior DevOps engineer preparing this application for real production deployment.

Your job:
• Design deployment architecture
• Configure CI/CD
• Setup monitoring/logging
• Improve reliability
• Reduce downtime risks
• Optimize scaling

Provide:
• Infrastructure architecture
• Deployment workflow
• CI/CD pipeline
• Docker/Kubernetes setup
• Monitoring strategy
• Production deployment checklist

This is where Claude becomes genuinely dangerous.`,
};

export default prompt10;

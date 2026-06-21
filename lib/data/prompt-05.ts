import type { Prompt } from "../types";

const prompt05: Prompt = {
  id: 5,
  num: "05",
  title: "Rebuild Kode Berantakan Jadi Arsitektur Bersih",
  subtitle: "Clean Architecture Mode",
  icon: "Layers",
  accent: "#a855f7",
  tags: ["refactoring", "clean architecture", "modular", "skalabilitas"],
  filters: ["arsitektur"],
  desc: "Claude berperan sebagai software architect yang merombak codebase berantakan menggunakan prinsip clean architecture — tanpa mengubah perilaku produk sama sekali.",
  useCase: "Tepat untuk codebase yang sudah susah dibaca, coupling-nya tinggi, atau folder structure-nya tidak masuk akal.",
  prompt: `Act like a senior software architect rebuilding a messy production codebase using clean architecture principles.

Your mission:
• Separate concerns properly
• Increase modularity
• Reduce tight coupling
• Improve scalability
• Make the codebase easier to maintain long term

Do NOT change the product behavior. Only improve the architecture and code quality.

Finally provide:
• New folder structure
• Clean architecture breakdown
• Refactored production-grade code
• Explanation of architectural improvements

Refactor it like a real senior engineer preparing the codebase to scale.`,
};

export default prompt05;

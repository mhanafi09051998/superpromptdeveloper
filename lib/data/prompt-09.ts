import type { Prompt } from "../types";

const prompt09: Prompt = {
  id: 9,
  num: "09",
  title: "Audit Keamanan Produksi",
  subtitle: "Security Audit Mode",
  icon: "ShieldCheck",
  accent: "#f43f5e",
  tags: ["keamanan", "vulnerability", "audit", "autentikasi"],
  filters: ["keamanan"],
  desc: "Kebanyakan developer tidak pernah meminta Claude berpikir seperti security engineer. Itu kesalahan besar. Dapatkan laporan kerentanan lengkap dengan tingkat keparahan dan perbaikan siap produksi.",
  useCase: "Wajib dijalankan sebelum launch produk atau setelah menambahkan fitur autentikasi dan integrasi pihak ketiga.",
  prompt: `Act like a senior security engineer auditing a production application.

Carefully inspect the system for:
• Security vulnerabilities
• Authentication flaws
• API weaknesses
• Injection risks
• Sensitive data exposure
• Infrastructure risks

Then provide:
• Vulnerability report
• Severity levels
• Attack scenarios
• Secure implementation fixes
• Production-grade recommendations

Most people never ask Claude to think like a security engineer. That's a huge mistake.`,
};

export default prompt09;

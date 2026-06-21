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
  prompt: `Act like a senior application security engineer conducting a formal security audit of a production system. You think like an attacker to defend like a professional.

Your audit framework follows OWASP Top 10 and goes beyond it. You do not just list vulnerabilities — you explain how they would be exploited, what the actual damage would be, and exactly how to fix them.

Audit scope — inspect all of the following:

Authentication & Session Management:
• Password hashing algorithm and iteration count
• Session token entropy, storage, and expiry
• JWT validation: algorithm confusion, expiry checks, signature verification
• Multi-factor authentication gaps
• Account enumeration via timing or response differences

Authorization:
• Broken object-level authorization (BOLA/IDOR): can user A access user B's data?
• Privilege escalation paths
• Missing authorization on internal or admin endpoints

Input Handling & Injection:
• SQL injection (including second-order injection)
• NoSQL injection, Command injection, Path traversal
• Server-Side Template Injection (SSTI)
• XML/JSON deserialization vulnerabilities

Data Exposure:
• Sensitive data in logs, error messages, or API responses
• PII or secrets hardcoded in source code or config files
• Unencrypted data at rest or in transit
• Over-exposed API fields (returning more data than the client needs)

Infrastructure & Configuration:
• CORS policy: is it too permissive?
• Security headers: CSP, HSTS, X-Frame-Options, etc.
• Rate limiting and brute force protection
• Dependency vulnerabilities (outdated packages with known CVEs)

For each finding, deliver:
[SEVERITY: CRITICAL / HIGH / MEDIUM / LOW / INFORMATIONAL]
• Vulnerability description
• Proof-of-concept attack scenario (how an attacker would exploit this)
• Business impact if exploited
• Exact code fix with before/after
• Verification: how to confirm the fix is effective

End with a prioritized remediation plan: fix these in this order, for these reasons.`,
};

export default prompt09;

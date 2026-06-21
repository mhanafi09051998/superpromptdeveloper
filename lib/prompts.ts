export type FilterKey =
  | "all"
  | "architecture"
  | "backend"
  | "frontend"
  | "devops"
  | "security"
  | "debugging"
  | "performance";

export interface Prompt {
  id: number;
  num: string;
  title: string;
  icon: string;
  accentColor: string;
  iconBg: string;
  tags: string[];
  filters: FilterKey[];
  desc: string;
  prompt: string;
}

export const PROMPTS: Prompt[] = [
  {
    id: 1,
    num: "01",
    title: "Turn Claude into a Full Startup Engineering Team",
    icon: "🚀",
    accentColor: "#6c63ff",
    iconBg: "rgba(108,99,255,0.15)",
    tags: ["fullstack", "architecture", "backend", "frontend"],
    filters: ["architecture", "backend", "frontend"],
    desc: "Turns Claude into a senior full-stack engineer that designs and builds your entire startup MVP — architecture, database, APIs, and UI all in one go.",
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
  },
  {
    id: 2,
    num: "02",
    title: "Make Claude Audit Your Entire Codebase Like a Senior Engineer",
    icon: "🔍",
    accentColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.15)",
    tags: ["audit", "architecture", "refactoring", "code quality"],
    filters: ["architecture"],
    desc: "Claude acts as a senior engineer who just joined your team and performs a thorough audit — finding bad decisions, duplicate logic, bottlenecks, and scalability risks.",
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
  },
  {
    id: 3,
    num: "03",
    title: "Turn Claude into a Production-Level Debugging Monster",
    icon: "🐛",
    accentColor: "#ef4444",
    iconBg: "rgba(239,68,68,0.15)",
    tags: ["debugging", "root cause", "production", "edge cases"],
    filters: ["debugging"],
    desc: "Claude investigates your production issue like it's handling a critical outage — tracing the real root cause, identifying hidden edge cases, and providing the most robust fix.",
    prompt: `Act like a senior debugging engineer investigating a live production issue. Analyze the codebase step by step like you're handling a critical outage at a fast-growing startup.

Your job:
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
  },
  {
    id: 4,
    num: "04",
    title: "Turn Claude into a Performance Optimization Engineer",
    icon: "⚡",
    accentColor: "#eab308",
    iconBg: "rgba(234,179,8,0.15)",
    tags: ["performance", "optimization", "scalability", "speed"],
    filters: ["performance"],
    desc: "Claude becomes a senior performance engineer who hunts down bottlenecks, memory leaks, unnecessary renders, and expensive operations — then rewrites for massive traffic.",
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
  },
  {
    id: 5,
    num: "05",
    title: "Make Claude Rebuild Messy Code into Clean Scalable Architecture",
    icon: "🏗️",
    accentColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.15)",
    tags: ["refactoring", "clean architecture", "modularity", "scalability"],
    filters: ["architecture"],
    desc: "Claude acts as a senior software architect who rebuilds your messy codebase using clean architecture principles — without ever breaking the product behavior.",
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
  },
  {
    id: 6,
    num: "06",
    title: "Make Claude Architect Your Entire Startup Backend",
    icon: "🖥️",
    accentColor: "#14b8a6",
    iconBg: "rgba(20,184,166,0.15)",
    tags: ["backend", "systems design", "api", "database", "caching"],
    filters: ["backend", "architecture"],
    desc: "Claude designs your complete backend infrastructure — system architecture, data flow, API design, database schema, caching strategy, and production-ready implementation code.",
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
  },
  {
    id: 7,
    num: "07",
    title: "Turn Claude into a Senior Frontend Engineer",
    icon: "🎨",
    accentColor: "#ec4899",
    iconBg: "rgba(236,72,153,0.15)",
    tags: ["frontend", "ui components", "accessibility", "responsive design"],
    filters: ["frontend"],
    desc: "Claude becomes a senior frontend engineer who builds production-grade, accessible UI systems — handling every edge case, loading state, and responsive breakpoint like a pro.",
    prompt: `Act like a senior frontend engineer building production-grade UI systems for a modern startup.

Your task is to create:
• Reusable UI components
• Scalable component architecture
• Accessible production-ready interfaces

While building, carefully handle:
• Loading states
• Empty states
• Edge cases
• Responsive design
• Accessibility
• Component reusability
• Clean developer experience

Finally provide:
• Component architecture
• Props/API design
• Production-ready implementation
• Usage examples
• Best practices

Build it like it's going into a real production app used by millions.`,
  },
  {
    id: 8,
    num: "08",
    title: "AI Technical Lead Mode",
    icon: "👨‍💼",
    accentColor: "#818cf8",
    iconBg: "rgba(129,140,248,0.15)",
    tags: ["tech lead", "architecture", "decision making", "tradeoffs"],
    filters: ["architecture"],
    desc: "The most powerful mode. Claude stops being a code generator and starts thinking like an actual tech lead — challenging decisions, identifying risks, planning for 5+ years.",
    prompt: `Act like a senior technical lead managing a real engineering team.

Before writing code:
• Ask clarifying questions
• Challenge bad decisions
• Identify scaling risks
• Suggest better approaches
• Prioritize simplicity

Think long-term like someone responsible for maintaining this product for 5+ years.

Then provide:
• Technical decisions
• Tradeoff analysis
• Recommended architecture
• Implementation plan
• Production-ready solution

This makes Claude stop behaving like a code generator... and start thinking like an actual tech lead.`,
  },
  {
    id: 9,
    num: "09",
    title: "Production Security Audit",
    icon: "🔒",
    accentColor: "#ef4444",
    iconBg: "rgba(239,68,68,0.15)",
    tags: ["security", "vulnerabilities", "audit", "authentication"],
    filters: ["security"],
    desc: "Most people never ask Claude to think like a security engineer. That's a huge mistake. Get a full vulnerability report with severity levels and production-grade fixes.",
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
  },
  {
    id: 10,
    num: "10",
    title: "Senior DevOps + Deployment Engineer",
    icon: "🚢",
    accentColor: "#06b6d4",
    iconBg: "rgba(6,182,212,0.15)",
    tags: ["devops", "ci/cd", "docker", "kubernetes", "monitoring"],
    filters: ["devops"],
    desc: "This is where Claude becomes genuinely dangerous. It sets up your entire production deployment — CI/CD pipelines, containers, monitoring strategy, and deployment checklists.",
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
  },
];

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "architecture", label: "Architecture" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "devops", label: "DevOps" },
  { key: "security", label: "Security" },
  { key: "debugging", label: "Debugging" },
  { key: "performance", label: "Performance" },
];

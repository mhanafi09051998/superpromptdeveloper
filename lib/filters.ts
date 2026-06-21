import type { FilterKey } from "./types";

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "semua", label: "Semua" },
  { key: "arsitektur", label: "Arsitektur" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "devops", label: "DevOps" },
  { key: "keamanan", label: "Keamanan" },
  { key: "debugging", label: "Debugging" },
  { key: "performa", label: "Performa" },
];

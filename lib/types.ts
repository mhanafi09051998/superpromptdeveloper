export type FilterKey =
  | "semua"
  | "arsitektur"
  | "backend"
  | "frontend"
  | "devops"
  | "keamanan"
  | "debugging"
  | "performa";

export interface Prompt {
  id: number;
  num: string;
  title: string;
  subtitle: string;
  icon: string;
  accent: string;
  tags: string[];
  filters: FilterKey[];
  desc: string;
  useCase: string;
  prompt: string;
}

"use client";

import { useState } from "react";
import {
  Copy, Check, ChevronDown, ChevronUp,
  Rocket, ScanSearch, Bug, Zap, Layers,
  Server, Monitor, Brain, ShieldCheck, Container,
} from "lucide-react";
import type { Prompt } from "@/lib/prompts";

const ICONS: Record<string, React.ElementType> = {
  Rocket, ScanSearch, Bug, Zap, Layers,
  Server, Monitor, Brain, ShieldCheck, Container,
};

interface Props {
  prompt: Prompt;
  onCopied: () => void;
  index: number;
}

export default function PromptCard({ prompt: p, onCopied, index: _index }: Props) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const Icon = ICONS[p.icon] ?? Zap;

  async function handleCopy() {
    await navigator.clipboard.writeText(p.prompt);
    setCopied(true);
    onCopied();
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <article
      className="card-item relative flex flex-col rounded-2xl border overflow-hidden"
      style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = p.accent + "66";
        el.style.boxShadow = `0 0 0 1px ${p.accent}22, 0 16px 48px rgba(0,0,0,0.12)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border-color)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Decorative number */}
      <div className="num-deco absolute -top-4 right-3 select-none" aria-hidden="true">
        {p.num}
      </div>

      {/* Top section */}
      <div className="relative px-6 pt-6 pb-0">
        {/* Icon + subtitle */}
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: p.accent + "1a" }}
          >
            <Icon size={17} style={{ color: p.accent }} aria-hidden="true" />
          </div>
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em]" style={{ color: p.accent }}>
            {p.subtitle}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[1.05rem] font-bold leading-snug mb-2 pr-10" style={{ color: "var(--text-primary)" }}>
          {p.title}
        </h2>

        {/* Description */}
        <p className="text-[0.83rem] leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
          {p.desc}
        </p>

        {/* Use case callout */}
        <div
          className="flex gap-2 rounded-lg px-3 py-2.5 mb-4 text-[0.78rem] leading-relaxed"
          style={{
            background: "var(--callout-bg)",
            borderLeft: `3px solid ${p.accent}`,
          }}
        >
          <span className="shrink-0 font-semibold" style={{ color: "var(--text-dim)" }}>Kapan pakai:</span>
          <span style={{ color: "var(--text-muted)" }}>{p.useCase}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.66rem] font-medium px-2 py-0.5 rounded-md border"
              style={{
                background: "var(--tag-bg)",
                color: "var(--tag-color)",
                borderColor: "var(--tag-border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t" style={{ borderColor: "var(--border-subtle)" }} />

      {/* Prompt box */}
      <div className="px-6 pt-4">
        <div
          className="rounded-xl overflow-hidden border"
          style={{ background: "var(--prompt-bg)", borderColor: "var(--border-subtle)" }}
        >
          {/* Terminal bar */}
          <div
            className="flex items-center gap-2 px-3.5 py-2 border-b"
            style={{ background: "var(--prompt-bar)", borderColor: "var(--border-subtle)" }}
          >
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[0.65rem] font-medium ml-1 uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              prompt · salin dan tempelkan ke Claude
            </span>
          </div>

          {/* Text */}
          <div className="relative">
            <pre
              className="mono px-4 py-4 text-[0.76rem] leading-[1.7] whitespace-pre-wrap break-words overflow-hidden transition-[max-height] duration-300"
              style={{
                maxHeight: expanded ? "600px" : "148px",
                color: "var(--prompt-text)",
              }}
            >
              {p.prompt}
            </pre>
            {!expanded && (
              <div className="fade-overlay absolute bottom-0 left-0 right-0 h-12 pointer-events-none" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 px-6 py-4 mt-auto">
        <button
          onClick={handleCopy}
          aria-label={`Salin prompt ${p.num}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[0.82rem] font-semibold transition-all duration-200 border"
          style={{
            background: copied ? p.accent + "18" : "var(--btn-secondary)",
            color: copied ? p.accent : "var(--text-secondary)",
            borderColor: copied ? p.accent + "55" : "var(--btn-secondary-border)",
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Tersalin!" : "Salin Prompt"}
        </button>
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-[0.78rem] font-medium transition-all duration-200 border"
          style={{
            background: "var(--btn-secondary)",
            borderColor: "var(--btn-secondary-border)",
            color: "var(--text-dim)",
          }}
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Tutup" : "Buka"}
        </button>
      </div>
    </article>
  );
}

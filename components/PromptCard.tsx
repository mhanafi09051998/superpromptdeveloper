"use client";

import { useState } from "react";
import {
  Copy, Check, ChevronDown, ChevronUp,
  Rocket, ScanSearch, Bug, Zap, Layers,
  Server, Monitor, Brain, ShieldCheck, Container,
} from "lucide-react";
import type { Prompt } from "@/lib/prompts";

// Icon registry — extend here when adding new prompt types
const ICON_MAP: Record<string, React.ElementType> = {
  Rocket, ScanSearch, Bug, Zap, Layers,
  Server, Monitor, Brain, ShieldCheck, Container,
};

interface Props {
  prompt: Prompt;
  onCopied: () => void;
}

/** Fallback for environments where Clipboard API is unavailable (HTTP / old browsers) */
function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    ok ? resolve() : reject(new Error("execCommand copy failed"));
  });
}

export default function PromptCard({ prompt: p, onCopied }: Props) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const Icon = ICON_MAP[p.icon] ?? Zap;
  const expandId = `prompt-text-${p.id}`;

  async function handleCopy() {
    try {
      await copyToClipboard(p.prompt);
      setCopied(true);
      setCopyError(false);
      onCopied();
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  }

  return (
    <article
      className="card-item relative flex flex-col rounded-2xl border overflow-hidden"
      style={{
        "--accent": p.accent,
        background: "var(--surface)",
        borderColor: "var(--border-color)",
      } as React.CSSProperties}
    >
      {/* Accent top bar — CSS-driven via .card-item:hover */}
      <div className="card-accent-bar" aria-hidden="true" />

      {/* Decorative number */}
      <div className="num-deco absolute -top-4 right-3 select-none" aria-hidden="true">
        {p.num}
      </div>

      {/* Card header */}
      <div className="relative px-6 pt-5 pb-0">
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: p.accent + "1a" }}
          >
            <Icon size={17} style={{ color: p.accent }} aria-hidden="true" />
          </div>
          <span
            className="text-[0.7rem] font-bold uppercase tracking-[0.1em]"
            style={{ color: p.accent }}
          >
            {p.subtitle}
          </span>
        </div>

        <h2 className="text-[1.05rem] font-bold leading-snug mb-2 pr-10" style={{ color: "var(--text-primary)" }}>
          {p.title}
        </h2>

        <p className="text-[0.83rem] leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
          {p.desc}
        </p>

        {/* Use-case callout */}
        <div
          className="flex gap-2 rounded-lg px-3 py-2.5 mb-4 text-[0.78rem] leading-relaxed"
          style={{ background: "var(--callout-bg)", borderLeft: `3px solid ${p.accent}` }}
        >
          <span className="shrink-0 font-semibold" style={{ color: "var(--text-dim)" }}>Kapan pakai:</span>
          <span style={{ color: "var(--text-muted)" }}>{p.useCase}</span>
        </div>

        {/* Tags */}
        <ul className="flex flex-wrap gap-1.5 mb-5 list-none p-0 m-0" aria-label="Kategori">
          {p.tags.map((tag) => (
            <li
              key={tag}
              className="text-[0.66rem] font-medium px-2 py-0.5 rounded-md border"
              style={{ background: "var(--tag-bg)", color: "var(--tag-color)", borderColor: "var(--tag-border)" }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

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

          {/* Expandable area — CSS grid row trick, no magic height numbers */}
          <div className="prompt-expandable" data-expanded={expanded} id={expandId}>
            <div className="prompt-expandable__inner">
              <pre
                className="mono px-4 py-4 text-[0.76rem] leading-[1.7] whitespace-pre-wrap break-words"
                style={{ color: "var(--prompt-text)" }}
              >
                {p.prompt}
              </pre>
            </div>
          </div>

          {/* Fade only when collapsed */}
          {!expanded && (
            <div className="fade-overlay -mt-12 h-12 pointer-events-none relative z-10" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 px-6 py-4 mt-auto">
        <button
          onClick={handleCopy}
          aria-label={`Salin prompt ${p.num} ke clipboard`}
          aria-live="polite"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[0.82rem] font-semibold transition-all duration-200 border"
          style={{
            background: copied
              ? p.accent + "18"
              : copyError
              ? "rgba(239,68,68,0.1)"
              : "var(--btn-secondary)",
            color: copied ? p.accent : copyError ? "#ef4444" : "var(--text-secondary)",
            borderColor: copied
              ? p.accent + "55"
              : copyError
              ? "#ef4444"
              : "var(--btn-secondary-border)",
          }}
        >
          {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          {copied ? "Tersalin!" : copyError ? "Gagal menyalin" : "Salin Prompt"}
        </button>

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={expandId}
          aria-label={expanded ? `Tutup prompt ${p.num}` : `Buka prompt ${p.num} selengkapnya`}
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-[0.78rem] font-medium transition-all duration-200 border"
          style={{
            background: "var(--btn-secondary)",
            borderColor: "var(--btn-secondary-border)",
            color: "var(--text-dim)",
          }}
        >
          {expanded
            ? <><ChevronUp size={14} aria-hidden="true" /> Tutup</>
            : <><ChevronDown size={14} aria-hidden="true" /> Buka</>
          }
        </button>
      </div>
    </article>
  );
}

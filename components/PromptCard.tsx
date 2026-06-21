"use client";

import { useState, useRef } from "react";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import type { Prompt } from "@/lib/prompts";

interface Props {
  prompt: Prompt;
  onCopied: () => void;
}

export default function PromptCard({ prompt: p, onCopied }: Props) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(p.prompt);
    setCopied(true);
    onCopied();
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <article
      className="group flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      style={{
        background: "#1a1d27",
        borderColor: "#2a2d3e",
        boxShadow: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#3a3d58";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 12px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#2a2d3e";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Accent top bar */}
      <div
        className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: p.accentColor }}
      />

      {/* Header */}
      <div className="flex items-start gap-3 px-5 pt-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: p.iconBg }}
          aria-hidden="true"
        >
          {p.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-1"
            style={{ color: p.accentColor }}
          >
            Prompt {p.num}
          </p>
          <h2 className="text-[0.95rem] font-bold leading-snug text-slate-100">
            {p.title}
          </h2>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 px-5 pt-3" aria-label="Tags">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.68rem] font-semibold px-2 py-0.5 rounded"
            style={{ background: "rgba(108,99,255,0.12)", color: "#a09aff" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="px-5 pt-2.5 text-[0.84rem] text-slate-400 leading-relaxed">
        {p.desc}
      </p>

      {/* Prompt box */}
      <div
        className="mx-5 mt-4 rounded-xl overflow-hidden border"
        style={{ background: "#13151f", borderColor: "#22253a" }}
      >
        {/* Terminal dots */}
        <div
          className="flex items-center justify-between px-3 py-2 border-b"
          style={{ background: "#0e1018", borderColor: "#1e2130" }}
        >
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-600">
            Prompt
          </span>
        </div>

        {/* Prompt text */}
        <div className="relative">
          <pre
            className="px-3.5 py-3.5 text-[0.78rem] leading-relaxed font-mono text-slate-300 whitespace-pre-wrap break-words transition-all duration-300 overflow-hidden"
            style={{ maxHeight: expanded ? "none" : "156px" }}
          >
            {p.prompt}
          </pre>
          {!expanded && (
            <div
              className="prompt-fade absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 px-5 pt-3 pb-5 mt-auto">
        <button
          onClick={handleCopy}
          aria-label={`Copy prompt ${p.num} to clipboard`}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[0.83rem] font-semibold transition-all duration-200 border"
          style={{
            background: copied ? "rgba(67,217,143,0.12)" : "#2d3148",
            borderColor: copied ? "#43d98f" : "#3a3f5c",
            color: copied ? "#43d98f" : "#e2e8f0",
          }}
        >
          {copied ? (
            <>
              <Check size={14} /> Copied!
            </>
          ) : (
            <>
              <Copy size={14} /> Copy Prompt
            </>
          )}
        </button>
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`pt-${p.id}`}
          className="flex items-center gap-1 px-3 py-2.5 rounded-lg text-[0.78rem] font-medium transition-all duration-200 border text-slate-400 hover:text-slate-200"
          style={{ background: "transparent", borderColor: "#2a2d3e" }}
        >
          {expanded ? (
            <>
              <ChevronUp size={14} /> Collapse
            </>
          ) : (
            <>
              <ChevronDown size={14} /> Expand
            </>
          )}
        </button>
      </div>
    </article>
  );
}

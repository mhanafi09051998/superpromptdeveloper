"use client";

import { useState, useRef, useEffect } from "react";
import { History, X, GitCommit, ExternalLink } from "lucide-react";
import type { GitCommit as Commit } from "@/lib/github";

interface Props {
  commits: Commit[];
  version: string;
}

/** Strip conventional commit prefix (feat:, fix:, refactor:, etc.) for cleaner display */
function cleanTitle(title: string): string {
  return title.replace(/^(feat|fix|refactor|improve|chore|docs|style|test|perf|ci|build|revert)(\(.+?\))?:\s*/i, "");
}

/** Map commit prefix to badge label */
function getCommitType(title: string): { label: string; color: string } | null {
  const map: Record<string, { label: string; color: string }> = {
    feat:     { label: "Fitur baru",  color: "#22c55e" },
    improve:  { label: "Peningkatan", color: "#3b82f6" },
    fix:      { label: "Perbaikan",   color: "#ef4444" },
    refactor: { label: "Refactor",    color: "#a855f7" },
    perf:     { label: "Performa",    color: "#f59e0b" },
    docs:     { label: "Dokumentasi", color: "#06b6d4" },
  };
  const prefix = title.match(/^(\w+)(\(.+?\))?:/)?.[1]?.toLowerCase() ?? "";
  return map[prefix] ?? null;
}

export default function ChangelogDropdown({ commits, version }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const isEmpty = commits.length === 0;

  return (
    <div className="relative" ref={ref}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Lihat riwayat perubahan"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.75rem] font-semibold border transition-all duration-200"
        style={{
          background: open ? "var(--surface-2)" : "transparent",
          borderColor: "var(--border-color)",
          color: "var(--text-muted)",
        }}
      >
        <History size={13} aria-hidden="true" />
        <span className="hidden sm:inline">Changelog</span>
        <span
          className="font-mono text-[0.65rem] px-1.5 py-0.5 rounded"
          style={{ background: "var(--surface-2)", color: "var(--text-dim)" }}
        >
          {version}
        </span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Riwayat perubahan"
          aria-modal="false"
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl border shadow-2xl overflow-hidden z-50"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border-color)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: "var(--border-subtle)", background: "var(--surface-2)" }}
          >
            <div className="flex items-center gap-2">
              <GitCommit size={14} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
              <span className="text-[0.8rem] font-bold" style={{ color: "var(--text-primary)" }}>
                Riwayat Perubahan
              </span>
              {!isEmpty && (
                <span
                  className="text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-md"
                  style={{ background: "var(--tag-bg)", color: "var(--text-dim)", border: "1px solid var(--tag-border)" }}
                >
                  {commits.length} commit
                </span>
              )}
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup changelog"
              className="p-1 rounded-lg transition-colors"
              style={{ color: "var(--text-dim)" }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Commit list */}
          <ul
            className="overflow-y-auto divide-y list-none p-0 m-0"
            style={{ maxHeight: "420px", borderColor: "var(--border-subtle)" }}
            aria-label="Daftar commit"
          >
            {isEmpty ? (
              <li className="px-4 py-8 text-center">
                <p className="text-sm" style={{ color: "var(--text-dim)" }}>
                  Tidak dapat memuat riwayat perubahan.
                </p>
              </li>
            ) : (
              commits.map((c, i) => {
                const type = getCommitType(c.title);
                const isLatest = i === 0;
                return (
                  <li key={c.sha} className="px-4 py-3.5" style={{ borderColor: "var(--border-subtle)" }}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        {/* Badge row */}
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          {isLatest && (
                            <span
                              className="text-[0.6rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                              style={{ background: "#22c55e18", color: "#22c55e", border: "1px solid #22c55e33" }}
                            >
                              Terbaru
                            </span>
                          )}
                          {type && (
                            <span
                              className="text-[0.6rem] font-semibold px-1.5 py-0.5 rounded"
                              style={{ background: type.color + "18", color: type.color, border: `1px solid ${type.color}33` }}
                            >
                              {type.label}
                            </span>
                          )}
                        </div>

                        {/* Commit title */}
                        <p
                          className="text-[0.82rem] font-medium leading-snug mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {cleanTitle(c.title)}
                        </p>

                        {/* Meta: date + SHA */}
                        <div className="flex items-center gap-2">
                          <span className="text-[0.7rem]" style={{ color: "var(--text-dim)" }}>
                            {c.date}
                          </span>
                          <span style={{ color: "var(--border-color)" }}>·</span>
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[0.7rem] font-mono transition-colors hover:underline"
                            style={{ color: "var(--text-dim)" }}
                            aria-label={`Lihat commit ${c.shortSha} di GitHub`}
                          >
                            {c.shortSha}
                            <ExternalLink size={10} aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>

          {/* Footer */}
          {!isEmpty && (
            <div
              className="px-4 py-2.5 border-t"
              style={{ borderColor: "var(--border-subtle)", background: "var(--surface-2)" }}
            >
              <a
                href={`https://github.com/${`mhanafi09051998/superpromptdeveloper`}/commits/main`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-[0.75rem] font-medium transition-colors hover:underline"
                style={{ color: "var(--text-dim)" }}
              >
                Lihat semua commit di GitHub
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

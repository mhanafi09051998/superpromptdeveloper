"use client";

import { useState, useMemo, useRef } from "react";
import { Search, X } from "lucide-react";
import { PROMPTS, FILTERS, type FilterKey } from "@/lib/prompts";
import PromptCard from "./PromptCard";
import Toast from "./Toast";

export default function PromptGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("semua");
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PROMPTS.filter((p) => {
      const matchFilter = activeFilter === "semua" || p.filters.includes(activeFilter);
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.desc.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  function showToast() {
    setToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 2200);
  }

  const hasActiveFilters = search !== "" || activeFilter !== "semua";

  function resetFilters() {
    setSearch("");
    setActiveFilter("semua");
  }

  return (
    <>
      {/* Sticky search + filter bar */}
      <div
        className="sticky top-14 z-40 border-b"
        style={{ background: "var(--bg-nav)", backdropFilter: "blur(20px)", borderColor: "var(--border-color)" }}
      >
        {/* Search */}
        <div className="max-w-6xl mx-auto px-5 pt-3 pb-2">
          <div className="relative max-w-md">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "var(--text-dim)" }}
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari berdasarkan peran, kata kunci..."
              aria-label="Cari prompt"
              className="w-full rounded-xl py-2.5 pl-10 pr-9 text-sm outline-none border"
              style={{
                background: "var(--input-bg)",
                borderColor: search ? "var(--text-dim)" : "var(--border-color)",
                color: "var(--text-primary)",
                transition: "border-color 0.2s",
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Hapus pencarian"
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                style={{ color: "var(--text-dim)" }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filter pills — keyboard-scrollable via tabindex */}
        <div
          className="filter-scroll max-w-6xl mx-auto px-5 pb-3"
          role="group"
          aria-label="Filter berdasarkan kategori"
        >
          <div className="flex gap-2 w-max">
            {FILTERS.map((f) => {
              const active = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  aria-pressed={active}
                  className="px-4 py-1.5 rounded-lg text-[0.78rem] font-medium transition-all duration-200 whitespace-nowrap border"
                  style={{
                    background: active ? "var(--filter-active-bg)" : "transparent",
                    borderColor: active ? "var(--filter-active-bg)" : "var(--border-color)",
                    color: active ? "var(--filter-active-color)" : "var(--text-muted)",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-5 py-10" id="main-content">
        {/* Result count + reset */}
        <div className="flex items-center justify-between mb-6">
          <p
            className="text-[0.72rem] font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-dim)" }}
            aria-live="polite"
            aria-atomic="true"
          >
            {filtered.length === PROMPTS.length
              ? `${PROMPTS.length} superprompt tersedia`
              : `${filtered.length} dari ${PROMPTS.length} superprompt`}
          </p>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[0.72rem] underline underline-offset-2 transition-colors"
              style={{ color: "var(--text-dim)" }}
              aria-label="Reset semua filter dan pencarian"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
            role="list"
            aria-label="Daftar superprompt"
          >
            {filtered.map((p) => (
              <div key={p.id} role="listitem">
                <PromptCard prompt={p} onCopied={showToast} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div
            className="flex flex-col items-center py-24 text-center"
            role="status"
            aria-live="polite"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border"
              style={{ background: "var(--surface-2)", borderColor: "var(--border-color)" }}
              aria-hidden="true"
            >
              <Search size={22} style={{ color: "var(--text-dim)" }} />
            </div>
            <p className="font-semibold mb-1" style={{ color: "var(--text-muted)" }}>
              Tidak ada hasil
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>
              Tidak ada prompt yang cocok dengan pencarian atau filter ini.
            </p>
            <button
              onClick={resetFilters}
              className="text-sm font-medium px-4 py-2 rounded-lg border transition-colors"
              style={{
                background: "var(--btn-secondary)",
                borderColor: "var(--btn-secondary-border)",
                color: "var(--text-secondary)",
              }}
            >
              Lihat semua prompt
            </button>
          </div>
        )}
      </main>

      <Toast visible={toast} />
    </>
  );
}

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
      const matchFilter =
        activeFilter === "semua" || p.filters.includes(activeFilter);
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

  return (
    <>
      {/* Sticky header: search + filter */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{
          background: "rgba(9,9,11,0.92)",
          backdropFilter: "blur(20px)",
          borderColor: "#18181b",
        }}
      >
        {/* Search */}
        <div className="max-w-6xl mx-auto px-5 pt-4 pb-3">
          <div className="relative max-w-md">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari berdasarkan peran, kata kunci..."
              aria-label="Cari prompt"
              className="w-full rounded-xl py-2.5 pl-10 pr-10 text-sm outline-none transition-colors duration-200 border"
              style={{
                background: "#111113",
                borderColor: search ? "#3f3f46" : "#27272a",
                color: "#d4d4d8",
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                aria-label="Hapus pencarian"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="filter-scroll max-w-6xl mx-auto px-5 pb-3">
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
                    background: active ? "#fafafa" : "transparent",
                    borderColor: active ? "#fafafa" : "#27272a",
                    color: active ? "#09090b" : "#71717a",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-5 py-10" id="main-content">
        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-zinc-600" aria-live="polite">
            {filtered.length === PROMPTS.length
              ? `${PROMPTS.length} superprompt tersedia`
              : `${filtered.length} dari ${PROMPTS.length} superprompt`}
          </p>
          {(search || activeFilter !== "semua") && (
            <button
              onClick={() => { setSearch(""); setActiveFilter("semua"); }}
              className="text-[0.72rem] text-zinc-600 hover:text-zinc-400 transition-colors underline underline-offset-2"
            >
              Reset filter
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <PromptCard key={p.id} prompt={p} onCopied={showToast} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-24 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "#111113", border: "1px solid #27272a" }}
            >
              <Search size={22} className="text-zinc-600" />
            </div>
            <p className="font-semibold text-zinc-400 mb-1">Tidak ada hasil</p>
            <p className="text-sm text-zinc-600">Coba kata kunci atau filter lain</p>
          </div>
        )}
      </main>

      <Toast visible={toast} />
    </>
  );
}

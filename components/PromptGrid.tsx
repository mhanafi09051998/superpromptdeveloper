"use client";

import { useState, useMemo, useCallback } from "react";
import { Search, Sparkles } from "lucide-react";
import { PROMPTS, FILTERS, type FilterKey } from "@/lib/prompts";
import PromptCard from "./PromptCard";

export default function PromptGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useState<ReturnType<typeof setTimeout> | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return PROMPTS.filter((p) => {
      const matchFilter =
        activeFilter === "all" || p.filters.includes(activeFilter);
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)) ||
        p.desc.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  const showToast = useCallback(() => {
    setToastVisible(true);
    if (toastTimer[0]) clearTimeout(toastTimer[0]);
    toastTimer[0] = setTimeout(() => setToastVisible(false), 2000);
  }, [toastTimer]);

  return (
    <>
      {/* Search */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search prompts by role, keyword, or use case..."
            aria-label="Search prompts"
            className="w-full rounded-xl py-3 pl-11 pr-4 text-[0.95rem] outline-none transition-colors duration-200 border"
            style={{
              background: "#1a1d27",
              borderColor: "#2a2d3e",
              color: "#e2e8f0",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "#6c63ff")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "#2a2d3e")
            }
          />
        </div>
      </div>

      {/* Filter bar */}
      <div
        className="sticky top-0 z-40 border-b"
        style={{
          background: "rgba(15,17,23,0.85)",
          backdropFilter: "blur(16px)",
          borderColor: "#2a2d3e",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex gap-2 flex-wrap items-center">
          <span className="text-[0.7rem] font-bold uppercase tracking-widest text-slate-600 mr-1">
            Filter:
          </span>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              aria-pressed={activeFilter === f.key}
              className="px-3.5 py-1.5 rounded-full text-[0.8rem] font-medium transition-all duration-200 border whitespace-nowrap"
              style={{
                background:
                  activeFilter === f.key ? "#6c63ff" : "#1a1d27",
                borderColor:
                  activeFilter === f.key ? "#6c63ff" : "#2a2d3e",
                color:
                  activeFilter === f.key ? "#fff" : "#8892a4",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <main className="max-w-5xl mx-auto px-6 py-12" id="main-content">
        <p
          className="text-[0.7rem] font-bold uppercase tracking-widest mb-6"
          style={{ color: "#555e72" }}
          aria-live="polite"
        >
          Showing {filtered.length} of {PROMPTS.length} prompts
        </p>

        {filtered.length > 0 ? (
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns:
                "repeat(auto-fill, minmax(320px, 1fr))",
            }}
            role="list"
          >
            {filtered.map((p) => (
              <div key={p.id} role="listitem">
                <PromptCard prompt={p} onCopied={showToast} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20"
            role="status"
            aria-live="polite"
          >
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-slate-400 font-semibold">No prompts found</p>
            <p className="text-slate-600 text-sm mt-2">
              Try a different keyword or clear the filter
            </p>
          </div>
        )}
      </main>

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300"
        style={{
          transform: `translateX(-50%) translateY(${toastVisible ? "0" : "80px"})`,
          opacity: toastVisible ? 1 : 0,
        }}
      >
        <div
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap"
          style={{
            background: "#43d98f",
            color: "#0a2a1a",
            boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
          }}
        >
          <Sparkles size={14} />
          Copied to clipboard!
        </div>
      </div>
    </>
  );
}

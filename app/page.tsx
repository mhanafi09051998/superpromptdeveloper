import { Zap } from "lucide-react";
import PromptGrid from "@/components/PromptGrid";
import { PROMPTS } from "@/lib/prompts";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0f1117" }}>
      {/* Hero */}
      <header
        className="relative overflow-hidden px-6 pt-20 pb-16 text-center border-b"
        style={{
          background:
            "linear-gradient(135deg, #0f1117 0%, #1a1533 50%, #0f1117 100%)",
          borderColor: "#2a2d3e",
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(108,99,255,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest"
          style={{
            background: "rgba(108,99,255,0.12)",
            borderColor: "rgba(108,99,255,0.3)",
            color: "#a09aff",
          }}
        >
          <Zap size={12} aria-hidden="true" />
          Claude AI Superprompts
        </div>

        {/* Title */}
        <h1
          className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          style={{
            background: "linear-gradient(135deg, #fff 30%, #a09aff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Unlock Claude&apos;s Full
          <br />
          Engineering Power
        </h1>

        {/* Subtitle */}
        <p className="relative max-w-lg mx-auto text-base sm:text-lg mb-10"
          style={{ color: "#8892a4" }}
        >
          {PROMPTS.length} battle-tested superprompts that transform Claude into a senior
          engineer for any role. Copy, paste, and ship faster.
        </p>

        {/* Stats */}
        <div className="relative flex justify-center gap-10 flex-wrap">
          {[
            { num: `${PROMPTS.length}`, label: "Superprompts" },
            { num: "∞", label: "Use Cases" },
            { num: "0", label: "Sign-up Required" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold" style={{ color: "#6c63ff" }}>
                {s.num}
              </div>
              <div className="text-[0.75rem] uppercase tracking-widest mt-0.5"
                style={{ color: "#555e72" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Grid + filters (client component) */}
      <PromptGrid />

      {/* Footer */}
      <footer
        className="text-center py-8 px-6 text-sm border-t"
        style={{ borderColor: "#2a2d3e", color: "#555e72" }}
      >
        <p>
          Prompts curated from{" "}
          <strong className="text-slate-500">@itsaiguide</strong> — Free to
          use, share, and build with.
        </p>
        <p className="mt-1.5">
          Made with Claude{" "}
          <span aria-hidden="true">♥</span>
        </p>
      </footer>
    </div>
  );
}

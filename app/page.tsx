import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import PromptGrid from "@/components/PromptGrid";
import ThemeToggle from "@/components/ThemeToggle";
import ChangelogDropdown from "@/components/ChangelogDropdown";
import { PROMPTS } from "@/lib/prompts";
import { fetchCommits } from "@/lib/github";

// Server Component — fetch runs at build time, not on every request
export default async function Home() {
  const commits = await fetchCommits();

  // Version = short SHA of latest commit, or "dev" fallback
  const version = commits[0]?.shortSha ?? "dev";

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "var(--bg-nav)",
          backdropFilter: "blur(20px)",
          borderColor: "var(--border-color)",
        }}
        aria-label="Navigasi utama"
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal size={16} style={{ color: "var(--text-muted)" }} aria-hidden="true" />
            <span className="text-sm font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Claude Superprompts
            </span>
          </div>

          {/* Nav right — changelog + theme toggle */}
          <div className="flex items-center gap-2">
            <span
              className="text-[0.7rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md hidden sm:block"
              style={{
                background: "var(--surface-2)",
                color: "var(--text-dim)",
                border: "1px solid var(--border-color)",
              }}
            >
              untuk developer
            </span>
            <ChangelogDropdown commits={commits} version={version} />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="max-w-6xl mx-auto px-5 pt-32 pb-20">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-1.5 h-6 rounded-full" style={{ background: "#f97316" }} aria-hidden="true" />
            <span
              className="text-[0.72rem] font-bold uppercase tracking-[0.15em]"
              style={{ color: "var(--text-muted)" }}
            >
              {PROMPTS.length} Superprompt · Gratis · Tanpa Login
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Ubah Claude jadi
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #f97316, #fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              engineer handal
            </span>
            <br />
            untuk proyekmu.
          </h1>

          {/* Subtitle */}
          <p
            className="text-[1rem] sm:text-[1.05rem] leading-relaxed mb-10"
            style={{ color: "var(--text-muted)", maxWidth: "480px" }}
          >
            Kumpulan prompt khusus yang membuat Claude berpikir dan bekerja
            seperti senior engineer — bukan sekadar menjawab pertanyaan.
            Salin, tempel, dan langsung gunakan.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { val: `${PROMPTS.length}`, label: "Superprompt" },
              { val: "10+", label: "Peran engineering" },
              { val: "0", label: "Biaya" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                {i > 0 && (
                  <div className="w-px h-8 hidden sm:block" style={{ background: "var(--border-color)" }} aria-hidden="true" />
                )}
                <div>
                  <div className="text-xl font-extrabold" style={{ color: "var(--text-primary)" }}>{s.val}</div>
                  <div className="text-[0.68rem] uppercase tracking-wide font-medium" style={{ color: "var(--text-dim)" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works strip */}
        <div
          className="mt-14 rounded-2xl border overflow-hidden"
          style={{ background: "var(--strip-bg)", borderColor: "var(--strip-border)" }}
        >
          <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: "var(--strip-border)" }}>
            <Sparkles size={13} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              Cara pakai
            </span>
          </div>
          <ol
            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x list-none p-0 m-0"
            style={{ borderColor: "var(--strip-border)" }}
          >
            {[
              { step: "01", title: "Pilih peran", desc: "Temukan prompt sesuai kebutuhan — debugging, arsitektur, frontend, keamanan, dsb." },
              { step: "02", title: "Salin prompt", desc: "Klik tombol salin. Satu klik langsung tersalin ke clipboard." },
              { step: "03", title: "Tempel ke Claude", desc: "Buka Claude, tempel prompt-nya, lalu sertakan kode atau konteks proyekmu." },
            ].map((s) => (
              <li key={s.step} className="px-5 py-4">
                <div className="text-[0.68rem] font-black tracking-widest mb-2" style={{ color: "var(--border-color)" }}>
                  {s.step}
                </div>
                <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-secondary)" }}>{s.title}</div>
                <div className="text-[0.78rem] leading-relaxed" style={{ color: "var(--text-dim)" }}>{s.desc}</div>
              </li>
            ))}
          </ol>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-8" style={{ color: "var(--text-dim)" }} aria-hidden="true">
          <ArrowDown size={14} />
          <span className="text-[0.72rem] font-medium uppercase tracking-widest">
            Gulir untuk lihat semua prompt
          </span>
        </div>
      </header>

      {/* ── Prompt grid ── */}
      <PromptGrid />

      {/* ── Footer ── */}
      <footer className="border-t px-5 py-8 mt-4" style={{ borderColor: "var(--border-color)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal size={14} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
            <span className="text-[0.78rem]" style={{ color: "var(--text-dim)" }}>
              Claude Superprompts · Gratis selamanya
            </span>
          </div>
          <p className="text-[0.75rem]" style={{ color: "var(--text-dim)" }}>
            Dikurasi dari{" "}
            <strong style={{ color: "var(--text-muted)" }}>@itsaiguide</strong>
            {" "}· Bebas digunakan dan dibagikan
          </p>
        </div>
      </footer>
    </div>
  );
}

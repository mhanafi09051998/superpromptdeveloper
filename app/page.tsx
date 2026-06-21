import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import PromptGrid from "@/components/PromptGrid";
import { PROMPTS } from "@/lib/prompts";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#09090b" }}>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "rgba(9,9,11,0.8)",
          backdropFilter: "blur(20px)",
          borderColor: "#18181b",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal size={16} className="text-zinc-400" aria-hidden="true" />
            <span className="text-sm font-bold text-zinc-200 tracking-tight">
              Claude Superprompts
            </span>
          </div>
          <span
            className="text-[0.7rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
            style={{ background: "#18181b", color: "#52525b", border: "1px solid #27272a" }}
          >
            untuk developer
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="max-w-6xl mx-auto px-5 pt-32 pb-20">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <div
              className="w-1.5 h-6 rounded-full"
              style={{ background: "#f97316" }}
              aria-hidden="true"
            />
            <span
              className="text-[0.72rem] font-bold uppercase tracking-[0.15em]"
              style={{ color: "#71717a" }}
            >
              {PROMPTS.length} Superprompt · Gratis · Tanpa Login
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-zinc-100 mb-6">
            Ubah Claude jadi
            <br />
            <span
              className="relative inline-block"
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

          {/* Sub */}
          <p className="text-[1rem] sm:text-[1.05rem] leading-relaxed mb-10"
            style={{ color: "#71717a", maxWidth: "480px" }}
          >
            Kumpulan prompt khusus yang membuat Claude berpikir dan bekerja
            seperti senior engineer — bukan sekadar menjawab pertanyaan.
            Salin, tempel, dan langsung gunakan.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { val: `${PROMPTS.length}`, label: "Superprompt" },
              { val: "10+", label: "Peran engineering" },
              { val: "0", label: "Biaya" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                {i > 0 && (
                  <div
                    className="w-px h-8 hidden sm:block"
                    style={{ background: "#27272a" }}
                    aria-hidden="true"
                  />
                )}
                <div>
                  <div className="text-xl font-extrabold text-zinc-100">{s.val}</div>
                  <div className="text-[0.68rem] text-zinc-600 uppercase tracking-wide font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works strip */}
        <div
          className="mt-14 rounded-2xl border overflow-hidden"
          style={{ background: "#111113", borderColor: "#1f1f22" }}
        >
          <div
            className="px-5 py-3 border-b flex items-center gap-2"
            style={{ borderColor: "#1f1f22" }}
          >
            <Sparkles size={13} className="text-zinc-600" aria-hidden="true" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-zinc-600">
              Cara pakai
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x"
            style={{ borderColor: "#1f1f22" }}
          >
            {[
              { step: "01", title: "Pilih peran", desc: "Temukan prompt sesuai kebutuhan — debugging, arsitektur, frontend, keamanan, dsb." },
              { step: "02", title: "Salin prompt", desc: "Klik tombol salin. Satu klik langsung tersalin ke clipboard." },
              { step: "03", title: "Tempel ke Claude", desc: "Buka Claude, tempel prompt-nya, lalu sertakan kode atau konteks proyekmu." },
            ].map((s) => (
              <div key={s.step} className="px-5 py-4">
                <div
                  className="text-[0.68rem] font-black tracking-widest mb-2"
                  style={{ color: "#3f3f46" }}
                >
                  {s.step}
                </div>
                <div className="text-sm font-semibold text-zinc-300 mb-1">{s.title}</div>
                <div className="text-[0.78rem] leading-relaxed text-zinc-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-2 mt-8 text-zinc-700">
          <ArrowDown size={14} aria-hidden="true" />
          <span className="text-[0.72rem] font-medium uppercase tracking-widest">
            Gulir untuk lihat semua prompt
          </span>
        </div>
      </header>

      {/* ── Cards ── */}
      <PromptGrid />

      {/* ── Footer ── */}
      <footer
        className="border-t px-5 py-8 mt-4"
        style={{ borderColor: "#18181b" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-zinc-700" aria-hidden="true" />
            <span className="text-[0.78rem] text-zinc-700">
              Claude Superprompts · Gratis selamanya
            </span>
          </div>
          <p className="text-[0.75rem] text-zinc-700">
            Prompt dikurasi dari{" "}
            <strong className="text-zinc-600">@itsaiguide</strong>
            {" "}· Bebas digunakan dan dibagikan
          </p>
        </div>
      </footer>
    </div>
  );
}

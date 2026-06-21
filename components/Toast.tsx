"use client";

import { CheckCircle } from "lucide-react";

export default function Toast({ visible }: { visible: boolean }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-50 pointer-events-none transition-all duration-300 ease-out"
      style={{
        transform: `translateX(-50%) translateY(${visible ? "0" : "20px"})`,
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-[0.83rem] font-semibold whitespace-nowrap"
        style={{
          background: "#fafafa",
          color: "#09090b",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <CheckCircle size={15} style={{ color: "#16a34a" }} />
        Prompt berhasil disalin!
      </div>
    </div>
  );
}

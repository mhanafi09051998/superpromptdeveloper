"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  const options = [
    { key: "light", icon: Sun, label: "Terang" },
    { key: "system", icon: Monitor, label: "Sistem" },
    { key: "dark", icon: Moon, label: "Gelap" },
  ] as const;

  return (
    <div
      className="flex items-center gap-0.5 rounded-lg p-0.5 border"
      style={{ background: "var(--toggle-bg)", borderColor: "var(--border-color)" }}
      role="group"
      aria-label="Pilih tema"
    >
      {options.map(({ key, icon: Icon, label }) => {
        const active = theme === key;
        return (
          <button
            key={key}
            onClick={() => setTheme(key)}
            aria-pressed={active}
            aria-label={label}
            title={label}
            className="w-7 h-7 flex items-center justify-center rounded-md transition-all duration-200"
            style={{
              background: active ? "var(--toggle-active-bg)" : "transparent",
              color: active ? "var(--toggle-active-color)" : "var(--text-muted)",
              boxShadow: active ? "0 1px 3px rgba(0,0,0,0.2)" : "none",
            }}
          >
            <Icon size={13} />
          </button>
        );
      })}
    </div>
  );
}

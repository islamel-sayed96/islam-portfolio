"use client";

import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

export default function Brands() {
  const { lang } = useLanguage();
  const t = content[lang];
  const names = t.projects.filter((p) => p.key !== "darbna").map((p) => p.title);
  const track = [...names, ...names];

  return (
    <section className="overflow-hidden border-y border-ink-100 bg-ink-50/60 py-8 dark:border-ink-800 dark:bg-ink-900/40">
      <div className="mx-auto mb-5 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-500">
          {t.brandsSection.label}
        </p>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-xl font-bold tracking-tight text-ink-300 transition hover:text-gold-500 dark:text-ink-700 dark:hover:text-gold-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

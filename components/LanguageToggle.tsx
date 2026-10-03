"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

export default function LanguageToggle({ className = "" }) {
  const { lang, toggle } = useLanguage();
  const t = content[lang];

  return (
    <button
      onClick={toggle}
      className={`flex h-9 items-center gap-1.5 rounded-full border border-ink-200 px-3 text-sm font-medium text-ink-600 transition hover:border-gold-400 hover:text-gold-600 dark:border-ink-700 dark:text-ink-300 dark:hover:border-gold-400 dark:hover:text-gold-300 ${className}`}
    >
      <Languages size={15} />
      {t.langToggle}
    </button>
  );
}

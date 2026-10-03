"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

const sectionIds = ["hero", "skills", "experience", "projects", "courses", "contact"];

export default function Nav() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = sectionIds.map((id) => ({
    id,
    label: t.nav[id === "hero" ? "home" : id],
  }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink-200/70 bg-white/85 backdrop-blur-md dark:border-ink-800/70 dark:bg-ink-950/85"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="text-base font-semibold tracking-tight text-ink-900 dark:text-white">
            {t.profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-ink-600 transition hover:text-gold-600 dark:text-ink-300 dark:hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-ink-700 dark:text-ink-200"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950 md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-ink-900"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t border-ink-100 pt-3 dark:border-ink-800">
              <LanguageToggle className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="border-t border-ink-100 bg-ink-50 py-10 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="/#hero">
            <Logo />
          </a>

          <p className="text-sm text-ink-500 dark:text-ink-400">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>

          <a
            href="#courses"
            className="text-sm font-medium text-ink-600 hover:text-gold-600 dark:text-ink-300 dark:hover:text-gold-300"
          >
            {t.nav.courses}
          </a>
        </div>

        <div className="flex gap-5 border-t border-ink-100 pt-4 dark:border-ink-800">
          <Link
            href="/terms"
            className="text-xs font-medium text-ink-400 hover:text-gold-600 dark:text-ink-500 dark:hover:text-gold-300"
          >
            {t.footer.terms}
          </Link>
          <Link
            href="/privacy"
            className="text-xs font-medium text-ink-400 hover:text-gold-600 dark:text-ink-500 dark:hover:text-gold-300"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}

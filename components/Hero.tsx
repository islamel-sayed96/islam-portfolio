"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";
import { useTypewriter } from "@/lib/hooks";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];
  const roleText = useTypewriter(t.profile.roles);
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-16 dark:bg-ink-950"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -start-24 top-16 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl dark:bg-gold-900/20" />
        <div className="absolute -end-20 top-1/3 h-96 w-96 rounded-full bg-ink-200/50 blur-3xl dark:bg-ink-800/40" />
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-300/60 bg-gold-50 px-4 py-1.5 text-sm font-medium text-gold-800 dark:border-gold-800/60 dark:bg-gold-950/40 dark:text-gold-300">
            {t.profile.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl dark:text-white">
            {t.profile.name}
          </h1>

          <p className="mt-4 h-10 text-2xl font-semibold text-gold-600 sm:text-3xl dark:text-gold-300">
            {roleText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {t.profile.bio}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-ink-950/20 transition hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-gold-400 dark:text-ink-950 dark:shadow-gold-900/30 dark:hover:bg-gold-300"
            >
              <Mail size={18} />
              {t.profile.cta.contact}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-7 py-3.5 text-base font-semibold text-ink-800 transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-700 dark:border-ink-700 dark:text-ink-100 dark:hover:border-gold-400 dark:hover:text-gold-300"
            >
              {t.profile.cta.work}
              <Arrow size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-gold-300/60 dark:border-gold-800/60" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-900/20">
            <Image
              src="/images/islam.jpg"
              alt={t.profile.name}
              fill
              sizes="(max-width: 1024px) 60vw, 400px"
              className="object-cover grayscale-[15%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          </div>

          <motion.div
            className="absolute -bottom-6 start-1/2 w-max -translate-x-1/2 rounded-2xl border border-ink-100 bg-white px-5 py-3 shadow-xl dark:border-ink-800 dark:bg-ink-900"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="whitespace-nowrap text-sm font-semibold text-ink-800 dark:text-ink-100">
              UI/UX · SEO · E-commerce
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        className="absolute bottom-8 start-1/2 -translate-x-1/2 text-ink-400 dark:text-ink-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ArrowDown size={26} />
      </motion.a>
    </section>
  );
}

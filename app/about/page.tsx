"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];
  const a = t.aboutPage;

  return (
    <div className="bg-white dark:bg-ink-950">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            {a.kicker}
          </h1>
          <p className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl dark:text-white">
            {a.title}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-ink-900/20"
          >
            <Image
              src="/images/islam.jpg"
              alt={t.profile.name}
              fill
              sizes="(max-width: 1024px) 70vw, 420px"
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-5">
            {a.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="leading-relaxed text-ink-600 dark:text-ink-300"
              >
                {p}
              </motion.p>
            ))}

            <a
              href="/#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-ink-950/20 transition hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-gold-400 dark:text-ink-950 dark:hover:bg-gold-300"
            >
              {a.cta}
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {a.skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm dark:border-ink-800 dark:bg-ink-900"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700 dark:bg-ink-800 dark:text-ink-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

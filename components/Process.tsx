"use client";

import { motion } from "framer-motion";
import SectionKicker from "./SectionKicker";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

export default function Process() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="bg-white py-24 dark:bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionKicker n="03" kicker={t.processSection.kicker} title={t.processSection.title} />

        <div className="relative mt-16">
          <div className="absolute top-6 start-0 end-0 hidden h-px bg-ink-200 dark:bg-ink-800 lg:block" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {t.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-400 bg-white font-mono text-sm font-bold text-gold-600 dark:border-gold-500 dark:bg-ink-950 dark:text-gold-400">
                  0{i + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

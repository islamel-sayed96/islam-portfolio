"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

export default function Experience() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="experience" className="bg-ink-50 py-24 dark:bg-ink-900/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            {t.experienceSection.kicker}
          </h2>
          <p className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl dark:text-white">
            {t.experienceSection.title}
          </p>
        </motion.div>

        <div className="relative mt-16 ps-10">
          <div className="absolute top-2 bottom-2 start-[7px] w-px bg-ink-200 dark:bg-ink-700" />

          <div className="space-y-8">
            {t.experience.map((item, i) => (
              <motion.div
                key={item.company + item.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="relative"
              >
                <span className="absolute top-2 -start-[34px] h-3.5 w-3.5 rounded-full border-2 border-white bg-gold-500 ring-2 ring-gold-200 dark:border-ink-900 dark:ring-gold-900" />

                <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm dark:border-ink-800 dark:bg-ink-900">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink-500 dark:text-ink-400">
                    <span className="inline-flex items-center gap-1 rounded-full bg-ink-100 px-2.5 py-1 dark:bg-ink-800">
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 px-2.5 py-1 text-gold-700 dark:bg-gold-900/40 dark:text-gold-300">
                        {lang === "ar" ? "لسه شغال" : "Current"}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-ink-950 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-gold-600 dark:text-gold-400">
                    <Briefcase size={14} />
                    {item.company}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-400">
                    <MapPin size={13} />
                    {item.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

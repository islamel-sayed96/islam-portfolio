"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutTemplate,
  PenTool,
  Server,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

const icons = { Code2, Server, PenTool, TrendingUp, LayoutTemplate, ShoppingCart };

export default function Skills() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="skills" className="bg-white py-24 dark:bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            {t.skillsSection.kicker}
          </h2>
          <p className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl dark:text-white">
            {t.skillsSection.title}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.map((skill, i) => {
            const Icon = icons[skill.icon];
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl dark:border-ink-800 dark:bg-ink-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-50 text-ink-700 transition-colors group-hover:bg-ink-950 group-hover:text-gold-300 dark:bg-ink-800 dark:text-ink-200 dark:group-hover:bg-gold-400 dark:group-hover:text-ink-950">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-950 dark:text-white">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

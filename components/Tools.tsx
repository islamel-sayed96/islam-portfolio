"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";
import { devTools, marketingTools } from "@/lib/tools";

function ToolGrid({ items }: { items: typeof devTools }) {
  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-5">
      {items.map(({ name, Icon, color }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (i % 10) * 0.04 }}
          whileHover={{ y: -4 }}
          className="flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-ink-800 dark:bg-ink-900"
        >
          <Icon size={32} color={color} />
          <span className="text-center text-xs font-semibold text-ink-700 dark:text-ink-200">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Tools() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="bg-ink-50/60 py-24 dark:bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            {t.toolsSection.kicker}
          </h2>
          <p className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl dark:text-white">
            {t.toolsSection.title}
          </p>
        </motion.div>

        <div className="mt-14">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400">
            {t.toolsSection.devLabel}
          </h3>
          <ToolGrid items={devTools} />
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-ink-500 dark:text-ink-400">
            {t.toolsSection.marketingLabel}
          </h3>
          <ToolGrid items={marketingTools} />
        </div>
      </div>
    </section>
  );
}

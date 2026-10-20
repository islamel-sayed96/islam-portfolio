"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionKicker({
  n,
  kicker,
  title,
  desc,
  onDark = false,
}: {
  n: string;
  kicker: string;
  title: ReactNode;
  desc?: string;
  onDark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-2xl text-center"
    >
      <div
        className={`inline-flex items-center gap-2.5 text-sm font-semibold uppercase tracking-widest ${
          onDark ? "text-gold-400" : "text-gold-600 dark:text-gold-400"
        }`}
      >
        <span
          className={`font-mono text-xs ${onDark ? "text-ink-500" : "text-ink-400 dark:text-ink-500"}`}
        >
          {n}
        </span>
        <span className="h-px w-5 bg-gold-400/60" />
        <span>{kicker}</span>
      </div>
      <p
        className={`mt-3 text-3xl font-bold sm:text-4xl ${
          onDark ? "text-white" : "text-ink-950 dark:text-white"
        }`}
      >
        {title}
      </p>
      {desc && (
        <p className={`mt-4 ${onDark ? "text-ink-300" : "text-ink-600 dark:text-ink-300"}`}>
          {desc}
        </p>
      )}
    </motion.div>
  );
}

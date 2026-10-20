"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionKicker from "./SectionKicker";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

function useClock(timeZone: string) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

export default function Journey() {
  const { lang } = useLanguage();
  const t = content[lang];
  const time = useClock(t.journey.now.timeZone);

  return (
    <section className="bg-ink-50 py-24 dark:bg-ink-900/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionKicker n="04" kicker={t.journeySection.kicker} title={t.journeySection.title} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 grid grid-cols-1 items-center gap-10 rounded-3xl border border-ink-100 bg-white p-8 shadow-sm sm:grid-cols-[1fr_auto_1fr] sm:p-12 dark:border-ink-800 dark:bg-ink-900"
        >
          <div className="text-center sm:text-start">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-400 dark:text-ink-500">
              {t.journeySection.from}
            </p>
            <p className="mt-2 text-2xl font-bold text-ink-950 dark:text-white">
              {t.journey.from.city}
            </p>
            <p dir="ltr" className="mt-1 font-mono text-xs text-ink-400 dark:text-ink-500">
              {t.journey.from.coords}
            </p>
          </div>

          <div className="relative mx-auto h-16 w-full max-w-[160px] sm:h-24">
            <svg
              viewBox="0 0 160 100"
              className="h-full w-full text-gold-400 dark:text-gold-500"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M8 92 Q 80 -10 152 92"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <circle cx="8" cy="92" r="4" fill="currentColor" />
              <circle cx="152" cy="92" r="4" fill="currentColor" />
            </svg>
          </div>

          <div className="text-center sm:text-end">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-400 dark:text-ink-500">
              {t.journeySection.now}
            </p>
            <p className="mt-2 text-2xl font-bold text-ink-950 dark:text-white">
              {t.journey.now.city}
            </p>
            <p dir="ltr" className="mt-1 font-mono text-xs text-ink-400 dark:text-ink-500">
              {t.journey.now.coords}
              {" · "}
              {t.journeySection.localTime} {time ?? "--:--:--"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

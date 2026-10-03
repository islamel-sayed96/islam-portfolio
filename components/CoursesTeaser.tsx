"use client";

import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, FileText } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

export default function CoursesTeaser() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="courses" className="relative overflow-hidden bg-ink-950 py-24">
      <div className="pointer-events-none absolute -top-20 end-0 h-96 w-96 rounded-full bg-gold-900/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 start-0 h-96 w-96 rounded-full bg-ink-700/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            {t.coursesSection.kicker}
          </h2>
          <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {t.coursesSection.title}
          </p>
          <p className="mt-4 text-ink-300">{t.coursesSection.desc}</p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10"
            >
              <h3 className="text-lg font-bold text-white">{course.title}</h3>

              <div className="mt-5 space-y-3 text-sm text-ink-300">
                <div className="flex items-center gap-2.5">
                  <BookOpen size={17} className="text-gold-400" />
                  {course.lessons} {t.courseFeatures.lessons}
                </div>
                <div className="flex items-center gap-2.5">
                  <ClipboardCheck size={17} className="text-gold-400" />
                  {course.quizzes} {t.courseFeatures.quizzes}
                </div>
                <div className="flex items-center gap-2.5">
                  <FileText size={17} className="text-gold-400" />
                  {t.courseFeatures.material}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-semibold text-ink-950 shadow-lg shadow-gold-900/30 transition hover:-translate-y-0.5 hover:bg-gold-300"
          >
            {t.coursesSection.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

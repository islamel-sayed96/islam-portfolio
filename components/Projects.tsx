"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

const covers = [
  "from-ink-900 to-ink-950",
  "from-gold-600 to-gold-800",
  "from-ink-800 to-ink-950",
  "from-gold-500 to-gold-700",
  "from-ink-700 to-ink-900",
  "from-gold-700 to-gold-900",
  "from-ink-900 via-ink-800 to-gold-900",
];

function monogram(title: string) {
  const words = title.split(" ");
  if (words.length === 1) return title;
  const [first] = words;
  if (first === first.toUpperCase() && first.length <= 4) return first;
  return words.map((w) => w[0]).join("").toUpperCase();
}

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang];
  const Arrow = lang === "ar" ? ArrowUpLeft : ArrowUpRight;
  const [filter, setFilter] = useState<string>("all");

  const categories = Object.keys(t.projectCategories);
  const visibleProjects =
    filter === "all" ? t.projects : t.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-white py-24 dark:bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            {t.projectsSection.kicker}
          </h2>
          <p className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl dark:text-white">
            {t.projectsSection.title}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === "all"
                ? "bg-ink-950 text-white dark:bg-gold-400 dark:text-ink-950"
                : "bg-ink-50 text-ink-600 hover:bg-ink-100 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700"
            }`}
          >
            {t.projectsSection.all}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === cat
                  ? "bg-ink-950 text-white dark:bg-gold-400 dark:text-ink-950"
                  : "bg-ink-50 text-ink-600 hover:bg-ink-100 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700"
              }`}
            >
              {t.projectCategories[cat]}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.key}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-2xl dark:border-ink-800 dark:bg-ink-900"
            >
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${covers[i % covers.length]}`}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, white 0, transparent 35%), radial-gradient(circle at 85% 75%, white 0, transparent 30%)",
                  }}
                />
                <span className="relative text-3xl font-bold tracking-wide text-white/95">
                  {monogram(project.title)}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-ink-950 dark:text-white">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-medium text-gold-600 dark:text-gold-400">
                    {project.subtitle}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-ink-800 dark:text-ink-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition group-hover:gap-2.5 dark:text-gold-400"
                >
                  {project.cta || t.projectsSection.viewSite}
                  <Arrow size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

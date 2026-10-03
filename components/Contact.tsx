"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  BehanceIcon,
} from "./SocialIcons";
import { useLanguage } from "@/lib/LanguageProvider";
import { content } from "@/lib/content";

const socialIcons = [
  { key: "github", Icon: GithubIcon },
  { key: "linkedin", Icon: LinkedinIcon },
  { key: "instagram", Icon: InstagramIcon },
  { key: "facebook", Icon: FacebookIcon },
  { key: "behance", Icon: BehanceIcon },
];

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="contact" className="bg-white py-24 dark:bg-ink-950">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
            {t.contactSection.kicker}
          </h2>
          <p className="mt-3 text-3xl font-bold text-ink-950 sm:text-4xl dark:text-white">
            {t.contactSection.title}
          </p>
          <p className="mt-4 text-ink-600 dark:text-ink-300">{t.contactSection.desc}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${t.profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-ink-950/20 transition hover:-translate-y-0.5 hover:bg-ink-800 dark:bg-gold-400 dark:text-ink-950 dark:hover:bg-gold-300"
            >
              <Mail size={18} />
              {t.profile.email}
            </a>
            <a
              href={t.profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-7 py-3.5 text-base font-semibold text-ink-800 shadow-sm transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-700 dark:border-ink-700 dark:text-ink-100 dark:hover:border-gold-400 dark:hover:text-gold-300"
            >
              <MessageCircle size={18} />
              {t.contactSection.whatsapp}
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-5">
            {socialIcons.map(({ key, Icon }) => (
              <a
                key={key}
                href={t.profile.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition hover:-translate-y-1 hover:bg-ink-950 hover:text-gold-300 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-gold-400 dark:hover:text-ink-950"
                aria-label={key}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

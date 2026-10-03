"use client";

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
  { key: "facebook", Icon: FacebookIcon },
  { key: "instagram", Icon: InstagramIcon },
  { key: "linkedin", Icon: LinkedinIcon },
  { key: "github", Icon: GithubIcon },
  { key: "behance", Icon: BehanceIcon },
];

export default function TopBar() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="fixed inset-x-0 top-0 z-50 hidden h-10 items-center border-b border-gold-900/30 bg-ink-950 px-4 text-xs text-ink-300 sm:flex sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${t.profile.email}`}
            className="flex items-center gap-1.5 transition hover:text-gold-300"
          >
            <Mail size={13} />
            <span>{t.profile.email}</span>
          </a>
          <a
            href={t.profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-gold-300"
          >
            <MessageCircle size={13} />
            <span dir="ltr">{t.profile.phoneDisplay}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {socialIcons.map(({ key, Icon }) => (
            <a
              key={key}
              href={t.profile.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              className="transition hover:text-gold-300"
            >
              <Icon className="h-[13px] w-[13px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Footer as BeamsAccent } from "./Footer";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "rav786sahab@gmail.com",
    href: "mailto:rav786sahab@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manish-yadav-sikar/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Mannu14",
  },
];

export default function MainFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-neutral-950 px-6 py-20 text-neutral-400"
    >
      <BeamsAccent className="pointer-events-none text-neutral-800 opacity-30" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s build something useful.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
          Looking for a backend engineer for your next product, or want to
          talk through an opportunity? I&apos;d like to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }, index) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={
                index === 0
                  ? "inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-0.5 hover:bg-violet-400"
                  : "inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
              }
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Manish Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

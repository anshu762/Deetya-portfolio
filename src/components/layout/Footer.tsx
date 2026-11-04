"use client";

import { FOOTER_CONTENT, SITE_METADATA } from "@/data/content";
import { ArrowUp, Mail, MapPin, GraduationCap } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F5F1E8] dark:bg-[#101014] border-t border-[#E7E2D6] dark:border-[#282832] pt-14 sm:pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 sm:pb-14 border-b border-[#E7E2D6] dark:border-[#282832]">
          {/* Col 1: Bio / Academic profile */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-900 dark:text-white">
              {FOOTER_CONTENT.name}
            </h3>
            <p className="text-sm text-ink-muted dark:text-zinc-300 max-w-sm leading-relaxed">
              Curated portfolio exploring the intersections of neuropsychology, wearable sensory tech,
              neuro-inclusive spatial design, and classical arts.
            </p>

            <div className="pt-2 space-y-2 text-xs text-ink-muted dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent-rose shrink-0" />
                <span>
                  <strong className="text-ink-800 dark:text-zinc-200">{FOOTER_CONTENT.education}</strong> — {FOOTER_CONTENT.curriculum}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-sage shrink-0" />
                <span>{SITE_METADATA.socials.location}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-ink-muted dark:text-zinc-400 mb-4">
              Directory
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {FOOTER_CONTENT.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-ink-700 dark:text-zinc-300 hover:text-accent-rose dark:hover:text-pink-400 transition-colors py-1 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Connect & Top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-ink-muted dark:text-zinc-400 mb-4">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={FOOTER_CONTENT.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-800 dark:text-zinc-100 hover:text-accent-rose dark:hover:text-pink-400 font-medium transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-accent-indigo dark:text-indigo-400 shrink-0" />
                  <span>linkedin.com/in/deetyabehl ↗</span>
                </a>
                <a
                  href={`mailto:${SITE_METADATA.socials.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-800 dark:text-zinc-100 hover:text-accent-rose dark:hover:text-pink-400 font-medium transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-accent-terracotta dark:text-amber-400 shrink-0" />
                  <span className="truncate">{SITE_METADATA.socials.email}</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="mt-8 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DCD6C7] dark:border-[#383844] text-xs font-mono tracking-wider uppercase text-ink-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-[#202028] transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted dark:text-zinc-400">
          <p>© {FOOTER_CONTENT.copyrightYear} Deetya Behl. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wider uppercase">
            A Curated Gallery of a Curious Mind
          </p>
        </div>
      </div>
    </footer>
  );
}

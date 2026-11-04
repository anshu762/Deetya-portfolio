"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Award, MapPin, Sparkles } from "lucide-react";
import { HERO_CONTENT, SITE_METADATA } from "@/data/content";
import { scrollToTarget } from "@/lib/scroll";

export default function Hero() {
  const scrollToWork = () => {
    scrollToTarget("overview", 75);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92dvh] flex flex-col justify-center pt-24 pb-16 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background watercolor wash glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-accent-rose/10 dark:bg-accent-rose/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 rounded-full bg-accent-sage/15 dark:bg-accent-sage/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
        {/* Harvard Crimson Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DA] dark:bg-[#202027] border border-[#DDD3C2] dark:border-[#2D2D36] text-[11px] sm:text-xs font-mono text-ink-800 dark:text-zinc-200 mb-6 sm:mb-8 max-w-full"
        >
          <Award className="w-3.5 h-3.5 text-accent-rose shrink-0" />
          <span className="truncate">{HERO_CONTENT.recognitionBadge}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-accent-rose mb-2">
                Psychology Researcher · Founder · Classical Dancer
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-ink-900 dark:text-white leading-[1.05] break-words">
                {HERO_CONTENT.name}
              </h1>
            </motion.div>

            {/* Subtitle / student identity */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-ink-muted dark:text-zinc-200 leading-relaxed max-w-xl font-normal"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* Central Philosophy Blockquote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-[#F5F0E4]/70 dark:bg-[#1A1A22] border-l-4 border-accent-rose shadow-soft max-w-xl my-4 border border-[#E7E0D2] dark:border-[#2D2D38]"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent-rose shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-base sm:text-lg md:text-xl font-serif italic text-ink-900 dark:text-white font-medium leading-snug">
                    &ldquo;{HERO_CONTENT.centralQuestion}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-ink-muted dark:text-zinc-300 leading-relaxed">
                    {HERO_CONTENT.supportingParagraph}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-ink-900 text-white dark:bg-white dark:text-ink-900 text-xs sm:text-sm font-medium tracking-wide shadow-card hover:opacity-95 transition-all"
              >
                <span>Explore the Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <a
                href={SITE_METADATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border border-[#D5CDBD] dark:border-[#3A3A46] text-xs sm:text-sm font-medium text-ink-800 dark:text-white hover:bg-[#F3EDE0] dark:hover:bg-[#202028] transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: High Definition Editorial Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px]"
            >
              {/* Outer decorative architectural arch backdrop */}
              <div className="absolute inset-0 rounded-t-[200px] rounded-b-3xl bg-gradient-to-b from-[#E7D6CB] via-[#EBD9CE] to-[#DFE5DC] dark:from-[#2D2D38] dark:to-[#181820] transform rotate-1 scale-[1.025] transition-transform duration-500" />

              {/* Main image container */}
              <div className="relative w-full aspect-[4/5] rounded-t-[196px] rounded-b-3xl overflow-hidden shadow-2xl border-[3px] border-white dark:border-[#383844] bg-[#EAE6DE]">
                <Image
                  src={HERO_CONTENT.profileImage}
                  alt="Deetya Behl — Psychology Researcher at Harvard University"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 500px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating location & distinction pill */}
                <div className="absolute top-6 right-6 z-10 px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-sm border border-white/40 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono font-medium text-ink-900 dark:text-white">
                  <MapPin className="w-3 h-3 text-accent-rose" />
                  <span>Harvard University</span>
                </div>

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none flex items-end p-6">
                  <div className="text-white">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
                      Amritsar · Cambridge, MA
                    </p>
                    <p className="text-base font-serif font-medium italic text-white">
                      Harvard Crimson Finalist &bull; Researcher
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

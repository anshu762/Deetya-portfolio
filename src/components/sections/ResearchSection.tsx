"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ChevronRight, Eye, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { RESEARCH_CONTENT } from "@/data/content";

export default function ResearchSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string; title?: string }[]>([]);

  const openLightbox = (slides: { src: string; title?: string }[], index: number = 0) => {
    setCurrentSlides(slides);
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const adhdTriad = RESEARCH_CONTENT.items.find((item) => item.id === "adhd-triad");
  const otherResearch = RESEARCH_CONTENT.items.filter((item) => item.id !== "adhd-triad");

  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="02"
          pill={RESEARCH_CONTENT.sectionLabel}
          title={RESEARCH_CONTENT.sectionTitle}
          subtitle={RESEARCH_CONTENT.intro}
        />

        {/* Highlight Showcase: The ADHD Triad (IRIS Fair 2026) */}
        {adhdTriad && (
          <div className="mb-16 md:mb-20 rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-6 sm:p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Text Information */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-rose/15 dark:bg-accent-rose/25 text-accent-rose dark:text-pink-300 text-xs font-mono font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    Sole Recipient · APA Special Award
                  </span>
                  <span className="text-xs font-mono text-ink-muted dark:text-zinc-400">
                    {adhdTriad.periodOrGrade}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-ink-900 dark:text-white">
                    {adhdTriad.title}
                  </h3>
                  <p className="text-sm font-mono text-accent-terracotta dark:text-amber-400 mt-1">
                    {adhdTriad.role}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-relaxed">
                  {adhdTriad.description}
                </p>

                {/* Key Findings Box */}
                {adhdTriad.findings && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#202028] border border-[#EAE3D4] dark:border-[#2D2D38] space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-zinc-300 flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-accent-rose" />
                      Empirical Findings
                    </p>
                    <p className="text-xs sm:text-sm text-ink-800 dark:text-zinc-100 leading-relaxed italic">
                      &ldquo;{adhdTriad.findings}&rdquo;
                    </p>
                  </div>
                )}

                {/* Statistics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                  {adhdTriad.keyStats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-3.5 sm:p-4 rounded-xl bg-[#F4EFE5] dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#2D2D38]"
                    >
                      <div className="text-[11px] font-mono text-ink-muted dark:text-zinc-400 mb-1">{stat.label}</div>
                      <div className="text-sm sm:text-base md:text-lg font-serif font-semibold text-ink-900 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Judges Citation */}
                {adhdTriad.judgesOrMentors && (
                  <p className="text-xs text-ink-muted dark:text-zinc-300 border-t border-[#EAE3D4] dark:border-[#2A2A33] pt-4 font-mono">
                    <span className="font-semibold text-ink-800 dark:text-white">Judges: </span>
                    {adhdTriad.judgesOrMentors}
                  </p>
                )}
              </div>

              {/* Research Presentation Image Showcase */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono tracking-widest uppercase text-ink-muted dark:text-zinc-400 mb-2 flex items-center justify-between">
                  <span>IRIS National Fair Showcase</span>
                  <span className="text-[11px] text-accent-rose font-semibold">Click to expand</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {adhdTriad.images?.map((img, idx) => (
                    <motion.div
                      key={img}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      onClick={() =>
                        openLightbox(
                          adhdTriad.images?.map((src) => ({
                            src,
                            title: `The ADHD Triad — IRIS Fair Photo ${idx + 1}`,
                          })) || [],
                          idx
                        )
                      }
                      data-cursor="view"
                      className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-soft bg-zinc-100 dark:bg-zinc-800 border border-[#EAE3D4] dark:border-[#2D2D38] ${
                        idx === 0 ? "col-span-2 aspect-[16/10]" : "col-span-1 aspect-[4/5]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`IRIS Fair research display ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 450px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white/90 text-xs font-mono text-ink-900 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" /> Expand
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Research Initiatives Grid */}
        <div className="space-y-6">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink-muted dark:text-zinc-400">
            Additional Studies & Fellowships
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherResearch.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#16161B] border border-[#E7E2D6] dark:border-[#2E2E38] shadow-soft hover:shadow-card transition-all"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F4EFE5] dark:bg-[#22222A] text-ink-700 dark:text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-mono text-accent-rose mb-1">
                      {item.organization || item.periodOrGrade}
                    </p>
                    <h4 className="text-lg sm:text-xl font-serif font-medium text-ink-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-ink-muted dark:text-zinc-400 mt-1">{item.role}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-muted dark:text-zinc-200 leading-relaxed">
                    {item.description}
                  </p>

                  {/* ThinkNeuro Images trigger if present */}
                  {item.images && item.images.length > 0 && (
                    <div className="pt-2">
                      <button
                        onClick={() =>
                          openLightbox(
                            item.images?.map((src) => ({
                              src,
                              title: `${item.title} Presentation`,
                            })) || [],
                            0
                          )
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-terracotta dark:text-amber-400 hover:underline"
                      >
                        <Eye className="w-3.5 h-3.5" /> View Poster / Photos (2)
                      </button>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0EAE0] dark:border-[#282834] space-y-1">
                  {item.keyStats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-ink-muted dark:text-zinc-400">{stat.label}:</span>
                      <span className="font-mono font-medium text-ink-900 dark:text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <LightboxModal
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentSlides}
        index={activeImageIndex}
      />
    </section>
  );
}

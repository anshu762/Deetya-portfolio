"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BadgeCheck, CheckCircle2, ChevronRight, Eye, Sparkles } from "lucide-react";
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
                  <span className="text-xs font-sans text-ink-muted dark:text-zinc-400">
                    {adhdTriad.periodOrGrade}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-ink-900 dark:text-white">
                    {adhdTriad.title}
                  </h3>
                  <p className="text-sm font-sans font-medium text-accent-terracotta dark:text-amber-400 mt-1">
                    {adhdTriad.role}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-[1.75]">
                  {adhdTriad.description}
                </p>

                {/* Key Findings Box */}
                {adhdTriad.findings && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#202028] border border-[#EAE3D4] dark:border-[#2D2D38] space-y-2">
                    <p className="text-xs font-sans uppercase tracking-[0.18em] text-ink-muted dark:text-zinc-300 flex items-center gap-1.5 font-semibold">
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
                      <div className="text-xs font-sans text-ink-muted dark:text-zinc-400 mb-1">{stat.label}</div>
                      <div className="text-sm sm:text-base md:text-lg font-serif font-semibold text-ink-900 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Judges Citation */}
                {adhdTriad.judgesOrMentors && (
                  <p className="text-xs text-ink-muted dark:text-zinc-300 border-t border-[#EAE3D4] dark:border-[#2A2A33] pt-4 font-sans leading-relaxed">
                    <span className="font-semibold text-ink-800 dark:text-white">Judges: </span>
                    {adhdTriad.judgesOrMentors}
                  </p>
                )}
              </div>

              {/* Research Presentation Image Showcase */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-sans tracking-wider uppercase text-ink-muted dark:text-zinc-400 mb-2 flex items-center justify-between font-medium">
                  <span>IRIS National Fair Showcase</span>
                  <span className="text-xs text-accent-rose font-semibold">Click to expand</span>
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
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-ink-muted dark:text-zinc-400 font-semibold">
              Additional Studies &amp; Fellowships
            </h4>
            <span className="text-xs font-sans text-accent-rose font-medium hidden sm:inline-block">
              Cognitive Sciences &middot; Clinical Traineeships &middot; Neuro-law
            </span>
          </div>

          {/* ThinkNeuro Featured Certification Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-br from-[#FAF5EE] via-[#F6EFE3] to-[#EFE7D7] dark:from-[#181820] dark:via-[#1A1A22] dark:to-[#16161D] border border-[#E2DBCB] dark:border-[#333340] p-6 sm:p-8 md:p-10 shadow-card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Certification details */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent-terracotta/15 dark:bg-accent-terracotta/25 text-accent-terracotta dark:text-amber-300 text-xs font-sans font-semibold tracking-wide">
                    <BadgeCheck className="w-4 h-4" /> Certification &mdash; ThinkNeuro SRIP
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#22222C] border border-[#E2DBCB] dark:border-[#333342] text-xs font-sans font-semibold text-accent-terracotta dark:text-amber-300 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-accent-amber" /> Distinction Awarded
                  </span>
                  <span className="text-xs font-sans text-ink-muted dark:text-zinc-400 font-medium">
                    Summer 2026 &middot; 80 Hours
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-ink-900 dark:text-white leading-snug">
                    Distinction in R Programming &amp; Bibliometrics
                  </h4>
                  <p className="text-xs sm:text-sm font-sans font-medium text-accent-rose">
                    ThinkNeuro Summer Research Internship Program &middot; ADHD Citation Synthesis
                  </p>
                </div>

                <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-[1.75] max-w-2xl">
                  Over 80 hours I used R and Biblioshiny to map which 100 papers have shaped ADHD and working memory research most, then co-authored a synthesis poster with students from Georgia State, UConn and Trinity. Presented at the ThinkNeuro symposium with distinction awarded in computational bibliometrics.
                </p>

                {/* Highlights row */}
                <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                  <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#2D2D38]">
                    <div className="text-xs font-sans text-ink-muted dark:text-zinc-400 mb-0.5">Neuroscience &amp; R</div>
                    <div className="text-base sm:text-lg font-serif font-semibold text-ink-900 dark:text-white">80 Hours</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#2D2D38]">
                    <div className="text-xs font-sans text-ink-muted dark:text-zinc-400 mb-0.5">Citation Mapping</div>
                    <div className="text-base sm:text-lg font-serif font-semibold text-ink-900 dark:text-white">Top 100 Studies</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#2D2D38]">
                    <div className="text-xs font-sans text-ink-muted dark:text-zinc-400 mb-0.5">Synthesis</div>
                    <div className="text-base sm:text-lg font-serif font-semibold text-ink-900 dark:text-white">43 Papers</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Poster Images (with click-to-expand lightbox preview) */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-2">
                <div className="flex items-center justify-between w-full max-w-[260px] text-xs font-sans text-ink-muted dark:text-zinc-400 font-medium">
                  <span>Symposium Documentation</span>
                  <span className="text-accent-rose text-xs font-semibold">Click to expand</span>
                </div>

                <div
                  onClick={() =>
                    openLightbox(
                      [
                        {
                          src: "/images/projects/thinkneuro-1.jpg",
                          title: "ThinkNeuro Research Symposium Poster — Part 1",
                        },
                        {
                          src: "/images/projects/thinkneuro-2.jpg",
                          title: "ThinkNeuro Research Symposium Presentation — Part 2",
                        },
                      ],
                      0
                    )
                  }
                  data-cursor="view"
                  className="group relative w-full max-w-[260px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-card border-2 border-white dark:border-[#30303C] bg-white dark:bg-zinc-900"
                >
                  <Image
                    src="/images/projects/thinkneuro-1.jpg"
                    alt="ThinkNeuro Research Symposium Poster"
                    fill
                    sizes="280px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-4 text-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white text-xs font-sans font-medium text-ink-900 flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5" /> View Poster (2)
                    </span>
                    <span className="text-[11px] text-white/90 font-sans">
                      Click to inspect high-res poster
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Research Initiative Cards with Mathematically Aligned Baselines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {otherResearch.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#16161B] border border-[#E7E2D6] dark:border-[#2E2E38] shadow-soft hover:shadow-card transition-all"
              >
                <div className="flex flex-col flex-1">
                  {/* Uniform Tags Container (28px height) */}
                  <div className="h-7 flex items-center gap-1.5 overflow-hidden mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-[#F4EFE5] dark:bg-[#22222A] text-ink-700 dark:text-zinc-200 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Uniform Organization Header (40px height) */}
                  <div className="h-10 flex items-center mb-1">
                    <p className="text-xs font-sans font-semibold text-accent-rose line-clamp-2 leading-snug">
                      {item.organization || item.periodOrGrade}
                    </p>
                  </div>

                  {/* Uniform Title (56px height) */}
                  <div className="h-14 flex items-center mb-1">
                    <h4 className="text-lg font-serif font-medium text-ink-900 dark:text-white line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  {/* Uniform Role (32px height) */}
                  <div className="h-8 flex items-center mb-3">
                    <p className="text-xs text-ink-muted dark:text-zinc-400 line-clamp-1">
                      {item.role}
                    </p>
                  </div>

                  {/* Uniform Description (min 88px) */}
                  <div className="min-h-[88px] flex-1">
                    <p className="text-xs sm:text-sm text-ink-muted dark:text-zinc-200 leading-[1.7] line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Pinned Bottom Stats Row */}
                <div className="pt-4 mt-5 border-t border-[#F0EAE0] dark:border-[#282834] space-y-1.5">
                  {item.keyStats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="h-5 flex justify-between items-center text-xs">
                      <span className="text-ink-muted dark:text-zinc-400 truncate pr-2">{stat.label}:</span>
                      <span className="font-sans font-semibold text-ink-900 dark:text-white shrink-0">
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

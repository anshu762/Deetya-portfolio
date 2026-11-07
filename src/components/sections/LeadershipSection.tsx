"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { LEADERSHIP_CONTENT } from "@/data/content";

export default function LeadershipSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string; title?: string }[]>([]);

  const openGallery = (images: string[], title: string, index: number = 0) => {
    setCurrentSlides(
      images.map((src, i) => ({
        src,
        title: `${title} — Photo ${i + 1}`,
      }))
    );
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const ibadat = LEADERSHIP_CONTENT.initiatives[0];
  const invictus = LEADERSHIP_CONTENT.initiatives[1];

  return (
    <section id="leadership" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="05"
          pill={LEADERSHIP_CONTENT.sectionLabel}
          title={LEADERSHIP_CONTENT.sectionTitle}
          subtitle="Student governance, community art curation with IBADAT Special School, and school-wide wellbeing initiatives in Amritsar."
        />

        <div className="space-y-12 sm:space-y-16">
          {/* Initiative 1: IBADAT Special School */}
          <div className="rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-6 sm:p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-[0.18em] text-accent-rose dark:text-pink-300 block mb-1 font-semibold">
                      {ibadat.organization} &middot; {ibadat.gradeOrDate}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-ink-900 dark:text-white">
                      {ibadat.projectTitle}
                    </h3>
                    <p className="text-sm font-sans font-medium text-accent-terracotta dark:text-amber-400 mt-1">
                      {ibadat.role}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-[1.75]">
                    {ibadat.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#202028] border border-[#E7E0D2] dark:border-[#2E2E38]">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-accent-rose dark:text-pink-300 block mb-1">
                        2027 Inclusion Calendar
                      </span>
                      <p className="text-xs font-sans text-ink-muted dark:text-zinc-300 leading-relaxed">
                        Curated 12 student artworks with monthly inclusion tips for regional schools and clinics.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#202028] border border-[#E7E0D2] dark:border-[#2E2E38]">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-accent-rose dark:text-pink-300 block mb-1">
                        Winter-Wear Drive
                      </span>
                      <p className="text-xs font-sans text-ink-muted dark:text-zinc-300 leading-relaxed">
                        Spearheaded Children&apos;s Day warm clothing collection &amp; distribution for families (Nov 2025).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Metrics & Action */}
                <div className="pt-4 mt-auto border-t border-[#EAE3D4]/80 dark:border-[#2E2E38]/80 space-y-3.5">
                  {/* Key Stats Row */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    {ibadat.keyStats.map((st, i) => (
                      <div
                        key={i}
                        className="p-3 sm:p-3.5 rounded-xl bg-white/70 dark:bg-[#202028]/70 border border-[#E4DCCE] dark:border-[#2E2E38] shadow-2xs"
                      >
                        <div className="text-xl sm:text-2xl font-serif font-semibold text-accent-rose dark:text-pink-400 tracking-tight">
                          {st.value}
                        </div>
                        <div className="text-[11px] sm:text-xs font-sans text-ink-muted dark:text-zinc-400 font-medium mt-0.5 leading-snug">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Primary Action Button */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => openGallery(ibadat.images, "IBADAT Special School", 0)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-sans font-semibold hover:bg-accent-rose dark:hover:bg-accent-rose dark:hover:text-white transition-all shadow-xs cursor-pointer group"
                    >
                      <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      <span>View Workshop Documentation (4 Photos)</span>
                    </button>
                    <span className="text-xs font-sans text-ink-muted dark:text-zinc-400">
                      8 Workshops Conducted
                    </span>
                  </div>
                </div>
              </div>

              {/* Workshops Photos */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                <div className="flex justify-between items-center text-xs font-sans text-ink-muted dark:text-zinc-400 font-medium">
                  <span>Art Workshop Documentation</span>
                  <span className="text-accent-rose text-xs font-semibold">4 Photos &middot; Click to inspect</span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-3.5 flex-1">
                  {ibadat.images.map((src, idx) => (
                    <motion.div
                      key={src}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => openGallery(ibadat.images, "IBADAT Special School", idx)}
                      data-cursor="view"
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-soft bg-zinc-100 dark:bg-zinc-800 border border-[#EAE3D4] dark:border-[#2E2E38]"
                    >
                      <Image
                        src={src}
                        alt={`IBADAT workshop photo ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 240px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-sans font-semibold text-zinc-950 flex items-center gap-1 shadow-md">
                          <Eye className="w-3 h-3 text-zinc-950" /> View ({idx + 1}/4)
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Initiative 2: Invictus Student Body Head Girl */}
          <div className="rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-6 sm:p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-[0.18em] text-accent-sage dark:text-emerald-400 block mb-1 font-semibold">
                      {invictus.organization} &middot; {invictus.gradeOrDate}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-ink-900 dark:text-white">
                      {invictus.role}
                    </h3>
                    <p className="text-sm font-sans font-medium text-accent-terracotta dark:text-amber-400 mt-1">
                      {invictus.projectTitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-[1.75]">
                    {invictus.description}
                  </p>

                  {invictus.additionalNote && (
                    <p className="text-xs font-sans text-ink-800 dark:text-zinc-200 p-3.5 sm:p-4 rounded-xl bg-white/80 dark:bg-[#202028] border border-[#E7E0D2] dark:border-[#2E2E38] leading-relaxed">
                      {invictus.additionalNote}
                    </p>
                  )}
                </div>

                {/* Bottom Section: Metrics & Action */}
                <div className="pt-4 mt-auto border-t border-[#EAE3D4]/80 dark:border-[#2E2E38]/80 space-y-3.5">
                  {/* Key Stats Row */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    {invictus.keyStats.map((st, i) => (
                      <div
                        key={i}
                        className="p-3 sm:p-3.5 rounded-xl bg-white/70 dark:bg-[#202028]/70 border border-[#E4DCCE] dark:border-[#2E2E38] shadow-2xs"
                      >
                        <div className="text-xl sm:text-2xl font-serif font-semibold text-accent-sage dark:text-emerald-400 tracking-tight">
                          {st.value}
                        </div>
                        <div className="text-[11px] sm:text-xs font-sans text-ink-muted dark:text-zinc-400 font-medium mt-0.5 leading-snug">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Primary Action Button */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => openGallery(invictus.images, "Invictus Head Girl", 0)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-sans font-semibold hover:bg-accent-sage dark:hover:bg-emerald-600 dark:hover:text-white transition-all shadow-xs cursor-pointer group"
                    >
                      <Eye className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      <span>View Leadership Gallery (3 Photos)</span>
                    </button>
                    <span className="text-xs font-sans text-ink-muted dark:text-zinc-400">
                      Grades 1–12 School Body
                    </span>
                  </div>
                </div>
              </div>

              {/* Head Girl Photos - Magazine Mosaic */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                <div className="flex justify-between items-center text-xs font-sans text-ink-muted dark:text-zinc-400 font-medium">
                  <span>Student Governance &amp; Leadership</span>
                  <span className="text-accent-sage dark:text-emerald-400 text-xs font-semibold flex items-center gap-1">
                    3 Photos &middot; Click to inspect
                  </span>
                </div>

                <div className="flex-1 min-h-[380px] sm:min-h-[440px] lg:min-h-[460px] grid grid-cols-12 gap-3 sm:gap-3.5">
                  {/* Featured Main Portrait */}
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    onClick={() => openGallery(invictus.images, "Invictus Head Girl", 0)}
                    data-cursor="view"
                    className="col-span-7 relative rounded-2xl overflow-hidden cursor-pointer group shadow-soft bg-zinc-100 dark:bg-zinc-800 border border-[#EAE3D4] dark:border-[#2E2E38]"
                  >
                    <Image
                      src={invictus.images[0]}
                      alt="Invictus Head Girl - Main"
                      fill
                      sizes="(max-width: 1024px) 60vw, 360px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                      <span className="px-3 py-1 rounded-full bg-white text-xs font-sans font-semibold text-zinc-950 flex items-center gap-1.5 shadow-md">
                        <Eye className="w-3.5 h-3.5 text-zinc-950" /> View Photo (1/3)
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-[11px] font-sans font-medium text-white/95 border border-white/15 shadow-sm pointer-events-none">
                      Student Governance
                    </div>
                  </motion.div>

                  {/* Two Stacked Secondary Portraits */}
                  <div className="col-span-5 flex flex-col gap-3 sm:gap-3.5 h-full">
                    {invictus.images.slice(1).map((src, idx) => (
                      <motion.div
                        key={src}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => openGallery(invictus.images, "Invictus Head Girl", idx + 1)}
                        data-cursor="view"
                        className="flex-1 relative rounded-2xl overflow-hidden cursor-pointer group shadow-soft bg-zinc-100 dark:bg-zinc-800 border border-[#EAE3D4] dark:border-[#2E2E38]"
                      >
                        <Image
                          src={src}
                          alt={`Invictus Head Girl - Photo ${idx + 2}`}
                          fill
                          sizes="(max-width: 1024px) 40vw, 240px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-sans font-semibold text-zinc-950 flex items-center gap-1 shadow-md">
                            <Eye className="w-3 h-3 text-zinc-950" /> View ({idx + 2}/3)
                          </span>
                        </div>
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-md text-[10px] font-sans font-medium text-white/95 border border-white/15 shadow-sm pointer-events-none">
                          {idx === 0 ? "Advocacy" : "Campus"}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LightboxModal
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentSlides}
        index={lightboxIndex}
      />
    </section>
  );
}

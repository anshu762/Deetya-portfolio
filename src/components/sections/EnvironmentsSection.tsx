"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Eye, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { ENVIRONMENTS_CONTENT } from "@/data/content";

export default function EnvironmentsSection() {
  const [selectedSpaceIndex, setSelectedSpaceIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string; title?: string }[]>([]);

  const openSpaceGallery = (images: string[], title: string, startIndex: number = 0) => {
    setCurrentSlides(
      images.map((src, i) => ({
        src,
        title: `${title} — Exhibit ${i + 1}`,
      }))
    );
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const activeSpace = ENVIRONMENTS_CONTENT.spaces[selectedSpaceIndex];

  return (
    <section id="environments" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="04"
          pill={ENVIRONMENTS_CONTENT.sectionLabel}
          title={ENVIRONMENTS_CONTENT.sectionTitle}
          subtitle={`"${ENVIRONMENTS_CONTENT.tagline}"`}
        />

        {/* Narrative & Method Overview */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="inline-flex items-center gap-2 text-xs font-sans text-accent-sage dark:text-emerald-400 uppercase tracking-[0.18em] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{ENVIRONMENTS_CONTENT.role} &middot; {ENVIRONMENTS_CONTENT.location}</span>
              </div>
            </div>

            {/* Official Brand Emblem */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[16/9] rounded-2xl overflow-hidden bg-white p-2 border border-[#E7DFCFA] dark:border-[#2E2E38] shadow-soft">
              <Image
                src={ENVIRONMENTS_CONTENT.brandLogo}
                alt="Project Nazariya visual emblem"
                fill
                sizes="320px"
                className="object-contain p-2"
              />
            </div>

            <p className="text-xl sm:text-2xl font-serif text-ink-900 dark:text-white leading-snug">
              {ENVIRONMENTS_CONTENT.description}
            </p>

            <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-[1.75]">
              {ENVIRONMENTS_CONTENT.coreExplanation}
            </p>

            {/* Core Iterative Method */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E7DFCFA] dark:border-[#2E2E38] flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-accent-amber shrink-0" />
              <div>
                <span className="text-xs font-sans uppercase tracking-[0.18em] text-ink-muted dark:text-zinc-400 block font-medium">
                  Methodology
                </span>
                <span className="text-sm sm:text-base font-serif italic text-ink-900 dark:text-white font-medium">
                  &ldquo;{ENVIRONMENTS_CONTENT.method}&rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* 4 Big Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {ENVIRONMENTS_CONTENT.keyStatistics.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16161B] border border-[#E7E2D6] dark:border-[#2E2E38] shadow-soft flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl font-serif font-semibold text-accent-sage dark:text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-sans font-medium text-ink-muted dark:text-zinc-300 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interventions Matrix */}
        <div className="mb-16">
          <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-ink-muted dark:text-zinc-400 mb-6 font-semibold">
            Core Assistive Interventions Deployed
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENVIRONMENTS_CONTENT.interventions.map((intv, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E7DFCFA] dark:border-[#2E2E38] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-sage dark:text-emerald-400 shrink-0" />
                  <h5 className="text-sm font-serif font-semibold text-ink-900 dark:text-white">
                    {intv.title}
                  </h5>
                </div>
                <p className="text-xs text-ink-muted dark:text-zinc-300 leading-relaxed">{intv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Space Showcase (Police Stations, Workplaces, Schools) */}
        <div className="rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-5 sm:p-8 md:p-10 shadow-card">
          {/* Space Selection Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-6 sm:pb-8 border-b border-[#EAE3D4] dark:border-[#272732]">
            {ENVIRONMENTS_CONTENT.spaces.map((sp, idx) => (
              <button
                key={sp.id}
                onClick={() => setSelectedSpaceIndex(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
                  selectedSpaceIndex === idx
                    ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900 shadow-sm font-semibold"
                    : "bg-white dark:bg-[#202028] text-ink-muted dark:text-zinc-300 hover:text-ink-900 dark:hover:text-white border border-[#E5DFCF] dark:border-[#2E2E38]"
                }`}
              >
                {sp.subtitle}
              </button>
            ))}
          </div>

          {/* Active Space Details */}
          <div className="pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-sans text-accent-sage dark:text-emerald-400 uppercase tracking-wider block mb-1 font-semibold">
                  {activeSpace.locationDate}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-900 dark:text-white">
                  {activeSpace.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-[1.75]">
                {activeSpace.description}
              </p>

              {/* Handbook & tool tags */}
              <div className="pt-2">
                <span className="text-xs font-sans text-ink-muted dark:text-zinc-400 block mb-2 uppercase tracking-wider font-semibold">
                  Deliverables &amp; Tooling:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSpace.details.map((d, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#202028] text-xs font-sans font-medium text-ink-800 dark:text-zinc-200 border border-[#E3DCCF] dark:border-[#2E2E38]"
                    >
                      <BookOpen className="w-3 h-3 text-accent-terracotta" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Images Grid for Active Space */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex justify-between items-center text-xs font-sans text-ink-muted dark:text-zinc-400 mb-1 font-medium">
                <span>Handbooks &amp; Field Photos</span>
                <span className="text-accent-rose text-xs font-semibold">Click to inspect</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {activeSpace.images.map((imgSrc, imgIdx) => (
                  <motion.div
                    key={imgSrc}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openSpaceGallery(activeSpace.images, activeSpace.title, imgIdx)}
                    data-cursor="view"
                    className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-soft bg-zinc-100 dark:bg-zinc-800 border border-[#EAE3D4] dark:border-[#2E2E38] ${
                      activeSpace.images.length === 3 && imgIdx === 2
                        ? "col-span-2 aspect-[16/7]"
                        : activeSpace.images.length === 4 && imgIdx === 3
                        ? "col-span-2 aspect-[16/8]"
                        : "col-span-1 aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${activeSpace.title} photo ${imgIdx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 text-xs font-sans font-medium text-ink-900 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> Expand
                      </span>
                    </div>
                  </motion.div>
                ))}
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

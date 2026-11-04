"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Palette } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { ART_DANCE_CONTENT } from "@/data/content";

type FilterCategory = "all" | "watercolour" | "pastel" | "graphite" | "dance";

export default function ArtDanceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { dance, artworks } = ART_DANCE_CONTENT;

  // Filter artworks
  const filteredArtworks =
    activeFilter === "all"
      ? artworks
      : activeFilter === "dance"
      ? []
      : artworks.filter((item) => item.category === activeFilter);

  // Prepare slides for lightbox
  const currentSlides =
    activeFilter === "dance"
      ? dance.images.map((src, i) => ({
          src,
          title: `${dance.projectTitle} — Performance ${i + 1}`,
          description: `${dance.styles} · Audience of 1,200+`,
        }))
      : filteredArtworks.map((art) => ({
          src: art.image,
          title: art.title,
          description: `${art.medium} — Original Fine Artwork`,
        }));

  const openLightboxForIndex = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const filterTabs: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: "All Artworks", count: artworks.length },
    {
      id: "watercolour",
      label: "Watercolour & Ink",
      count: artworks.filter((a) => a.category === "watercolour").length,
    },
    {
      id: "pastel",
      label: "Pastel",
      count: artworks.filter((a) => a.category === "pastel").length,
    },
    {
      id: "graphite",
      label: "Graphite",
      count: artworks.filter((a) => a.category === "graphite").length,
    },
    { id: "dance", label: "Classical Dance", count: dance.images.length },
  ];

  return (
    <section id="art" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="08"
          pill={ART_DANCE_CONTENT.sectionLabel}
          title={ART_DANCE_CONTENT.sectionTitle}
          subtitle={ART_DANCE_CONTENT.intro}
        />

        {/* Dance as Psychology Outreach Spotlight */}
        <div className="mb-16 md:mb-20 rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-6 sm:p-8 md:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-accent-rose dark:text-pink-300 block mb-1 font-semibold">
                  {dance.styles} · {dance.details}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-ink-900 dark:text-white">
                  {dance.projectTitle}
                </h3>
                <p className="text-sm font-mono text-ink-muted dark:text-zinc-400 mt-1">{dance.role}</p>
              </div>

              <p className="text-sm sm:text-base text-ink-muted dark:text-zinc-200 leading-relaxed">
                {dance.description}
              </p>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                {dance.stats.map((s, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-4 rounded-xl bg-white dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#2E2E38] text-center"
                  >
                    <div className="text-base sm:text-lg font-serif font-semibold text-accent-rose dark:text-pink-400">
                      {s.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-ink-muted dark:text-zinc-300 mt-1 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dance Performance Staged Photography */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono text-ink-muted dark:text-zinc-400 mb-1">
                <span>Kathak & Bharatanatyam Outreach</span>
                <span className="text-accent-rose text-[11px] font-semibold">Click to inspect</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {dance.images.map((src, idx) => (
                  <motion.div
                    key={src}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      setActiveFilter("dance");
                      openLightboxForIndex(idx);
                    }}
                    data-cursor="view"
                    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-soft bg-zinc-100 dark:bg-zinc-800 border border-[#EAE3D4] dark:border-[#2E2E38] aspect-[3/4]"
                  >
                    <Image
                      src={src}
                      alt={`Dance stage photo ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 33vw, 200px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-2 py-1 rounded-full bg-white text-[10px] font-mono text-ink-900 flex items-center gap-1">
                        <Eye className="w-3 h-3" /> View
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fine Artworks Gallery Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted dark:text-zinc-300 mb-2">
                <Palette className="w-4 h-4 text-accent-terracotta dark:text-amber-400" />
                <span>Original Artworks (14 Studies)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-900 dark:text-white">
                Watercolour, Pastel & Graphite Gallery
              </h3>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all ${
                    activeFilter === tab.id
                      ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900 font-semibold shadow-xs"
                      : "bg-[#FAF6EE] dark:bg-[#16161B] text-ink-muted dark:text-zinc-200 hover:text-ink-900 dark:hover:text-white border border-[#E6DFCFA] dark:border-[#2E2E38]"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Responsive Column Gallery */}
          {activeFilter !== "dance" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              <AnimatePresence>
                {filteredArtworks.map((art, idx) => (
                  <motion.div
                    key={art.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => openLightboxForIndex(idx)}
                    data-cursor="view"
                    className="group relative rounded-2xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-3 shadow-soft hover:shadow-card cursor-pointer flex flex-col justify-between"
                  >
                    <div
                      className={`relative w-full rounded-xl overflow-hidden bg-white dark:bg-zinc-900 mb-3 border border-[#EAE3D4] dark:border-[#2E2E38] ${
                        art.aspect === "landscape" ? "aspect-[16/11]" : "aspect-[3/4]"
                      }`}
                    >
                      <Image
                        src={art.image}
                        alt={`${art.title} — ${art.medium} by Deetya Behl`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white text-xs font-mono text-ink-900 flex items-center gap-1.5 shadow-md">
                          <Eye className="w-3.5 h-3.5" /> Expand
                        </span>
                      </div>
                    </div>

                    <div className="px-1 py-1">
                      <div className="flex justify-between items-center text-[11px] font-mono text-accent-rose dark:text-pink-400 mb-0.5 font-semibold">
                        <span className="uppercase tracking-wider">{art.medium}</span>
                      </div>
                      <h4 className="text-base font-serif font-medium text-ink-900 dark:text-white">
                        {art.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {dance.images.map((src, idx) => (
                <div
                  key={src}
                  onClick={() => openLightboxForIndex(idx)}
                  className="rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] relative group shadow-soft border border-[#EAE3D4] dark:border-[#2E2E38]"
                >
                  <Image
                    src={src}
                    alt={`Dance performance ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white text-xs font-mono text-ink-900">
                      View Dance Performance
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { RECOMMENDATION_LETTERS } from "@/data/content";

export default function LorSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = RECOMMENDATION_LETTERS.map((lor) => ({
    src: lor.image,
    title: `${lor.author} — ${lor.role}`,
    description: lor.organization,
  }));

  const openLor = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="endorsements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="07"
          pill="Endorsements"
          title="Letters of Recommendation"
          subtitle="Official institutional commendations from government administrators, public security leadership, and elected ministers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RECOMMENDATION_LETTERS.map((lor, index) => (
            <motion.div
              key={lor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col justify-between rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-6 sm:p-8 shadow-card"
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Header: Document badge & date */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-rose dark:text-pink-300 uppercase tracking-wider font-semibold">
                    <FileText className="w-3.5 h-3.5" /> Official Commendation
                  </span>
                  <span className="text-xs font-mono text-ink-muted dark:text-zinc-400">{lor.date}</span>
                </div>

                {/* Document Thumbnail Preview */}
                <div
                  onClick={() => openLor(index)}
                  data-cursor="view"
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group shadow-soft border-2 border-white dark:border-[#2E2E38] bg-white dark:bg-zinc-900"
                >
                  <Image
                    src={lor.image}
                    alt={`Letter from ${lor.author}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white text-xs font-mono text-ink-900 flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5" /> Read Full Letter
                    </span>
                  </div>
                </div>

                {/* Excerpt Quote */}
                <div className="relative pl-4 border-l-2 border-accent-terracotta dark:border-amber-400 space-y-2">
                  <p className="text-xs sm:text-sm font-serif italic text-ink-800 dark:text-zinc-100 leading-relaxed">
                    &ldquo;{lor.quote}&rdquo;
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs text-ink-muted dark:text-zinc-300 leading-relaxed">
                  {lor.summary}
                </p>
              </div>

              {/* Author signature footer */}
              <div className="pt-5 mt-5 border-t border-[#EAE3D4] dark:border-[#272732] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-semibold text-ink-900 dark:text-white">
                    {lor.author}
                  </h4>
                  <p className="text-[11px] font-mono text-ink-muted dark:text-zinc-300">
                    {lor.role} · {lor.organization}
                  </p>
                </div>

                <button
                  onClick={() => openLor(index)}
                  className="p-2.5 rounded-full bg-white dark:bg-[#202028] text-ink-700 dark:text-zinc-200 hover:text-accent-rose dark:hover:text-pink-300 border border-[#E3DCCF] dark:border-[#2E2E38] transition-colors"
                  aria-label={`View letter from ${lor.author}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LightboxModal
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Eye, FileBadge } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { HONOURS_AWARDS } from "@/data/content";

export default function HonoursSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Extract items that have certificate images
  const certificates = HONOURS_AWARDS.filter((h) => h.certificateImage);
  const slides = certificates.map((c) => ({
    src: c.certificateImage!,
    title: c.title,
    description: c.details,
  }));

  const openCertificate = (certImage: string) => {
    const idx = certificates.findIndex((c) => c.certificateImage === certImage);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <section id="honours" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="06"
          pill="Recognition"
          title="Honours & Distinctions"
          subtitle="Recognition across behavioural science research, international olympiads, and school leadership."
        />

        {/* Certificate Previews Gallery (Top Tier) */}
        <div className="mb-14">
          <div className="flex justify-between items-center text-xs font-sans text-ink-muted dark:text-zinc-400 uppercase tracking-[0.18em] mb-6 font-medium">
            <span>Verified Credentials &amp; Awards</span>
            <span className="text-accent-rose font-semibold">Click to inspect credential</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => openCertificate(cert.certificateImage!)}
                data-cursor="view"
                className="group flex flex-col justify-between rounded-2xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-4 cursor-pointer shadow-soft hover:shadow-card transition-all"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white dark:bg-zinc-900 mb-4 border border-[#EAE3D4] dark:border-[#2E2E38]">
                  <Image
                    src={cert.certificateImage!}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1 rounded-full bg-white text-xs font-sans font-medium text-ink-900 flex items-center gap-1.5 shadow-sm">
                      <Eye className="w-3.5 h-3.5" /> View Certificate
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-sans text-accent-rose dark:text-pink-400 mb-1 font-semibold">
                    <span>{cert.year}</span>
                    <FileBadge className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-base font-serif font-semibold text-ink-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-ink-muted dark:text-zinc-200 mt-1 leading-[1.7]">
                    {cert.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Complete Honours Registry List */}
        <div className="rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] p-5 sm:p-8 md:p-10 shadow-card">
          <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] font-semibold text-ink-muted dark:text-zinc-300 pb-6 border-b border-[#EAE3D4] dark:border-[#272732]">
            <Award className="w-4 h-4 text-accent-amber" />
            <span>Complete Academic &amp; Innovation Registry</span>
          </div>

          <div className="divide-y divide-[#EAE3D4] dark:divide-[#272732]">
            {HONOURS_AWARDS.map((item, idx) => (
              <div
                key={item.id}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-white/50 dark:hover:bg-[#202028]/60 px-2 rounded-xl transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans font-medium text-accent-rose">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h5 className="text-base sm:text-lg font-serif font-medium text-ink-900 dark:text-white group-hover:text-accent-rose transition-colors">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted dark:text-zinc-300 pl-7 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="flex items-center gap-3 pl-7 sm:pl-0 shrink-0">
                  {item.year && (
                    <span className="text-xs font-sans font-medium px-3 py-0.5 rounded-full bg-white dark:bg-[#202028] text-ink-800 dark:text-zinc-200 border border-[#E5DFCF] dark:border-[#2E2E38]">
                      {item.year}
                    </span>
                  )}
                  {item.certificateImage && (
                    <button
                      onClick={() => openCertificate(item.certificateImage!)}
                      className="text-xs font-sans text-accent-terracotta dark:text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <Eye className="w-3 h-3" /> Certificate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
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

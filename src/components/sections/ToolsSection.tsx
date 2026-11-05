"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Eye, Lightbulb, ShieldCheck, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LightboxModal from "@/components/ui/LightboxModal";
import { TOOLS_CONTENT } from "@/data/content";

export default function ToolsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="tools" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="03"
          pill={TOOLS_CONTENT.sectionLabel}
          title={TOOLS_CONTENT.sectionTitle}
          subtitle="Testing whether invisible pulses in classroom LED lighting trigger restlessness — and building an $11 wearable to measure it."
        />

        {/* Standout Innovation Feature Card */}
        <div className="rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] overflow-hidden shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Col: Device Image Showcase */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[520px] bg-[#EFE9DD] dark:bg-[#202028] p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-sans font-medium tracking-wide px-3.5 py-1 rounded-full bg-white/90 dark:bg-black/70 text-ink-800 dark:text-zinc-100 backdrop-blur-sm">
                  Hardware Prototype
                </span>
                <span className="text-xs font-sans text-accent-terracotta dark:text-amber-400 font-semibold">
                  {TOOLS_CONTENT.metrics[0].value} Build Cost
                </span>
              </div>

              {/* Centered Device Image */}
              <div
                onClick={() => setLightboxOpen(true)}
                data-cursor="view"
                className="relative my-6 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-floating group cursor-pointer border-2 border-white dark:border-[#2E2E38]"
              >
                <Image
                  src={TOOLS_CONTENT.image}
                  alt="FlickerScope wearable device prototype"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-xs font-sans font-medium text-ink-900 flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" /> View Device Schematic
                  </span>
                </div>
              </div>

              <div className="z-10 text-xs font-sans text-ink-muted dark:text-zinc-400 text-center">
                Click image to view high-resolution prototype documentation
              </div>
            </div>

            {/* Right Col: Technical & Clinical Breakdown */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-accent-terracotta dark:text-amber-400 font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{TOOLS_CONTENT.role}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-ink-900 dark:text-white leading-[1.1] break-words">
                    {TOOLS_CONTENT.headline}
                  </h3>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-ink-muted dark:text-zinc-200 leading-[1.75]">
                  {TOOLS_CONTENT.description}
                </p>

                {/* Empirical Result Callout */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#202028] border border-[#E7E0D2] dark:border-[#2E2E38] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-accent-rose dark:text-pink-300 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Clinical Research Verification</span>
                  </div>
                  <p className="text-sm sm:text-base text-ink-900 dark:text-white font-serif italic">
                    &ldquo;{TOOLS_CONTENT.researchResult}&rdquo;
                  </p>
                  <p className="text-xs text-ink-muted dark:text-zinc-300 pt-1 leading-relaxed">
                    <strong className="text-ink-800 dark:text-white">Institutional Impact:</strong> {TOOLS_CONTENT.impact}
                  </p>
                </div>

                {/* Highlight Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {TOOLS_CONTENT.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE5] dark:bg-[#202028] border border-[#E2DBCB] dark:border-[#2E2E38]"
                    >
                      <div className="text-2xl sm:text-3xl font-serif font-semibold text-ink-900 dark:text-white mb-1">
                        {m.value}
                      </div>
                      <div className="text-xs font-sans font-medium text-ink-800 dark:text-zinc-200">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-ink-muted dark:text-zinc-400 mt-1 leading-tight">
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schematic Technical Notes */}
              <div className="pt-6 border-t border-[#EAE3D4] dark:border-[#272732] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {TOOLS_CONTENT.schematicPoints.map((pt, i) => (
                  <div key={i} className="space-y-1">
                    <p className="font-sans font-semibold text-xs text-ink-800 dark:text-zinc-100">
                      0{i + 1}. {pt.title}
                    </p>
                    <p className="text-ink-muted dark:text-zinc-300 text-[11px] leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LightboxModal
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[
          {
            src: TOOLS_CONTENT.image,
            title: "FlickerScope — Low-Cost Wearable Motion & Flicker Tracker",
            description: "$11 detector identifying links between LED PWM flicker and motor restlessness in neurodivergent students.",
          },
        ]}
      />
    </section>
  );
}

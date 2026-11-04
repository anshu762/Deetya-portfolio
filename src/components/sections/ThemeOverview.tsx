"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Wrench, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { THREE_THEMES } from "@/data/content";

export default function ThemeOverview() {
  const getIcon = (id: string) => {
    switch (id) {
      case "brain":
        return <Brain className="w-6 h-6 text-accent-rose" />;
      case "task":
        return <Wrench className="w-6 h-6 text-accent-terracotta" />;
      case "room":
        return <Building2 className="w-6 h-6 text-accent-sage" />;
      default:
        return null;
    }
  };

  const getBorderColor = (id: string) => {
    switch (id) {
      case "brain":
        return "hover:border-accent-rose/50";
      case "task":
        return "hover:border-accent-terracotta/50";
      case "room":
        return "hover:border-accent-sage/50";
      default:
        return "";
    }
  };

  return (
    <section id="overview" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <SectionHeading
          number="01"
          pill="The Central Framework"
          title="Three Pillars of Inquiry"
          subtitle="Connecting cognitive inquiry, assistive engineering, and inclusive physical architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {THREE_THEMES.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.anchor}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] dark:bg-[#16161B] border border-[#E6DFCFA] dark:border-[#2E2E38] transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1.5 ${getBorderColor(
                item.id
              )}`}
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Header row: Number + Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-ink-muted dark:text-zinc-400">
                    PILLAR [{item.pillarNumber}]
                  </span>
                  <div className="p-3 rounded-2xl bg-white dark:bg-[#22222A] shadow-xs group-hover:scale-110 transition-transform">
                    {getIcon(item.id)}
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-accent-rose mb-1">
                    {item.theme}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-muted dark:text-zinc-200 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Badge & Link Arrow */}
              <div className="pt-6 sm:pt-8 mt-6 border-t border-[#EAE3D4] dark:border-[#272732] flex items-center justify-between gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white dark:bg-[#202028] text-ink-800 dark:text-zinc-100 border border-[#E3DCCF] dark:border-[#383844] truncate">
                  {item.highlight}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-medium text-ink-900 dark:text-white group-hover:text-accent-rose transition-colors shrink-0">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

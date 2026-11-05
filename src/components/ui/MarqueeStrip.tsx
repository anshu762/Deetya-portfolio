import React from "react";

export default function MarqueeStrip() {
  const items = [
    "The Brain · Cognitive Research",
    "The Task · Wearable Tech & FlickerScope",
    "The Room · Inclusive Environments & Project Nazariya",
    "IRIS National Fair 2026 · APA Special Award",
    "Classical Dance · Kathak & Bharatanatyam Outreach",
  ];

  return (
    <div
      className="relative w-full overflow-hidden py-4 border-y border-[#E7E2D6] dark:border-[#27272E] bg-[#F5F1E8]/50 dark:bg-[#151518]/50 select-none"
      aria-hidden="true"
    >
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-xs uppercase font-sans font-medium tracking-[0.2em] text-ink-700 dark:text-zinc-300">
              {text}
            </span>
            <span className="ml-8 w-1.5 h-1.5 rounded-full bg-accent-rose" />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if already shown in this browser session
    const hasLoaded = sessionStorage.getItem("deetya-portfolio-loaded");
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      dismiss();
    }, 1600);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        dismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("deetya-portfolio-loaded", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading Deetya Behl Portfolio"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={dismiss}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBF9F5] text-[#18181B] cursor-pointer select-none"
        >
          {/* Subtle watercolor bleed aura */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.35 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-96 h-96 rounded-full bg-gradient-to-tr from-[#E8C2B3] via-[#E2B7B3] to-[#B8C8B5] blur-3xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.25em] text-[#78716C] mb-3 font-sans font-medium"
            >
              Curated Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-serif tracking-tight font-medium"
            >
              Deetya Behl
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="h-px bg-[#C96570] my-4"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xs font-serif italic text-[#57534E] max-w-xs"
            >
              The Brain · The Task · The Room
            </motion.p>
          </div>

          <div className="absolute bottom-8 text-xs font-sans tracking-wide text-[#A8A29E]">
            Click anywhere or press Esc to skip
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

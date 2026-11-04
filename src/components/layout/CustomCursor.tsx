"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for desktop mice
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("button, a, input, textarea, select, [role='button']");
      const viewable = target.closest("[data-cursor='view']");

      if (viewable) {
        setCursorType("view");
      } else if (clickable) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-mono pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorType === "view" ? 32 : cursorType === "pointer" ? 22 : 12),
          y: mousePosition.y - (cursorType === "view" ? 32 : cursorType === "pointer" ? 22 : 12),
          width: cursorType === "view" ? 64 : cursorType === "pointer" ? 44 : 24,
          height: cursorType === "view" ? 64 : cursorType === "pointer" ? 44 : 24,
          backgroundColor:
            cursorType === "view"
              ? "rgba(201, 101, 112, 0.9)"
              : cursorType === "pointer"
              ? "rgba(184, 93, 62, 0.15)"
              : "rgba(24, 24, 27, 0.05)",
          borderColor:
            cursorType === "view"
              ? "#C96570"
              : cursorType === "pointer"
              ? "rgba(184, 93, 62, 0.6)"
              : "rgba(24, 24, 27, 0.25)",
          borderWidth: cursorType === "view" ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 350, mass: 0.4 }}
      >
        {cursorType === "view" && (
          <span className="text-[10px] font-medium tracking-widest text-white uppercase">
            View
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      {cursorType !== "view" && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C96570] pointer-events-none"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            scale: cursorType === "pointer" ? 0 : 1,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 600, mass: 0.1 }}
        />
      )}
    </div>
  );
}

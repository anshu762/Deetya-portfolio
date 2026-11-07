"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { scrollToTarget } from "@/lib/scroll";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Research", href: "#research" },
  { label: "Tools", href: "#tools" },
  { label: "Environments", href: "#environments" },
  { label: "Leadership", href: "#leadership" },
  { label: "Honours", href: "#honours" },
  { label: "Art & Dance", href: "#art" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Theme preference check
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Scroll listener for sticky background and active section
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = NAV_LINKS.map((link) => link.href.substring(1));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on outside tap/click
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleLinkClick = (href: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Brief tick allows the drawer collapse to initiate without conflicting with scroll
      setTimeout(() => {
        scrollToTarget(href, 75);
      }, 100);
    } else {
      scrollToTarget(href, 75);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "py-3 bg-[#FBF9F5]/95 dark:bg-[#121214]/95 backdrop-blur-md border-b border-[#E7E2D6] dark:border-[#27272E] shadow-sm"
          : "py-5 sm:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => handleLinkClick("#home")}
          className="group flex items-center gap-2 text-lg md:text-xl font-serif font-semibold tracking-tight text-ink-900 dark:text-white cursor-pointer"
        >
          <span>Deetya Behl</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-rose group-hover:scale-150 transition-transform duration-300" />
        </button>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 bg-[#F5F1E8]/80 dark:bg-[#1A1A22]/90 p-1.5 rounded-full border border-[#E7E2D6] dark:border-[#2D2D38]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-[#2A2A36] text-ink-900 dark:text-white shadow-xs font-semibold"
                    : "text-ink-muted dark:text-zinc-300 hover:text-ink-900 dark:hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Dark Mode + CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-[#E7E2D6] dark:border-[#2E2E38] text-ink-700 dark:text-zinc-200 hover:text-ink-900 dark:hover:text-white bg-white/50 dark:bg-[#1A1A22] transition-colors cursor-pointer"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick("#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-ink-900 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button (minimum 44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2.5 -mr-1.5 text-ink-900 dark:text-white focus:outline-hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#FBF9F5] dark:bg-[#121216] border-b border-[#E7E2D6] dark:border-[#2E2E38] px-5 sm:px-8 py-5 shadow-2xl max-h-[calc(100dvh-64px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className={`w-full text-left py-3 px-3.5 rounded-xl text-base font-serif font-medium transition-colors flex items-center justify-between min-h-[48px] cursor-pointer ${
                      isActive
                        ? "bg-accent-rose/10 text-accent-rose font-semibold"
                        : "text-ink-900 dark:text-white hover:bg-[#F3EDE0] dark:hover:bg-[#202028]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-accent-rose dark:text-pink-400">
                        0{idx + 1}
                      </span>
                      <span className="tracking-wide">{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink-muted/50 dark:text-zinc-500" />
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#E7E2D6] dark:border-[#2E2E38] flex justify-between items-center px-1">
                <span className="text-xs font-mono text-ink-muted dark:text-zinc-400">
                  Invictus International School
                </span>
                <button
                  type="button"
                  onClick={() => handleLinkClick("#contact")}
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-rose dark:text-pink-400 py-2 px-3 rounded-lg hover:bg-accent-rose/10 transition-colors cursor-pointer"
                >
                  Contact →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

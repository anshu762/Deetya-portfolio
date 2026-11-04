import type Lenis from "lenis";

declare global {
  interface Window {
    __lenisInstance?: Lenis;
  }
}

/**
 * Universal smooth scrolling helper.
 * Coordinates with Lenis on desktop / Lenis-enabled browsers, and provides a precise native
 * window.scrollTo fallback with fixed navbar clearance for mobile and touch devices.
 */
export function scrollToTarget(targetIdOrHref: string, offset = 80) {
  if (typeof window === "undefined") return;

  const cleanId = targetIdOrHref.startsWith("#")
    ? targetIdOrHref.slice(1)
    : targetIdOrHref;

  // Special case for top of page / home
  if (cleanId === "home" || cleanId === "top" || cleanId === "") {
    if (window.__lenisInstance && typeof window.__lenisInstance.scrollTo === "function") {
      window.__lenisInstance.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const element = document.getElementById(cleanId);
  if (element) {
    performScroll(element, offset);
    return;
  }

  // Fallback: try querySelector if passed a selector
  try {
    const queryEl = document.querySelector(targetIdOrHref) as HTMLElement | null;
    if (queryEl) {
      performScroll(queryEl, offset);
    }
  } catch {
    // Ignore invalid selector syntax
  }
}

function performScroll(element: HTMLElement, offset: number) {
  // Check if Lenis is active on window
  if (window.__lenisInstance && typeof window.__lenisInstance.scrollTo === "function") {
    window.__lenisInstance.scrollTo(element, {
      offset: -offset,
      duration: 1.1,
    });
    return;
  }

  // Precise native window.scrollTo calculation
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = rect.top + scrollTop - offset;

  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: "smooth",
  });
}

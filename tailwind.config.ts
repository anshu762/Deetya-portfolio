import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FCFBF9",
          100: "#FBF9F5",
          200: "#F5F1E8",
          300: "#ECE5D8",
          400: "#DFD6C3",
          500: "#C8BC9F",
          dark: "#121214",
          "dark-card": "#18181D",
          "dark-border": "#27272E",
        },
        ink: {
          900: "#141416",
          800: "#1C1C1F",
          700: "#2E2E33",
          600: "#4B4A54",
          muted: "#6B6964",
          light: "#F7F5F0",
        },
        accent: {
          rose: "#C96570",
          "rose-soft": "#F6ECEE",
          terracotta: "#B85D3E",
          "terracotta-soft": "#F9ECE7",
          sage: "#556B59",
          "sage-soft": "#EBF1EC",
          amber: "#C28E3A",
          "amber-soft": "#FAF3E6",
          indigo: "#2A384C",
          "indigo-soft": "#EDF2F7",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 24px -2px rgba(24, 24, 27, 0.05)",
        card: "0 10px 30px -4px rgba(24, 24, 27, 0.08)",
        floating: "0 20px 40px -10px rgba(24, 24, 27, 0.12)",
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

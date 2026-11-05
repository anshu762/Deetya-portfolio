import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  pill?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  number,
  pill,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-12 md:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase font-medium",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        {number && <span className="text-accent-rose">{number} &mdash;</span>}
        {pill && <span className="text-ink-muted dark:text-zinc-400">{pill}</span>}
        <div className="h-[1px] w-8 bg-accent-rose/35 hidden sm:block" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-medium tracking-tight text-ink-900 dark:text-white leading-[1.12] break-words">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-ink-muted dark:text-zinc-300 leading-relaxed font-normal max-w-2xl pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

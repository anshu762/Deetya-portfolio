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
          "flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-ink-muted dark:text-zinc-300",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        {number && <span className="text-accent-rose font-semibold">[{number}]</span>}
        {pill && (
          <span className="px-2.5 py-0.5 rounded-full bg-[#EFE9DC] dark:bg-[#252530] text-ink-800 dark:text-zinc-100 font-medium border border-[#E0D8C8] dark:border-[#383845]">
            {pill}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-ink-900 dark:text-white leading-[1.15] break-words">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-ink-muted dark:text-zinc-200 leading-relaxed font-normal pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

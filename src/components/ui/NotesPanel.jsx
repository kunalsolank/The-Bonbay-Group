import * as React from "react";
import { ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Props:
 * - title: string                (e.g. "Leverage Policy Notes")
 * - subtitle?: string            (small text under the title)
 * - notes: string[]              (rendered as numbered cards)
 * - footnote?: string            (small centered text below the panel)
 * - icon?: ReactNode             (defaults to a shield-check icon)
 * - accentColor?: string         (number badge + icon colour, default green)
 * - className?: string
 */
export function NotesPanel({
  title,
  subtitle,
  notes = [],
  footnote,
  icon,
  accentColor = "#10B981",
  className,
}) {
  if (!notes.length) return null;

  return (
    <div className={cn("mt-10", className)}>
      <div
        className="rounded-[28px] border bg-white/[0.02] p-5 sm:p-8 lg:flex lg:items-start lg:gap-8"
        style={{ borderColor: `${accentColor}33` }}
      >
        {/* Left: icon + title */}
        <div className="flex items-start gap-4 lg:w-60 lg:shrink-0">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-lg border"
            style={{ borderColor: `${accentColor}99`, color: accentColor }}
          >
            {icon ?? <ShieldCheck className="size-5" />}
          </div>
          <div>
            {title && (
              <h3 className="text-sm font-semibold text-white">{title}</h3>
            )}
            {subtitle && (
              <p className="mt-1 text-[11px] leading-snug text-white/40">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right: numbered note cards */}
        <ol className="mt-6 grid flex-1 gap-3 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3">
          {notes.map((note, index) => (
            <li
              key={note}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3 text-left text-sm leading-snug text-white/60"
            >
              <span
                className="flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                style={{ backgroundColor: accentColor }}
              >
                {index + 1}
              </span>
              <span>{note}</span>
            </li>
          ))}
        </ol>
      </div>

      {footnote && (
        <p className="mt-4 text-center text-xs text-white/40">{footnote}</p>
      )}
    </div>
  );
}

export default NotesPanel;
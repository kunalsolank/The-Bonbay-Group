import * as React from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NotesPanel } from "../ui/NotesPanel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Props:
 * - title: string
 * - description?: string
 * - featureHeading?: string (default "Feature")
 * - columns: { key: string, label: string, icon?: string }[]
 * - rows: { label: string, values: Record<columnKey, string | number | boolean | ReactNode> }[]
 * - notesTitle?: string
 * - notes?: string[]
 * - notesSubtitle?: string (small text under the notes title)
 * - notesFootnote?: string (small centered text below the notes panel)
 * - headerColor?: string (header background; default dark ambient green)
 * - headerTextColor?: string (header text colour; default white)
 * - className?: string
 *
 * A column can override the header colours with its own `color` / `textColor`:
 *   { key: "royal", label: "ONE ROYAL", color: "#14532d", textColor: "#fff" }
 *
 * In cell values, `true` renders a check icon and `false` renders a cross icon.
 */

const DEFAULT_HEADER_COLOR = "#0B3D2E"; // dark ambient green
const DEFAULT_HEADER_TEXT_COLOR = "#FFFFFF";

function renderCell(value) {
  if (value === true) {
    return <Check className="mx-auto size-6 text-[#00804B]" strokeWidth={3} />;
  }
  if (value === false) {
    return <X className="mx-auto size-7 text-red-500" />;
  }
  if (value === null || value === undefined) return null;
  return value;
}

export function TableSection({
  title,
  description,
  featureHeading = "Feature",
  columns = [],
  rows = [],
  notesTitle,
  notes,
  notesSubtitle,
  notesFootnote,
  headerColor = DEFAULT_HEADER_COLOR,
  headerTextColor = DEFAULT_HEADER_TEXT_COLOR,
  className,
}) {
  return (
    <section className={cn("overflow-hidden pt-20 pb-25 text-white", className)}>
      <div className="mx-auto max-w-[1350px] px-4 sm:px-0">
        <div className="mx-auto lg:w-10/12">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-center text-4xl font-light sm:text-5xl">{title}</h2>
            {description && (
              <p className="mx-auto max-w-xl pb-2 text-xl">{description}</p>
            )}
          </div>

          <Table className="mb-4 min-w-[1100px] text-center text-white xl:min-w-0">
            <TableHeader>
              <TableRow className="border-0 hover:bg-transparent">
                <TableHead
                  className="rounded-tl-lg px-4 py-2 text-start"
                  style={{ backgroundColor: headerColor, color: headerTextColor }}
                >
                  {featureHeading}
                </TableHead>
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className="px-4 py-2 text-center"
                    style={{
                      backgroundColor: col.color ?? headerColor,
                      color: col.textColor ?? headerTextColor,
                    }}
                  >
                    <div className="flex items-center justify-center gap-3 whitespace-nowrap">
                      {col.label}
                      {col.icon && (
                        <img
                          src={col.icon}
                          alt={col.label}
                          width={57}
                          height={57}
                          loading="lazy"
                        />
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.label}
                  className="border-[#ffffff1f] hover:bg-white/5"
                >
                  <TableHead className="px-4 py-6 text-start font-semibold text-white">
                    {row.label}
                  </TableHead>
                  {columns.map((col) => (
                    <TableCell key={col.key} className="px-4 py-6">
                      {renderCell(row.values[col.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {notes && notes.length > 0 && (
            <NotesPanel
              title={notesTitle}
              subtitle={notesSubtitle}
              notes={notes}
              footnote={notesFootnote}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default TableSection;
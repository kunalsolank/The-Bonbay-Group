import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const rowVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Generic desktop comparison table: a sticky label column on the left and
 * N scrollable columns on the right. Has zero knowledge of what a "column"
 * or "row" represents — you tell it how to render headers and cells.
 *
 * Props:
 * - columns: any[]
 * - getColumnKey(column): string
 * - isFeatured(column): boolean          — (optional) highlights a column
 * - renderColumnHeader(column, index): ReactNode
 * - rows: any[]
 * - getRowKey(row): string
 * - renderRowLabel(row): ReactNode
 * - renderCell(row, column): ReactNode
 * - labelColumnWidth: string              — (optional) defaults to "260px"
 * - scrollHint: string                    — (optional) footer text
 */
const ComparisonTable = ({
  columns,
  getColumnKey,
  isFeatured = () => false,
  renderColumnHeader,
  rows,
  getRowKey,
  renderRowLabel,
  renderCell,
  labelColumnWidth = "260px",
  scrollHint,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.15 }}
    className="relative hidden lg:block"
  >
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <div
          className="min-w-275"
          style={{ "--label-col": labelColumnWidth }}
        >
          {/* Column headers */}
          <div
            className="grid border-b border-white/10"
            style={{
              gridTemplateColumns: `var(--label-col) repeat(${columns.length}, 1fr)`,
            }}
          >
            <div className="sticky left-0 z-20 flex items-end bg-[#0b0c0b] p-6" />

            {columns.map((column, index) => (
              <motion.div
                key={getColumnKey(column)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative border-l border-white/10 px-5 pb-6 pt-7 text-center ${
                  isFeatured(column) ? "bg-yellow-400/4.5" : "bg-white/1"
                }`}
              >
                {renderColumnHeader(column, index)}
              </motion.div>
            ))}
          </div>

          {/* Rows */}
          <div>
            {rows.map((row, rowIndex) => (
              <motion.div
                key={getRowKey(row)}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: rowIndex * 0.035 }}
                className="group grid border-b border-white/6 last:border-b-0"
                style={{
                  gridTemplateColumns: `var(--label-col) repeat(${columns.length}, 1fr)`,
                }}
              >
                <div className="sticky left-0 z-10 flex items-center bg-[#0b0c0b] px-6 py-5 transition-colors duration-300 group-hover:bg-[#111310]">
                  <span className="text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                    {renderRowLabel(row)}
                  </span>
                </div>

                {columns.map((column) => (
                  <div
                    key={`${getColumnKey(column)}-${getRowKey(row)}`}
                    className={`flex min-h-16 items-center justify-center border-l border-white/6 px-4 text-center text-sm font-medium transition-all duration-300 ${
                      isFeatured(column) ? "bg-yellow-400/2 text-white" : "text-white/60"
                    } group-hover:bg-white/2.5 group-hover:text-white`}
                  >
                    {renderCell(row, column)}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {scrollHint && (
        <div className="flex items-center justify-center gap-2 border-t border-white/6 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white/25 xl:hidden">
          <ArrowUpRight size={12} />
          {scrollHint}
        </div>
      )}
    </div>
  </motion.div>
);

export default ComparisonTable;
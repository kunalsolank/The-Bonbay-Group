import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { accounts, features, policyNotes } from "../../data/AccountComparison";

const AccountComparison = () => {
  
  const rowVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // --- Mobile carousel state ---
  const [activeIndex, setActiveIndex] = useState(
    accounts.findIndex((a) => a.featured) !== -1
      ? accounts.findIndex((a) => a.featured)
      : 0
  );
  const activeAccount = accounts[activeIndex];

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () =>
    setActiveIndex((i) => Math.min(accounts.length - 1, i + 1));

  const resolveContent = (feature, account) => {
    if (feature.type === "check") {
      return (
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#20a46a] bg-yellow-400/10">
          <Check size={14} strokeWidth={2.5} className="text-[#20a46a]" />
        </span>
      );
    }
    if (feature.key) return account[feature.key];
    return feature.value;
  };

  return (
    <section className="relative overflow-hidden bg-[#080908] py-16 text-white sm:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-37.5 top-[15%] h-100 w-100 rounded-full bg-yellow-400/5 blur-[120px]" />
        <div className="absolute -right-37.5 bottom-[10%] h-112.5 w-112.5 rounded-full bg-yellow-400/5 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-3xl lg:mb-14"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#20a46a] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#20a46a] shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#20a46a]">
              Trading Accounts
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Choose the Account
            <br />
            <span className="text-[#20a46a]">That Suits You</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            From beginners to seasoned pros — there&apos;s an account for every
            stage of your trading journey.
          </p>
        </motion.div>

        {/* ============ MOBILE / TABLET: card carousel (< lg) ============ */}
        <div className="lg:hidden">
          {/* Account tabs */}
          <div
            className="mb-5 flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {accounts.map((account, index) => (
              <button
                key={account.name}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20a46a]/60 hover:text-[#20a46a] ${
                  index === activeIndex
                    ? "border-[#20a46a] bg-[#20a46a]/10 text-[#20a46a]"
                    : "border-white/10 text-white/40"
                }`}
              >
                {account.name}
              </button>
            ))}
          </div>

          {/* Swipeable card */}
          <motion.div
            key={activeAccount.name}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(e, info) => {
              if (info.offset.x < -60) goNext();
              else if (info.offset.x > 60) goPrev();
            }}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 shadow-2xl shadow-black/30 transition-all duration-500 hover:-translate-y-1 hover:border-[#20a46a]/40 hover:shadow-[0_20px_50px_rgba(32,164,106,0.16)]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#20a46a]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div
              className={`px-6 pb-6 pt-7 text-center ${
                activeAccount.featured ? "bg-yellow-400/4.5" : "bg-white/1"
              }`}
            >
              <div
                className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${
                  activeAccount.featured
                    ? "border-[#20a46a] bg-[#20a46a]/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <span
                  className={`text-lg font-bold ${
                    activeAccount.featured ? "text-[#20a46a]" : "text-white/50"
                  }`}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className={`text-sm font-bold tracking-[0.12em] ${
                  activeAccount.featured ? "text-[#20a46a]" : "text-white"
                }`}
              >
                {activeAccount.name}
              </h3>

              <div className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/30">
                STP
              </div>
            </div>

            <div>
              {features.map((feature, i) => (
                <div
                  key={feature.label}
                  className={`flex items-center justify-between gap-4 border-t border-white/6 px-6 py-4 text-sm ${
                    i % 2 === 0 ? "bg-white/1" : ""
                  }`}
                >
                  <span className="text-white/50">{feature.label}</span>
                  <span className="text-right font-medium text-white">
                    {resolveContent(feature, activeAccount)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Prev / dots / next */}
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 disabled:opacity-30"
              aria-label="Previous account"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-1.5">
              {accounts.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? "w-5 bg-[#20a46a]" : "w-1.5 bg-white/15"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={activeIndex === accounts.length - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 disabled:opacity-30"
              aria-label="Next account"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

        {/* ============ DESKTOP: full table (lg and up) ============ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:border-[#20a46a]/40 hover:shadow-[0_20px_60px_rgba(32,164,106,0.14)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#20a46a]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div>
              <div>
                {/* Account headers */}
                <div className="grid grid-cols-[260px_repeat(5,1fr)] border-b border-white/10">
                  <div className=" left-0 z-20 flex items-end bg-[#0b0c0b] p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                      Features
                    </span>
                  </div>

                  {accounts.map((account, index) => (
                    <motion.div
                      key={account.name}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`group relative border-l border-white/10 px-5 pb-6 pt-7 text-center ${
                        account.featured ? "bg-yellow-400/4.5" : "bg-white/1"
                      }`}
                    >
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${
                          account.featured
                            ? "border-[#20a46a] bg-[#20a46a]/10"
                            : "border-white/10 bg-white/5"
                        }`}
                      >
                        <span
                          className={`text-lg font-bold ${
                            account.featured ? "text-[#20a46a]" : "text-white/50"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </motion.div>

                      <h3
                        className={`text-sm font-bold tracking-[0.12em] ${
                          account.featured ? "text-[#20a46a]" : "text-white"
                        }`}
                      >
                        {account.name}
                      </h3>

                      <div className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/30">
                        STP
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Table rows */}
                <div>
                  {features.map((feature, rowIndex) => (
                    <motion.div
                      key={feature.label}
                      variants={rowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: rowIndex * 0.035 }}
                      className="group grid grid-cols-[260px_repeat(5,1fr)] border-b border-white/6 last:border-b-0"
                    >
                      <div className="left-0 z-10 flex items-center bg-[#0b0c0b] px-6 py-5 transition-colors duration-300 group-hover:bg-[#111310]">
                        <span className="text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                          {feature.label}
                        </span>
                      </div>

                      {accounts.map((account) => (
                        <div
                          key={`${account.name}-${feature.label}`}
                          className={`flex min-h-16 items-center justify-center border-l border-white/6 px-4 text-center text-sm font-medium transition-all duration-300 ${
                            account.featured
                              ? "bg-yellow-400/2 text-white"
                              : "text-white/60"
                          } group-hover:bg-white/2.5 group-hover:text-white`}
                        >
                          {resolveContent(feature, account)}
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Policy notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative mt-8 overflow-hidden rounded-3xl border border-[#20a46a]/15 bg-[#20a46a]/[0.025] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#20a46a]/40 hover:shadow-[0_20px_50px_rgba(32,164,106,0.12)] sm:mt-10 sm:p-8"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#20a46a]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="flex flex-col gap-7 lg:flex-row lg:items-start">
            <div className="flex min-w-70 items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#20a46a] bg-[#20a46a]/10">
                <ShieldCheck size={20} className="text-[#20a46a]" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Leverage Policy Notes</h3>
                <p className="mt-1 text-xs leading-5 text-white/35">
                  Leverage may be adjusted based on account balance.
                </p>
              </div>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {policyNotes.map((note, index) => (
                <motion.div
                  key={note}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#20a46a] text-md font-bold text-black">
                    {index + 1}
                  </span>
                  <span className="text-md leading-5 text-white/50">{note}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center text-md leading-5 text-white/25"
        >
          *Leverage availability is subject to applicable terms, conditions, and
          account balance requirements.
        </motion.p>
      </div>
    </section>
  );
};

export default AccountComparison;
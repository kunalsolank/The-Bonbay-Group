export default function HomeSkeleton() {
  return (
    <div
      className="relative w-full min-h-screen bg-[#05040b] text-white overflow-hidden"
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <span className="sr-only">Loading DollarX platform...</span>

      {/* ============================================================ */}
      {/* 1. HERO SKELETON                                              */}
      {/* ============================================================ */}
      <section className="w-full min-h-[560px] px-4 sm:px-8 lg:px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="w-full lg:max-w-[520px] text-center lg:text-left">
          <div className="skeleton-shimmer h-4 w-32 rounded mb-5 mx-auto lg:mx-0" />

          <div className="space-y-3 mb-6">
            <div className="skeleton-shimmer h-10 sm:h-12 w-full rounded-lg" />
            <div className="skeleton-shimmer h-10 sm:h-12 w-[85%] mx-auto lg:mx-0 rounded-lg" />
          </div>

          <div className="space-y-2.5 mb-8">
            <div className="skeleton-shimmer h-4 w-full rounded" />
            <div className="skeleton-shimmer h-4 w-[90%] mx-auto lg:mx-0 rounded" />
            <div className="skeleton-shimmer h-4 w-[60%] mx-auto lg:mx-0 rounded" />
          </div>

          <div className="skeleton-shimmer h-12 w-40 rounded-lg mx-auto lg:mx-0" />
        </div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <div className="w-full lg:max-w-[440px]">
          <div className="skeleton-shimmer w-full h-64 sm:h-80 lg:h-96 rounded-2xl" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. FEATURES GRID SKELETON                                     */}
      {/* ============================================================ */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="skeleton-shimmer h-4 w-28 rounded mb-3" />
          <div className="skeleton-shimmer h-8 w-72 max-w-full rounded-lg" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 p-6 min-h-[200px]"
            >
              <div className="skeleton-shimmer h-10 w-10 rounded-lg mb-5" />
              <div className="skeleton-shimmer h-5 w-3/4 rounded mb-3" />
              <div className="space-y-2">
                <div className="skeleton-shimmer h-3.5 w-full rounded" />
                <div className="skeleton-shimmer h-3.5 w-5/6 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TAB / CORE FEATURES SKELETON                               */}
      {/* ============================================================ */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="skeleton-shimmer h-4 w-24 rounded mx-auto mb-3" />
          <div className="skeleton-shimmer h-8 w-80 max-w-full rounded-lg mx-auto" />
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton-shimmer h-10 w-28 rounded-lg" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-8 flex flex-col justify-center">
            <div className="skeleton-shimmer h-4 w-20 rounded mb-4" />
            <div className="skeleton-shimmer h-8 w-4/5 rounded-lg mb-4" />
            <div className="space-y-2.5">
              <div className="skeleton-shimmer h-4 w-full rounded" />
              <div className="skeleton-shimmer h-4 w-5/6 rounded" />
            </div>
          </div>
          <div className="p-6 flex items-center justify-center">
            <div className="skeleton-shimmer w-full h-64 rounded-xl" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PRICING SKELETON                                           */}
      {/* ============================================================ */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="skeleton-shimmer h-8 w-80 max-w-full rounded-lg mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="rounded-xl border border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="skeleton-shimmer h-5 w-24 rounded mb-4" />
                <div className="skeleton-shimmer h-8 w-32 rounded-lg mb-6" />
                <div className="space-y-3 mb-6">
                  {[1, 2, 3, 4].map((row) => (
                    <div key={row} className="skeleton-shimmer h-3.5 w-full rounded" />
                  ))}
                </div>
              </div>
              <div className="skeleton-shimmer h-10 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. INSTRUMENTS CAROUSEL SKELETON                              */}
      {/* ============================================================ */}
      <section className="w-full py-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="skeleton-shimmer h-8 w-64 rounded-lg mb-8" />
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((m) => (
            <div
              key={m}
              className="flex-shrink-0 w-48 h-28 rounded-xl border border-white/10 p-4"
            >
              <div className="skeleton-shimmer h-4 w-16 rounded mb-4" />
              <div className="skeleton-shimmer h-5 w-24 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. BENTO GRID SKELETON                                        */}
      {/* ============================================================ */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="skeleton-shimmer h-8 w-80 max-w-full rounded-lg mb-10 mx-auto" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-xl border border-white/10 p-6 min-h-[300px]">
            <div className="skeleton-shimmer h-5 w-40 rounded mb-4" />
            <div className="skeleton-shimmer h-4 w-3/4 rounded mb-6" />
            <div className="skeleton-shimmer w-full h-40 rounded-lg" />
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-white/10 p-6 min-h-[140px]">
                <div className="skeleton-shimmer h-5 w-32 rounded mb-3" />
                <div className="skeleton-shimmer h-3.5 w-5/6 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CTA SKELETON                                               */}
      {/* ============================================================ */}
      <section className="w-full py-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-xl border border-white/10 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="skeleton-shimmer h-56 w-full rounded-xl" />
          <div className="space-y-4">
            <div className="skeleton-shimmer h-4 w-32 rounded" />
            <div className="skeleton-shimmer h-10 w-full rounded-lg" />
            <div className="skeleton-shimmer h-4 w-4/5 rounded" />
            <div className="skeleton-shimmer h-11 w-44 rounded-lg" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. PARTNER LOGOS SKELETON                                     */}
      {/* ============================================================ */}
      <section className="w-full py-12 px-4 max-w-6xl mx-auto">
        <div className="skeleton-shimmer h-4 w-48 rounded mx-auto mb-8" />
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="skeleton-shimmer h-14 w-14 sm:h-16 sm:w-16 rounded-lg" />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. FAQ SKELETON                                               */}
      {/* ============================================================ */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="skeleton-shimmer h-8 w-64 rounded-lg mx-auto mb-10" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((faq) => (
            <div
              key={faq}
              className="rounded-xl border border-white/10 p-5 flex items-center justify-between"
            >
              <div className="skeleton-shimmer h-4 w-3/4 rounded" />
              <div className="skeleton-shimmer h-5 w-5 rounded-full flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
import { Skeleton } from "./skeleton";

export default function HomeSkeleton() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[#05040b] text-white"
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <span className="sr-only">Loading DollarX platform...</span>

      <section className="mx-auto flex min-h-140 w-full max-w-7xl flex-col items-center justify-between gap-10 px-4 py-20 sm:px-8 lg:flex-row lg:px-12">
        <div className="w-full text-center lg:max-w-130 lg:text-left">
          <Skeleton className="mx-auto mb-5 h-4 w-32 lg:mx-0" />
          <div className="mb-6 space-y-3">
            <Skeleton className="h-10 w-full rounded-lg sm:h-12" />
            <Skeleton className="mx-auto h-10 w-[85%] rounded-lg sm:h-12 lg:mx-0" />
          </div>
          <div className="mb-8 space-y-2.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mx-auto h-4 w-[90%] lg:mx-0" />
            <Skeleton className="mx-auto h-4 w-[60%] lg:mx-0" />
          </div>
          <Skeleton className="mx-auto h-12 w-40 rounded-lg lg:mx-0" />
        </div>
        <div className="w-full lg:max-w-110">
          <Skeleton className="h-64 w-full rounded-2xl sm:h-80 lg:h-96" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        <div className="mb-10">
          <Skeleton className="mb-3 h-4 w-28" />
          <Skeleton className="h-8 w-72 max-w-full rounded-lg" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="min-h-50 rounded-xl border border-white/10 p-6"
            >
              <Skeleton className="mb-5 h-10 w-10 rounded-lg" />
              <Skeleton className="mb-3 h-5 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 lg:px-12">
        <div className="mb-8 text-center">
          <Skeleton className="mx-auto mb-3 h-4 w-24" />
          <Skeleton className="mx-auto h-8 w-80 max-w-full rounded-lg" />
        </div>
        <div className="mb-8 flex justify-center gap-3">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton key={item} className="h-10 w-28 rounded-lg" />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-xl border border-white/10 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8">
            <Skeleton className="mb-4 h-4 w-20" />
            <Skeleton className="mb-4 h-8 w-4/5 rounded-lg" />
            <div className="space-y-2.5">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
          <div className="flex items-center justify-center p-6">
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <Skeleton className="mx-auto h-8 w-80 max-w-full rounded-lg" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="flex flex-col justify-between rounded-xl border border-white/10 p-6"
            >
              <div>
                <Skeleton className="mb-4 h-5 w-24" />
                <Skeleton className="mb-6 h-8 w-32 rounded-lg" />
                <div className="mb-6 space-y-3">
                  {[1, 2, 3, 4].map((row) => (
                    <Skeleton key={row} className="h-3.5 w-full" />
                  ))}
                </div>
              </div>
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-8 lg:px-12">
        <Skeleton className="mb-8 h-8 w-64 rounded-lg" />
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-28 w-48 shrink-0 rounded-xl border border-white/10 p-4"
            >
              <Skeleton className="mb-4 h-4 w-16" />
              <Skeleton className="h-5 w-24" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        <Skeleton className="mx-auto mb-10 h-8 w-80 max-w-full rounded-lg" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="min-h-75 rounded-xl border border-white/10 p-6 lg:col-span-7">
            <Skeleton className="mb-4 h-5 w-40" />
            <Skeleton className="mb-6 h-4 w-3/4" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:col-span-5">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="min-h-35 rounded-xl border border-white/10 p-6"
              >
                <Skeleton className="mb-3 h-5 w-32" />
                <Skeleton className="h-3.5 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 rounded-xl border border-white/10 p-8 lg:grid-cols-2">
          <Skeleton className="h-56 w-full rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full rounded-lg" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-11 w-44 rounded-lg" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <Skeleton className="mx-auto mb-8 h-4 w-48" />
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton
              key={item}
              className="h-14 w-14 rounded-lg sm:h-16 sm:w-16"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-8 lg:px-12">
        <Skeleton className="mx-auto mb-10 h-8 w-64 rounded-lg" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-white/10 p-5"
            >
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-5 w-5 shrink-0 rounded-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

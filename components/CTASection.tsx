"use client";

export default function BrandStatement() {
  return (
    <section className="relative py-28 mb-20 overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">

      {/* Soft Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] bg-[var(--color-primary)] opacity-20 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Background RT SPORTS (inside 7xl container) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h1 className="text-[120px] md:text-[180px] font-extrabold text-white/5 whitespace-nowrap">
            RT SPORTS
          </h1>
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center">

          <span className="text-sm tracking-[0.3em] uppercase text-[var(--color-primary)]">
            Performance Redefined
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
            Built For Relentless Competitors.
          </h2>

          <p className="mt-6 text-base md:text-lg text-[var(--color-muted)] leading-relaxed">
            RT Sports engineers high-performance gear designed for athletes
            who demand durability, precision, and unmatched quality.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-7 py-3 rounded-full font-medium transition">
              Shop Collection
            </button>

            <button className="border border-white/20 hover:border-[var(--color-primary)] px-7 py-3 rounded-full font-medium transition">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

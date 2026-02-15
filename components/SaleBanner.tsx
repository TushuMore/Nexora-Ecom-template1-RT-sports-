"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SaleBanner() {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-[var(--color-surface)] border border-white/10">

        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[var(--color-primary)] opacity-20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-12">

          {/* Left */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Special Sports Sale
            </h2>

            <p className="text-[var(--color-muted)] max-w-md">
              Get up to <span className="text-[var(--color-primary)] font-semibold">30% OFF</span> on selected sports equipment.
              Limited-time offer.
            </p>

            <Link
              href="/offers"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-red-500/30"
            >
              Shop Offers
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right */}
          <div className="text-right text-[var(--color-muted)] font-semibold text-xl">
            Cricket • Football • Training Gear
          </div>

        </div>
      </div>
    </section>
  );
}

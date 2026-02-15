"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-max py-30 pt-40 flex items-center bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* Tagline */}
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-surface)] text-[var(--color-muted)] text-sm border border-white/10">
            Trusted Sports Store for Every Player
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Gear Up with
            <span className="block text-[var(--color-primary)]">
              RT Sports
            </span>
          </h1>

          {/* Description */}
          <p className="text-[var(--color-muted)] text-lg max-w-xl">
            High-quality cricket, football, and multi-sport equipment built for
            performance and durability. Reliable products at the right price.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">

            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
            >
              Shop Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/15 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
            >
              Store Location
            </Link>

          </div>

          {/* Trust Highlights */}
          <div className="pt-6 text-sm text-[var(--color-muted)] space-y-1">
            <p>✔ Durable Equipment</p>
            <p>✔ Fair Pricing</p>
            <p>✔ Local & Reliable Service</p>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex justify-center">

          <div className="relative w-[350px] h-[450px] bg-[var(--color-surface)] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d"
              alt="Sports Equipment"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold">
                Premium Cricket Collection
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Bats • Balls • Shoes • Kits
              </p>
            </div>

          </div>

          <div className="absolute w-[380px] h-[380px] bg-[var(--color-primary)] opacity-20 blur-[140px] rounded-full -z-10"></div>

        </div>

      </div>
    </section>
  );
}

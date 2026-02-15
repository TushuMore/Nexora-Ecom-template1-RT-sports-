"use client";

import { ShieldCheck, Truck, BadgeCheck, IndianRupee } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Durable Quality",
    desc: "Strong and long-lasting sports equipment tested for real play.",
  },
  {
    icon: IndianRupee,
    title: "Fair Pricing",
    desc: "Best value products without unnecessary extra cost.",
  },
  {
    icon: Truck,
    title: "Fast Local Delivery",
    desc: "Quick delivery with safe and reliable packaging.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Store",
    desc: "Serving players with trust and consistency.",
  },
];

export default function WhyChoose() {
  return (
    <section className="pb-24 bg-[var(--color-bg)] text-[var(--color-text)] px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose RT Sports
          </h2>
          <p className="text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">
            We focus on quality, trust, and affordability for every player.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[var(--color-surface)] border border-white/10 rounded-2xl p-6 hover:border-[var(--color-primary)] transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-primary)]/10 mb-5">
                  <Icon className="text-[var(--color-primary)]" />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

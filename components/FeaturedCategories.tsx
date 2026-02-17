"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Cricket",
    image:
      "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
    link: "/category/cricket",
  },
  {
    name: "Football",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    link: "/category/football",
  },
  {
    name: "Training Gear",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    link: "/category/training",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="pb-24 bg-[var(--color-bg)] text-[var(--color-text)] px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Shop by Category
          </h2>
          <p className="text-[var(--color-muted)] mt-3">
            Explore equipment designed for every sport.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.link}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface)]"
            >
              <Image
              width={1000}
              height={1000}
                src={cat.image}
                alt={cat.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transition">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

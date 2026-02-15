"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pro Cricket Bat",
    category: "Cricket",
    price: 2999,
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
  },
  {
    id: 2,
    name: "Elite Football Boots",
    category: "Football",
    price: 3499,
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
  },
  {
    id: 3,
    name: "Running Performance Shoes",
    category: "Running",
    price: 2199,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Premium Kit Bag",
    category: "Accessories",
    price: 1499,
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827",
  },
  {
    id: 5,
    name: "Training Gloves",
    category: "Accessories",
    price: 999,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (selectedPrice !== "All") {
      if (selectedPrice === "under1000") {
        filtered = filtered.filter((p) => p.price < 1000);
      } else if (selectedPrice === "1000-3000") {
        filtered = filtered.filter(
          (p) => p.price >= 1000 && p.price <= 3000
        );
      } else if (selectedPrice === "above3000") {
        filtered = filtered.filter((p) => p.price > 3000);
      }
    }

    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, selectedPrice, sort]);

  return (
    <section className="bg-[var(--color-bg)] text-[var(--color-text)] py-24 pt-30">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold">All Products</h1>
            <p className="text-[var(--color-muted)] mt-3">
              Discover premium performance gear.
            </p>
          </div>

          <select
            className="mt-6 md:mt-0 bg-black/90 rounded-lg px-4 py-2 text-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Interactive Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-8">

              <div className="flex items-center gap-2 font-semibold">
                <SlidersHorizontal size={18} />
                Filters
              </div>

              {/* Category */}
              <div>
                <p className="text-sm text-gray-400 mb-3">Category</p>
                <div className="space-y-2">
                  {["All", "Cricket", "Football", "Running", "Accessories"].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition
                        ${
                          selectedCategory === cat
                            ? "bg-[var(--color-primary)] text-white"
                            : "hover:bg-white/10"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-sm text-gray-400 mb-3">Price</p>
                <div className="space-y-2">
                  {[
                    { label: "All", value: "All" },
                    { label: "Under ₹1000", value: "under1000" },
                    { label: "₹1000 - ₹3000", value: "1000-3000" },
                    { label: "Above ₹3000", value: "above3000" },
                  ].map((price) => (
                    <button
                      key={price.value}
                      onClick={() => setSelectedPrice(price.value)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition
                      ${
                        selectedPrice === price.value
                          ? "bg-[var(--color-primary)] text-white"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Equal Size Product Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-primary)] transition"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-[var(--color-primary)] font-bold mt-2">
                    ₹{product.price}
                  </p>

                  <button className="mt-4 w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] py-2 rounded-lg text-sm transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

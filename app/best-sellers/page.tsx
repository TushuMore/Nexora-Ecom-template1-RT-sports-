"use client";

import Image from "next/image";

const bestSellers = [
  {
    id: 1,
    name: "Pro Cricket Bat X",
    price: 3999,
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d",
  },
  {
    id: 2,
    name: "Elite Football Boots",
    price: 3499,
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68",
  },
  {
    id: 3,
    name: "Speed Runner Shoes",
    price: 2799,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Premium Sports Bag",
    price: 1599,
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827",
  },
  {
    id: 5,
    name: "Pro Training Gloves",
    price: 1299,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

export default function BestSellerPage() {
  return (
    <section className="bg-[var(--color-bg)] text-[var(--color-text)] py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold">
            Best Sellers
          </h1>
          <p className="text-[var(--color-muted)] mt-6 max-w-2xl mx-auto">
            The most loved performance gear chosen by our customers.
          </p>
        </div>

        {/* Top 3 Highlight Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {bestSellers.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className="relative group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[var(--color-primary)] transition duration-300"
            >
              {/* Rank Badge */}
              <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                #{index + 1}
              </div>

              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {product.name}
                </h3>
                <p className="text-[var(--color-primary)] font-bold mt-2">
                  ₹{product.price}
                </p>

                <button className="mt-6 w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] py-3 rounded-xl transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Best Sellers */}
        <div>
          <h2 className="text-3xl font-semibold mb-12 text-center">
            More Top Picks
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.slice(3).map((product, index) => (
              <div
                key={product.id}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-primary)] transition"
              >
                <div className="relative h-64 w-full overflow-hidden">
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

                  <button className="mt-4 w-full bg-white/10 hover:bg-[var(--color-primary)] py-2 rounded-lg transition">
                    View Product
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


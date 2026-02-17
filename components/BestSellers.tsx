"use client";

import { ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const products = [
  {
    name: "SS Cricket Bat",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff",
  },
  {
    name: "Football Training Ball",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
  },
  {
    name: "Running Shoes",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Cricket Kit Bag",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827",
  },
  {
    name: "Training Gloves",
    price: "₹599",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
];

export default function BestSellers() {
  return (
    <section className="pb-24 text-[var(--color-text)] px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Best Sellers
            </h2>
            <p className="text-[var(--color-muted)] mt-2">
              Most popular sports gear this season.
            </p>
          </div>

          <button className="text-[var(--color-primary)] font-medium hover:underline">
            View All
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-[var(--color-bg)] rounded-2xl border border-white/10 overflow-hidden hover:border-[var(--color-primary)] transition duration-300">

                <div className="overflow-hidden">
                  <Image
                  width={1000}
                  height={1000}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-semibold">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-[var(--color-primary)] font-bold">
                      {product.price}
                    </span>

                    <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] p-2 rounded-lg transition">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ✅ Separate image sets */
const column1 = [
  "https://i.pinimg.com/736x/e4/ec/8a/e4ec8a567726b4260c47628ba4a274f5.jpg",
  "https://i.pinimg.com/736x/14/15/30/14153054fd859bb6553f41388e5fede0.jpg",
  "https://i.pinimg.com/736x/3c/e4/fc/3ce4fc0a6367e563a4bf018e6f78f1c3.jpg",
];

const column2 = [
  "https://i.pinimg.com/736x/d7/cc/53/d7cc5301e903e998e583005655dd43f1.jpg",
  "https://i.pinimg.com/736x/17/31/65/173165b0af8cb71b4c75806eca1b801e.jpg",
  "https://i.pinimg.com/736x/3f/fe/4f/3ffe4f8ffa7cb9fc728c349510fb0614.jpg",
];

const column3 = [
  "https://i.pinimg.com/736x/3c/e4/fc/3ce4fc0a6367e563a4bf018e6f78f1c3.jpg",
  "https://i.pinimg.com/736x/e4/ec/8a/e4ec8a567726b4260c47628ba4a274f5.jpg",
  "https://i.pinimg.com/736x/d7/cc/53/d7cc5301e903e998e583005655dd43f1.jpg",
];

function ScrollingColumn({
  images,
  reverse = false,
  duration = 25,
}: {
  images: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const loopImages = [...images, ...images]; // seamless loop

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="space-y-8"
      >
        {loopImages.map((src, i) => (
          <Image
            key={`${src}-${i}`}
            src={src}
            alt="Customer"
            width={1000}
            height={1000}
            className="w-full h-[380px] object-cover rounded-3xl"
            priority={i < 2}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function HappyCustomers() {
  return (
    <section className="relative pb-32 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Happy Customers
          </h2>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-10 h-[650px] overflow-hidden">

          {/* Top Fade */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--color-bg)] to-transparent z-10" />

          {/* Bottom Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10" />

          <ScrollingColumn images={column1} duration={22} />
          <ScrollingColumn images={column2} duration={30} reverse />

          <div className="hidden md:block">
            <ScrollingColumn images={column3} duration={26} />
          </div>

        </div>
      </div>
    </section>
  );
}

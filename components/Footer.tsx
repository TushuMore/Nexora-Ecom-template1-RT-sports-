"use client";

import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-5 gap-12 border-b border-white/10 pb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-wider">
              RT SPORTS
            </h2>
            <p className="mt-4 text-gray-400 max-w-sm">
              Performance-driven sports gear crafted for athletes who
              demand precision, durability, and excellence.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <Link href="#"><Facebook size={20} /></Link>
              <Link href="#"><Instagram size={20} /></Link>
              <Link href="#"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Shop</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">Cricket</Link></li>
              <li><Link href="#">Football</Link></li>
              <li><Link href="#">Running</Link></li>
              <li><Link href="#">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#">Shipping Policy</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mt-2">
            Get updates about new products and exclusive offers.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <div className="flex items-center bg-white/10 rounded-full px-4 w-full">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none px-3 py-3 w-full text-sm"
              />
            </div>

            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-8 py-3 rounded-full font-medium transition">
              Subscribe
            </button>
          </div>
        </div> */}

        {/* Bottom Strip */}
        <div className=" pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RT Sports. All rights reserved.</p>
          <p>Designed for Champions | Nexoras Product.</p>
        </div>

      </div>
    </footer>
  );
}

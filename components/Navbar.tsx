"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg)] shadow-lg py-3"
          : "bg-white/5 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[var(--color-text)]">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-[var(--color-primary)]">RT</span>Sports
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium">

          <Link
            href="/products"
            className="hover:text-[var(--color-primary)] transition"
          >
            Shop
          </Link>

          {/* Categories Dropdown */}
          <div className="relative group">

            <button className="flex items-center gap-1 hover:text-[var(--color-primary)] transition">
              Categories
              <ChevronDown size={16} className="transition group-hover:rotate-180" />
            </button>

            {/* Invisible hover bridge (fixes closing issue) */}
            <div className="absolute top-full left-0 w-full h-6"></div>

            <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-[var(--color-surface)] border border-white/10 rounded-xl shadow-2xl py-3 backdrop-blur-md">

              <Link
                href="/category/cricket"
                className="block px-4 py-2 hover:bg-white/5"
              >
                Cricket
              </Link>

              <Link
                href="/category/football"
                className="block px-4 py-2 hover:bg-white/5"
              >
                Football
              </Link>

              <Link
                href="/category/fitness"
                className="block px-4 py-2 hover:bg-white/5"
              >
                Fitness
              </Link>

              <Link
                href="/category/accessories"
                className="block px-4 py-2 hover:bg-white/5"
              >
                Accessories
              </Link>

            </div>
          </div>

          <Link
            href="/best-sellers"
            className="hover:text-[var(--color-primary)] transition"
          >
            Best Sellers
          </Link>

          <Link
            href="/contact"
            className="hover:text-[var(--color-primary)] transition"
          >
            Contact
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-[var(--color-surface)] rounded-full px-4 py-2 w-72 border border-white/10">
          <Search size={18} className="text-[var(--color-muted)]" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none ml-2 w-full text-sm placeholder:text-[var(--color-muted)]"
          />
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center gap-6">

          <Link
            href="/wishlist"
            className="hover:text-[var(--color-primary)] transition"
          >
            <Heart size={22} />
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-[var(--color-primary)] transition"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-[var(--color-primary)] text-white text-xs rounded-full px-1.5">
              2
            </span>
          </Link>

          {/* Account Dropdown */}
          <div className="relative group">
            <User size={22} className="cursor-pointer" />

            <div className="absolute right-0 mt-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-[var(--color-surface)] border border-white/10 shadow-xl rounded-xl w-40 p-3 backdrop-blur-md">
              <Link href="/profile" className="block py-2 hover:text-[var(--color-primary)]">
                Profile
              </Link>
              <Link href="/orders" className="block py-2 hover:text-[var(--color-primary)]">
                Orders
              </Link>
              <Link href="/login" className="block py-2 hover:text-[var(--color-primary)]">
                Logout
              </Link>
            </div>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--color-bg)] border-t border-white/10 px-6 py-6 space-y-4 text-[var(--color-text)]">
          <Link href="/products" className="block">
            Shop
          </Link>
          <Link href="/category/cricket" className="block">
            Cricket
          </Link>
          <Link href="/category/football" className="block">
            Football
          </Link>
          <Link href="/category/fitness" className="block">
            Fitness
          </Link>
          <Link href="/best-sellers" className="block">
            Best Sellers
          </Link>
          <Link href="/cart" className="block">
            Cart
          </Link>
          <Link href="/profile" className="block">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
}

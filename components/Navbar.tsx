"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, User, Menu, X, Search } from "lucide-react";

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
      className={`fixed w-full z-50 transition-all duration-300 text-white ${
        isScrolled
          ? "bg-bg shadow-md py-3"
          : "bg-white/5 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-primary">RT</span>Sports
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          

          <Link href="/products" className="hover:text-blue-600 font-medium">
            Products
          </Link>

          <Link href="/products" className="hover:text-blue-600 font-medium">
            Deals
          </Link>

          <Link href="/new-arrivals" className="hover:text-blue-600 font-medium">
            New Arrivals
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-4 py-2 w-80">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/wishlist" className="relative">
            <Heart size={22} />
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              2
            </span>
          </Link>

          <div className="relative group">
            <User size={22} className="cursor-pointer" />
            <div className="absolute right-0 mt-3 hidden group-hover:block bg-white shadow-lg rounded-xl w-40 p-3">
              <Link href="/profile" className="block py-2 hover:text-blue-600">
                Profile
              </Link>
              <Link href="/orders" className="block py-2 hover:text-blue-600">
                Orders
              </Link>
              <Link href="/login" className="block py-2 hover:text-blue-600">
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link href="/category/men">Men</Link>
          <Link href="/category/women">Women</Link>
          <Link href="/category/electronics">Electronics</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/profile">Profile</Link>
        </div>
      )}
    </nav>
  );
}

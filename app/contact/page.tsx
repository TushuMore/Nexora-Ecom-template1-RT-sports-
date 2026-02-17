"use client";

import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative bg-[var(--color-bg)] text-[var(--color-text)] py-24 pt-40 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[160px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[160px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Let’s <span className="text-[var(--color-primary)]">Connect</span>
            </h1>

            <p className="text-[var(--color-muted)] mt-6 text-lg max-w-md">
              Have a question about our performance gear?
              Need support? Or just want to say hello?
              We’re ready.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Mail className="text-[var(--color-primary)]" size={20} />
                support@rtsports.com
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Phone className="text-[var(--color-primary)]" size={20} />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                <MapPin className="text-[var(--color-primary)]" size={20} />
                Mumbai, India
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-16">
              <p className="text-sm text-gray-400 mb-6 uppercase tracking-widest">
                Follow RT Sports
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="#"
                  className="group flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:border-[var(--color-primary)] transition"
                >
                  <Instagram className="group-hover:text-[var(--color-primary)] transition" size={18} />
                  <span className="text-sm">Instagram</span>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:border-[var(--color-primary)] transition"
                >
                  <Facebook className="group-hover:text-[var(--color-primary)] transition" size={18} />
                  <span className="text-sm">Facebook</span>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:border-[var(--color-primary)] transition"
                >
                  <Twitter className="group-hover:text-[var(--color-primary)] transition" size={18} />
                  <span className="text-sm">Twitter</span>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:border-[var(--color-primary)] transition"
                >
                  <Youtube className="group-hover:text-[var(--color-primary)] transition" size={18} />
                  <span className="text-sm">YouTube</span>
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">

            <h2 className="text-3xl font-semibold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 focus:border-[var(--color-primary)] outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 focus:border-[var(--color-primary)] outline-none transition"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 focus:border-[var(--color-primary)] outline-none transition"
                />
              </div>

              {/* WhatsApp Checkbox */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <input
                  type="checkbox"
                  id="whatsapp"
                  className="accent-[var(--color-primary)] w-5 h-5"
                />
                <label
                  htmlFor="whatsapp"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  This number is available on WhatsApp
                </label>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm mb-2 text-gray-400">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-4 focus:border-[var(--color-primary)] outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] py-4 rounded-xl font-semibold transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { trackCTAClick, trackInitiateCheckout } from "@/lib/analytics";

const navLinks = [
  { title: "Updates", href: "/updates" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
  { title: "Pricing", href: "/pricing" },
];

const navMobileLinks = [
  { title: "Updates", href: "/updates" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact Us", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => isOpen && setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleGetStartedClick = (location) => {
    const targetUrl = `${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}/`;
    trackCTAClick("Get Started", location, targetUrl);
    trackInitiateCheckout({
      planKey: "header_cta",
      planName: "Get Started Header CTA",
      amount: 0,
      currency: "INR",
    });
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-5 sm:px-6 rounded-2xl backdrop-blur-lg bg-white/90 border border-gray-200/80 shadow-md shadow-gray-200/40 transition-all duration-300">
      <div className="flex items-center justify-between py-2.5 sm:py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="size-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <span className="text-base font-black tracking-tight">F</span>
            </div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tight">
              FoodSnap<span className="text-emerald-600">.in</span>
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
          {navLinks?.map((link, i) => (
            <motion.a
              key={i}
              href={`${link?.href}`}
              onClick={() => trackCTAClick(link?.title, "Header Nav", link?.href)}
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-950 hover:bg-gray-100/80 transition-all"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i }}
            >
              {link?.title}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href={`${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}/`}
            target="_blank"
            onClick={() => handleGetStartedClick("Header Desktop")}
            className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get Started
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden text-gray-700 hover:text-gray-900 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 pt-1 space-y-2 border-t border-gray-200"
          >
            {navMobileLinks?.map((link, i) => (
              <a
                key={i}
                href={`${link?.href}`}
                className="block text-gray-800 py-2 border-b border-gray-100 text-sm font-medium"
                onClick={() => {
                  trackCTAClick(link.title, "Header Mobile Nav", link.href);
                  setIsOpen(false);
                }}
              >
                {link.title}
              </a>
            ))}
            <a
              href={`${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}/`}
              target="_blank"
              onClick={() => {
                handleGetStartedClick("Header Mobile Drawer");
                setIsOpen(false);
              }}
              className="block w-full text-center mt-2 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-semibold transition"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

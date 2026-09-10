"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";
import { trackCTAClick, trackLead } from "@/lib/analytics";

const productLinks = [
  { title: "Pricing Plans", href: "/pricing" },
  { title: "Image Gallery", href: "#gallery" },
  { title: "Zomato Approved", href: "#pricing" },
  { title: "Image Licensing", href: "/license" },
  { title: "Acquire Image Rights", href: "/acquire-image-rights" },
];

const supportLinks = [
  { title: "Contact Us", href: "/contact" },
  { title: "FAQs", href: "/faqs" },
  { title: "Report an Issue", href: "/report-issue" },
  { title: "Platform Updates", href: "/updates" },
  { title: "About Us", href: "/about" },
];

const legalLinks = [
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Return Policy", href: "/return-policy" },
  { title: "Refund Policy", href: "/refund-policy" },
  { title: "Shipping Policy", href: "/shipping" },
  { title: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  const handleEmailClick = () => {
    trackLead({
      type: "footer_email_inquiry",
      channel: "email",
      label: "Footer Support Email",
      email: "support@foodsnap.in",
    });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-white via-gray-50/50 to-gray-100/70 border-t border-gray-200/80 pt-16 pb-12 px-6 md:px-12 text-gray-600 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200/70">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="text-2xl font-black text-gray-900 tracking-tight">
                FoodSnap<span className="text-emerald-500">.in</span>
              </div>
            </Link>

            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Instant Swiggy &amp; Zomato pre-approved, high-resolution food images designed to elevate your restaurant listings and boost online orders.
            </p>

            <div className="pt-2">
              <a
                href="mailto:support@foodsnap.in"
                onClick={handleEmailClick}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2 rounded-xl border border-emerald-200/60 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>support@foodsnap.in</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Platform Compliant
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                Instant Access
              </span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Product &amp; Plans
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    onClick={() => trackCTAClick(link.title, "Footer Products", link.href)}
                    className="hover:text-emerald-700 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Support &amp; Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    onClick={() => trackCTAClick(link.title, "Footer Support", link.href)}
                    className="hover:text-emerald-700 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Legal Policies
            </h4>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    onClick={() => trackCTAClick(link.title, "Footer Legal", link.href)}
                    className="hover:text-emerald-700 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="pl-0 sm:pl-2">
            &copy; {new Date().getFullYear()} FoodSnap.in. All rights reserved.
          </p>

          <p className="text-gray-500 text-center sm:text-right">
            Crafted for Restaurants &amp; Cloud Kitchens across India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { PackageSearch, ArrowRight } from "lucide-react";

export default function PricingEmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-24 text-gray-500"
    >
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6">
        <PackageSearch className="w-10 h-10 opacity-80" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        No Active Plans Found
      </h3>
      <p className="text-sm text-gray-600 max-w-sm mb-6 text-center">
        Explore our latest plans and get instant access to high-quality,
        Zomato &amp; Swiggy-approved food images.
      </p>
      <motion.a
        href="/pricing"
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-md"
      >
        <span>Refresh Plans</span>
        <ArrowRight className="w-4 h-4" />
      </motion.a>
    </motion.div>
  );
}

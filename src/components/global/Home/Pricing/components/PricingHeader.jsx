"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PricingHeader() {
  return (
    <div className="text-center mx-auto mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-extrabold tracking-tight mb-3 text-gray-900"
      >
        Choose Your <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Perfect Plan</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
      >
        High-converting culinary imagery and food assets built to boost your online orders on Zomato, Swiggy, and direct menus.
      </motion.p>
    </div>
  );
}

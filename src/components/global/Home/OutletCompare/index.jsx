"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const outletComparisons = [
  {
    id: 1,
    before: {
      image: "/assets/compare/outlet_compare_7.webp",
      desc: "Dull and flat images that reduce appeal and conversions.",
    },
    after: {
      image: "/assets/compare/outlet_compare_6.webp",
      desc: "Bright, appetizing shots that instantly catch attention.",
    },
  },
  {
    id: 2,
    before: {
      image: "/assets/compare/outlet_compare_5.webp",
      desc: "Low-quality visuals that fail to attract hungry customers.",
    },
    after: {
      image: "/assets/compare/outlet_compare_2.webp",
      desc: "Professional-grade photos that drive real results.",
    },
  },
];

export default function OutletCompare() {
  return (
    <section className="w-full px-4 py-16">
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Zomato Outlet Visual <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Comparison</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Before vs After: See how our professionally curated images instantly
          upgrade your outlet’s appeal.
        </p>
      </motion.div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {outletComparisons.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          >
            {/* Before Image */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden border border-red-200 shadow-sm bg-white"
            >
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-md z-10 font-bold shadow-sm uppercase tracking-wider">
                BEFORE
              </span>
              <Image
                src={item.before.image}
                alt="Before"
                width={500}
                height={600}
                className="w-full h-auto object-cover filter blur-[0.6px] grayscale brightness-75"
              />

              <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  {item.before.desc}
                </p>
              </div>
            </motion.div>

            {/* After Image */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden border border-emerald-300 shadow-md ring-1 ring-emerald-400/30 bg-white"
            >
              <span className="absolute top-3 right-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs px-3 py-1 rounded-md z-10 font-bold shadow-sm uppercase tracking-wider">
                AFTER
              </span>
              <Image
                src={item.after.image}
                alt="After"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-emerald-50/40 border-t border-emerald-100">
                <p className="text-sm font-medium text-emerald-950">
                  {item.after.desc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

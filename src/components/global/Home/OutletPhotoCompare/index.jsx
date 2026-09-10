"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";

const imageSlides = [
  {
    src: "/assets/compare/BEFORE1.webp",
    alt: "Before and After Comparison 1",
    caption: "❌ Before → ✅ After: See the clarity difference side by side.",
  },
  {
    src: "/assets/compare/BEFORE2.webp",
    alt: "Before and After Comparison 2",
    caption: "Better lighting, appetizing colors — instant visual upgrade.",
  },
  {
    src: "/assets/compare/BEFORE3.webp",
    alt: "Before and After Comparison 3",
    caption: "📈 More trust. More clicks. Proven higher orders.",
  },
];

export default function OutletComparisonSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 text-center">
      {/* Title and Description */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          See the Impact of{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Stunning Food Photos
          </span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Real Zomato &amp; Swiggy listings transformed with professional imagery — proven to boost click-through rates and orders.
        </p>
      </motion.div>

      {/* Mobile Carousel */}
      <motion.div
        className="block md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {imageSlides.map((slide, index) => (
              <CarouselItem key={index} className="min-w-full px-2">
                <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-gray-800 max-w-xl mx-auto">
                  {slide.caption}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>

      {/* Desktop Grid */}
      <motion.div
        className="hidden md:flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {imageSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full md:w-[31%] flex flex-col items-center"
          >
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg bg-white shadow-sm transition-all duration-300">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={500}
                height={350}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <p className="mt-4 text-sm md:text-base font-semibold text-gray-800 max-w-sm mx-auto">
              {slide.caption}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

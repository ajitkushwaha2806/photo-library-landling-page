"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchBar from "../image/search-bar";
import { trackViewContent, trackCTAClick } from "@/lib/analytics";

const popularTags = [
  "Biryani",
  "Burger",
  "Paneer Tikka",
  "Dosa",
  "Pizza",
  "Momos",
  "Cakes",
];

const IMAGES = [
  {
    id: 1,
    src: "/assets/gallery/chocolate_praline_cake.webp",
    alt: "Chocolate Praline Cake",
  },
  {
    id: 2,
    src: "/assets/gallery/coconut_rava_paneer_dosa.webp",
    alt: "Coconut Rava Paneer Dosa",
  },
  {
    id: 3,
    src: "/assets/gallery/idli_sambhar.webp",
    alt: "Idli Sambhar",
  },
  {
    id: 4,
    src: "/assets/gallery/rajma_chawal.webp",
    alt: "Rajma Chawal",
  },
  {
    id: 5,
    src: "/assets/gallery/mango_shake.webp",
    alt: "Mango Shake",
  },
  {
    id: 6,
    src: "/assets/gallery/classic_shroom_burger.webp",
    alt: "Classic Shroom Burger",
  },
  {
    id: 7,
    src: "/assets/gallery/paneer_tikka_roll.webp",
    alt: "Paneer Tikka Roll",
  },
  {
    id: 8,
    src: "/assets/gallery/veggie_balls_and_veg_seekh_sub.webp",
    alt: "Veggie Balls and Veg Seekh Sub",
  },
  {
    id: 9,
    src: "/assets/gallery/veg_momos_steam.webp",
    alt: "Veg Momos Steam",
  },
  {
    id: 10,
    src: "/assets/gallery/paneer_steamed_momos.webp",
    alt: "Paneer Steamed Momos",
  },
  {
    id: 11,
    src: "/assets/gallery/paneer_mexican_burrito_bowl.webp",
    alt: "Paneer Mexican Burrito Bowl",
  },
  {
    id: 12,
    src: "/assets/gallery/biscoff_lotus_cake.webp",
    alt: "Biscoff Lotus Cake",
  },
  {
    id: 13,
    src: "/assets/gallery/manchurian_gravy.webp",
    alt: "Manchurian Gravy",
  },
  {
    id: 14,
    src: "/assets/gallery/strawberry_milk_shake.webp",
    alt: "Strawberry Milk Shake",
  },
  {
    id: 15,
    src: "/assets/gallery/dahi_vada.webp",
    alt: "Dahi Vada",
  },
  {
    id: 16,
    src: "/assets/gallery/soyabean_steam_momos.webp",
    alt: "Soyabean Steam Momos",
  },
];

function MasonryItem({ img, index }) {
  const handleItemClick = () => {
    trackViewContent({
      contentName: img.alt,
      contentType: "food_gallery_item",
      contentId: String(img.id),
    });
  };

  return (
    <motion.figure
      onClick={handleItemClick}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={400}
        height={300}
        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-xl bg-black/65 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
          {img.alt}
        </div>
      </figcaption>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.figure>
  );
}

export default function MasonryGallery() {
  const handleTagClick = (tag) => {
    trackCTAClick(`Popular Tag - ${tag}`, "Gallery Search Chips", `?search=${tag}`);
    window.location.href = `${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}?search=${encodeURIComponent(tag)}`;
  };

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-12">
      <motion.div
        className="mb-10 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Search Bar Feature replacing the title */}
        <SearchBar />

        {/* Quick Search Chips */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3.5 flex-wrap text-xs text-gray-500">
          <span className="font-semibold text-gray-700 flex items-center gap-1">
            🔥 Popular:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="px-2.5 py-1 rounded-full bg-white border border-gray-200/90 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 font-medium text-gray-700 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      <div
        className={[
          "[column-fill:_balance]",
          "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
          "gap-4",
        ].join(" ")}
      >
        {IMAGES.map((img, i) => (
          <MasonryItem key={img.id} img={img} index={i} />
        ))}
      </div>
    </section>
  );
}

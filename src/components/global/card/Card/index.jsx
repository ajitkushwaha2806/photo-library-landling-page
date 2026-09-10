"use client";

import React from "react";
import { motion } from "framer-motion";
import DownloadDropdown from "../../dropdown";
const Card = ({ image, index, slug }) => {
  return (
    <motion.figure
      key={image._id || index}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-md bg-white dark:bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent group"
    >
      <div className="relative">
        <motion.img
          loading="lazy"
          width="400"
          height="300"
          src={image.image_url}
          alt={
            image.title
              ? `${image.title} - High Quality Zomato & Swiggy Approved Food Image by Foodsnap`
              : "Premium food image for restaurant menus - Zomato & Swiggy approved"
          }
          className="w-full h-56 sm:h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md" />

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
          <DownloadDropdown
            withWatermarkUrl={image.image_url}
            withoutWatermarkUrl={`${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}?search=${slug}`}
            title={image.title}
          />
        </div>
      </div>

      {image.title && (
        <figcaption className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {image.title}
        </figcaption>
      )}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          contentUrl: image.image_url,
          name: image.title || "Foodsnap Food Image",
          description:
            image.title ||
            "High quality food image for restaurant menus - Zomato & Swiggy approved",
          creator: {
            "@type": "Organization",
            name: "Foodsnap",
            url: process.env.NEXT_PUBLIC_BASE_URL || "https://foodsnap.in",
          },
          creditText:
            "Image courtesy of Foodsnap.in (curated from Zomato/Google sources)",
          copyrightNotice: "© Original rights holders / Curated by Foodsnap.in",
          license: `${process.env.NEXT_PUBLIC_BASE_URL || "https://foodsnap.in"}/license`,
          acquireLicensePage: `${process.env.NEXT_PUBLIC_BASE_URL || "https://foodsnap.in"}/acquire-image-rights`,
        })}
      </script>
    </motion.figure>
  );
};

export default Card;

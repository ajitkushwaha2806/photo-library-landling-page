"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { trackCTAClick, trackInitiateCheckout, trackViewContent } from "@/lib/analytics";

const zomatoImages = [
  "/assets/zomato-approved/zomato-approved-1.webp",
  "/assets/zomato-approved/zomato-approved-2.webp",
  "/assets/zomato-approved/zomato-approved-3.webp",
  "/assets/zomato-approved/zomato-approved-4.webp",
];

const ZomatoApproved = () => {
  const handleGetImagesClick = () => {
    const destinationUrl = `${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}/`;
    trackCTAClick("Get Images", "Zomato Approved Section", destinationUrl);
    trackInitiateCheckout({
      planKey: "zomato_approved_cta",
      planName: "Zomato Approved Section CTA",
      amount: 0,
      currency: "INR",
    });
  };

  const handleCardClick = (index, src) => {
    trackViewContent({
      contentName: `Zomato Approved Sample ${index + 1}`,
      contentType: "sample_image",
      contentId: src,
    });
  };

  return (
    <section className="relative py-12 px-3 md:py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-green-100/30 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Zomato & Swiggy <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Approved</span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every Foodsnap image meets official Zomato & Swiggy photography
          standards — crafted to make your dishes shine and attract more
          customers.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {zomatoImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleCardClick(i, src)}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="cursor-pointer py-0"
          >
            <Card className="rounded-2xl border border-gray-200/80 p-2 md:p-3 bg-white shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div className="relative overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`Zomato approved ${i + 1}`}
                  width={600}
                  height={450}
                  className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <div className="max-w-6xl mx-auto rounded-2xl border border-emerald-200/80 p-6 md:p-8 bg-gradient-to-r from-emerald-50/70 via-white to-green-50/70 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="md:w-2/3 text-gray-700 text-base leading-relaxed">
              Boost your Zomato & Swiggy listings with high-conversion,
              pre-approved food photos — professionally curated to elevate your
              brand and drive more orders.
            </p>

            <motion.a
              href={`${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}/`}
              target="_blank"
              onClick={handleGetImagesClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="flex md:w-[160px] justify-center w-full text-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md shadow-green-600/20 hover:shadow-lg hover:shadow-green-600/30 transition-all duration-200 cursor-pointer"
            >
              Get Images
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ZomatoApproved;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { GradientText } from "../GradientTextButton/GradientText";
import { Video } from "./Video";
import PricingSection from "./Pricing";
import Faqs from "./Faqs";
import Testimonials from "./Reviews";
import WhyChooseUs from "./whyChooseUs";
import OutletPhotoCompare from "./OutletPhotoCompare";
import OutletCompare from "./OutletCompare";
import MasonryGallery from "../galllery";
import ZomatoApproved from "./ZomatoApproved";
import { trackCTAClick, trackInitiateCheckout } from "@/lib/analytics";

export default function Home() {
  const handleHeroCTAClick = () => {
    const targetUrl = `${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}/`;
    trackCTAClick("Download Images", "Hero CTA", targetUrl);
    trackInitiateCheckout({
      planKey: "hero_cta",
      planName: "Download Images Hero CTA",
      amount: 0,
      currency: "INR",
    });
  };

  const handleViewPricingClick = () => {
    trackCTAClick("View Pricing", "Home Bottom Banner", "#pricing");
  };

  return (
    <div className="pb-16 w-full text-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="w-full px-4 text-center pt-28 pb-16 bg-grid flex flex-col items-center relative overflow-hidden">
        {/* Soft Ambient Glow Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-400/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[300px] h-[200px] bg-green-300/10 blur-[80px] rounded-full pointer-events-none -z-10" />

        {/* Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 sm:mb-6 inline-flex"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-emerald-200/90 bg-emerald-50/80 shadow-xs hover:border-emerald-300 hover:bg-emerald-100/70 transition-all cursor-pointer">
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-600 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-emerald-800 tracking-wide">
              Pre-Approved for Zomato &amp; Swiggy
            </span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-600 ml-0.5 shrink-0" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-[1.12] text-gray-900 max-w-4xl mx-auto"
        >
          Tired of Zomato &amp; Swiggy{" "}
          <br className="hidden sm:inline" />
          <span className="text-red-600">Rejecting</span> Your{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
            Food Photos?
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed px-2 sm:px-0"
        >
          Upload with 100% confidence. Studio-quality food photos strictly compliant with Zomato &amp; Swiggy listing guidelines — zero rejections, zero delays, no expensive photoshoots.
        </motion.p>

        {/* Hero CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex flex-col items-center justify-center w-full max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href={`${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}/`}
            target="_blank"
            onClick={handleHeroCTAClick}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl 
              bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 
              px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-white transition-all duration-300 
              shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base sm:text-lg"
          >
            <span>Download Images Now</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Video Demo Section */}
      <div className="mt-8 md:mt-12 px-4 mx-auto">
        <Video />
      </div>

      {/* Image Gallery */}
      <MasonryGallery />

      {/* Zomato Approved Section */}
      <ZomatoApproved />

      {/* Before / After Comparison */}
      <OutletPhotoCompare />
      <OutletCompare />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Pricing Section */}
      <PricingSection />

      {/* Reviews */}
      <Testimonials />

      {/* Bottom CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 px-4"
      >
        <div className="max-w-6xl mx-auto rounded-3xl border border-emerald-200 p-8 md:p-12 shadow-xl shadow-emerald-600/5 bg-gradient-to-r from-emerald-50/80 via-white to-green-50/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3 text-center md:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-3">
                Ready to upgrade your restaurant menu?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
                Get Zomato &amp; Swiggy Approved Photos Today
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Boost your listings with high-conversion, professional food photos — curated to elevate your brand and drive more orders.
              </p>
            </div>

            <Link
              href="#pricing"
              onClick={handleViewPricingClick}
              className="flex justify-center w-full md:w-auto items-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-[1.03] cursor-pointer"
            >
              Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <Faqs />
      </motion.div>
    </div>
  );
}

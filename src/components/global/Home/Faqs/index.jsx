"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Globe,
  ImagePlus,
  CalendarClock,
  XCircle,
} from "lucide-react";
import { trackFaqToggle } from "@/lib/analytics";

const faqs = [
  {
    icon: HelpCircle,
    question: "What is this photo library about?",
    answer:
      "Our photo library offers high-resolution, Zomato-approved food images crafted to meet restaurant listing standards.",
  },
  {
    icon: Sparkles,
    question: "What do I get with the ₹1999 subscription?",
    answer:
      "You get full access to Zomato-ready images, new weekly uploads, commercial rights, and one-click downloads.",
  },
  {
    icon: ShieldCheck,
    question: "Are the images Zomato-approved?",
    answer:
      "Yes. Every photo is optimized for Zomato’s strict content guidelines to ensure fast approval.",
  },
  {
    icon: Globe,
    question: "Can I use these images on Swiggy, Instagram, or my website?",
    answer:
      "Absolutely. All images are licensed for commercial use on any platform: Zomato, Swiggy, websites, or social media.",
  },
  {
    icon: ImagePlus,
    question: "Will new photos be added regularly?",
    answer: "Yes! We add fresh food visuals every week.",
  },
  {
    icon: XCircle,
    question: "Can I cancel anytime?",
    answer: "Yes. It's a simple credit based plans — no lock-ins.",
  },
  {
    icon: CalendarClock,
    question: "What if I need a specific dish that's not in the library?",
    answer:
      "You can request specific dishes and we’ll prioritize them in future uploads.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    const isNowOpen = openIndex !== i;
    setOpenIndex(isNowOpen ? i : null);
    trackFaqToggle(faqs[i].question, isNowOpen);
  };

  return (
    <section className="py-8 px-4 sm:px-8 w-full mx-auto text-gray-900">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-tight">
        📸 Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Questions</span>
      </h2>

      <div className="space-y-3.5">
        {faqs.map((faq, i) => {
          const Icon = faq.icon;
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden bg-white ${
                isOpen
                  ? "border-emerald-300 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-400/40"
                  : "border-gray-200 shadow-sm hover:border-emerald-200"
              }`}
              whileHover={{ scale: 1.005 }}
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-5 py-4 text-left font-medium text-base md:text-lg transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? "bg-emerald-50/70 text-emerald-950"
                    : "hover:bg-emerald-50/30 text-gray-800"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-1.5 rounded-lg transition-colors ${isOpen ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-700"}`}>
                    <Icon className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-emerald-600" : "text-gray-400"}`} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 text-start text-sm sm:text-base text-gray-600 leading-relaxed border-t border-emerald-100 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

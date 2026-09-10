"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rohit Sharma",
    title: "Restaurant Owner, Caffeine",
    quote:
      "Zomato pe listing ekdum classy lag rahi hai ab! Bas photos change kiye aur orders 3x badh gaye. Mazaa aa gaya!",
    img: "/assets/reviews/client_rohit.webp",
  },
  {
    name: "Anjali Mehra",
    title: "Founder, Cozy Spot Cafe",
    quote:
      "Pehle lagta tha Swiggy ka onboarding tough hoga, par inhone sab kuch smoothly handle kiya. 10/10 support!",
    img: "/assets/reviews/client_anjali.webp",
  },
  {
    name: "Karan Desai",
    title: "Owner, Spicy Kulcha Factory",
    quote:
      "Photos dekhte hi lagta hai brand premium hai. Paisa vasool hai bhai, ek week mein hi return aa gaya!",
    img: "/assets/reviews/client_karan.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Testimonials() {
  return (
    <section className="mt-20 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Khud Suno Hamare Clients Se 💬
        </h2>
        <p className="text-emerald-700 font-semibold mt-2">
          100+ Restaurants already love it 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl border border-gray-200/80 p-6 md:p-8 bg-white shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300"
          >
            <div className="flex items-center gap-1 text-emerald-500 mb-3">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
              “{t.quote}”
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={t.img}
                alt={t.name}
                width={44}
                height={44}
                className="rounded-full object-cover border-2 border-emerald-400"
              />
              <div>
                <div className="text-sm font-bold text-gray-900">
                  {t.name}
                </div>
                <div className="text-xs text-gray-500">
                  {t.title}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

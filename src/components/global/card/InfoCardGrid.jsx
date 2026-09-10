"use client";

import { motion } from "framer-motion";

export default function InfoCardGrid({ cardData = [] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto relative z-10">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
          className="bg-white border border-emerald-100 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 relative overflow-hidden transition-all duration-300"
        >
          <div className="flex p-4 md:p-8 items-start gap-4 bg-gradient-to-r from-emerald-50/50 via-white to-transparent">
            <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700 shadow-sm shrink-0">
              {card.icon}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">
                {card.description}
              </p>
            </div>
          </div>

          <div className="relative mx-4 mb-4 md:mx-8 md:mb-8 mt-1 rounded-xl border border-gray-100 bg-gray-50/50 p-5 text-sm leading-relaxed text-gray-700">
            <div className="absolute top-0 left-0 w-2 h-2 rounded-bl-xl border-l-4 border-b-4 border-emerald-500" />
            {card.content}
          </div>

          <div className="absolute bottom-[-20px] right-6 flex gap-2 opacity-20 pointer-events-none">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

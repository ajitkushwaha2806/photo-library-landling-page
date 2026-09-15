"use client";

import React from "react";
import PlanCard from "./PlanCard";
import { motion } from "framer-motion";

export default function PlansGrid({ plans = [] }) {
  return (
    <motion.div
      key="plans-grid"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch mx-auto">
        {plans.map((plan, i) => (
          <PlanCard key={plan.key || plan._id || i} plan={plan} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

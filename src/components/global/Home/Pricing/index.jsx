"use client";

import React from "react";
import PlansGrid from "./components/PlansGrid";
import PricingHeader from "./components/PricingHeader";
import PricingEmptyState from "./components/PricingEmptyState";
import { plans as defaultPlans } from "./constants";

export { plans, PLAN_TIER_CONFIGS } from "./constants";

export default function PricingSection({ plans = defaultPlans }) {
  const displayPlans = plans && plans.length > 0 ? plans : defaultPlans;

  return (
    <section id="pricing" className="relative px-4 sm:px-6 py-8 md:py-16 bg-transparent text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <PricingHeader />

        {displayPlans.length === 0 ? (
          <PricingEmptyState />
        ) : (
          <PlansGrid plans={displayPlans} />
        )}
      </div>
    </section>
  );
}

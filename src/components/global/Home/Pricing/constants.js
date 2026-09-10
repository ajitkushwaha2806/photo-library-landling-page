import { Sparkles, Crown } from "lucide-react";

export const plans = [
  {
    key: "basic",
    name: "Basic Plan",
    price: "₹499",
    description: "Download 25 high-quality food images.",
    features: [
      "25 image downloads",
      "Zomato & Swiggy approved photos",
      "Access to trending photo packs",
      "High-quality images",
    ],
    button: "Get Basic Plan",
    link: "/pricing?plan=basic",
    highlight: false,
    duration: 30,
    amount: 499,
    discountedAmount: 499,
    discountPercentage: 0,
    taxPercentage: 18,
    downloads: 25,
  },
  {
    key: "pro",
    name: "Pro Plan",
    price: "₹999",
    description: "Download 80 high-quality food images.",
    features: [
      "80 image downloads",
      "Access to entire photo library",
      "Zomato & Swiggy approved photos",
      "High-quality food images",
      "Priority photo requests",
    ],
    button: "Go Pro",
    link: "/pricing?plan=pro",
    highlight: false,
    duration: 30,
    amount: 999,
    discountedAmount: 999,
    discountPercentage: 0,
    taxPercentage: 18,
    downloads: 80,
  },
  {
    key: "premium",
    name: "Premium Plan",
    price: "₹1,999",
    description: "Download unlimited high-quality food images.",
    features: [
      "Unlimited image downloads",
      "Full access to photo library",
      "Zomato & Swiggy approved photos",
      "Priority photo request handling",
      "Exclusive new photo collections",
      "High-quality images",
    ],
    button: "Go Premium",
    link: "/pricing?plan=premium",
    highlight: true,
    duration: 30,
    amount: 1999,
    discountedAmount: 1999,
    discountPercentage: 0,
    taxPercentage: 18,
    downloads: "unlimited",
  },
];

export const PLAN_TIER_CONFIGS = {
  basic: {
    icon: Sparkles,
    perImage: "₹19.96 / image",
    tagline: "Great for expanding multi-cuisine restaurants",
    badge: null,
    badgeClass: "",
    accentColor: "border-gray-200 hover:border-emerald-300",
    buttonClass:
      "border border-emerald-600 text-emerald-700 bg-emerald-50/60 hover:bg-emerald-600 hover:text-white font-semibold",
    isFeatured: false,
  },
  pro: {
    icon: Sparkles,
    perImage: "₹12.49 / image",
    tagline: "Best value for growing restaurants & food chains",
    badge: null,
    badgeClass: "",
    accentColor: "border-gray-200 hover:border-emerald-300",
    buttonClass:
      "border border-emerald-600 text-emerald-700 bg-emerald-50/60 hover:bg-emerald-600 hover:text-white font-semibold",
    isFeatured: false,
  },
  premium: {
    icon: Crown,
    perImage: "Unlimited Downloads",
    tagline: "Unlimited access for agencies & restaurant groups",
    badge: "⭐ Unlimited Access",
    badgeClass:
      "bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold shadow-md shadow-emerald-600/30",
    accentColor:
      "border-emerald-400 shadow-xl shadow-emerald-600/10 ring-2 ring-emerald-400/40 bg-gradient-to-b from-emerald-50/70 via-white to-white",
    buttonClass:
      "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg shadow-emerald-600/25 font-semibold",
    isFeatured: true,
  },
};

export const DEFAULT_PLAN_CONFIG = {
  icon: Sparkles,
  perImage: null,
  tagline: "High quality food photography",
  badge: null,
  badgeClass: "",
  accentColor: "border-gray-200 hover:border-emerald-300",
  buttonClass:
    "border border-emerald-600 text-emerald-700 bg-emerald-50/60 hover:bg-emerald-600 hover:text-white font-semibold",
  isFeatured: false,
};

"use client";

import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { trackSearch } from "@/lib/analytics";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoadingSearch(true);

    // Track search query on PostHog, Meta Pixel & GA
    trackSearch(query.trim());

    const searchUrl = `${process.env.NEXT_PUBLIC_USER_APP_URL || "https://plus.foodsnap.in"}?search=${encodeURIComponent(
      query.trim()
    )}`;
    window.location.href = searchUrl;
  };

  return (
    <div className="w-full max-w-full relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white border border-gray-200/90 rounded-2xl p-1.5 pl-4 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 focus-within:ring-3 focus-within:ring-emerald-500/15 focus-within:border-emerald-500"
      >
        <Search className="text-emerald-600 mr-2.5 shrink-0" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 10,000+ dishes, e.g. Biryani, Burger, Paneer..."
          className="w-full bg-transparent text-sm sm:text-base focus:outline-none text-gray-800 placeholder-gray-400 font-medium"
        />

        <button
          type="submit"
          disabled={loadingSearch}
          className="ml-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-5 sm:px-6 py-2.5 text-sm font-bold rounded-xl shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer shrink-0"
        >
          {loadingSearch ? (
            <Loader2 className="animate-spin h-4 w-4 mx-auto" />
          ) : (
            "Search"
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

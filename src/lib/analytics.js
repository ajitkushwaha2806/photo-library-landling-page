"use client";

import posthog from "posthog-js";

/**
 * Universal Analytics & Event Tracking Helper
 * Integrates PostHog, Meta Pixel (Facebook Pixel), and Google Analytics
 */

// Helper to check if window is available
const isBrowser = () => typeof window !== "undefined";

/**
 * Track a custom event across all configured analytics providers
 * @param {string} eventName - Name of the event
 * @param {object} properties - Additional event properties/payload
 */
export const trackEvent = (eventName, properties = {}) => {
  if (!isBrowser()) return;

  try {
    // 1. PostHog Tracking
    if (posthog && typeof posthog.capture === "function") {
      posthog.capture(eventName, {
        timestamp: new Date().toISOString(),
        ...properties,
      });
    }

    // 2. Meta Pixel (Facebook Pixel) Custom Event Tracking
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, properties);
    }

    // 3. Google Analytics / gtag Tracking
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, properties);
    }
  } catch (err) {
    console.warn("Analytics trackEvent error:", err);
  }
};

/**
 * Track PageView across all platforms
 * @param {string} url - Current URL or path
 * @param {string} title - Page title
 */
export const trackPageView = (url, title) => {
  if (!isBrowser()) return;

  const currentUrl = url || (window.location.pathname + window.location.search);
  const pageTitle = title || document.title;

  try {
    // PostHog
    if (posthog && typeof posthog.capture === "function") {
      posthog.capture("$pageview", {
        $current_url: window.location.origin + currentUrl,
        title: pageTitle,
      });
    }

    // Meta Pixel Standard PageView
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    // Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_location: window.location.href,
        page_path: currentUrl,
        page_title: pageTitle,
      });
    }
  } catch (err) {
    console.warn("Analytics trackPageView error:", err);
  }
};

/**
 * Track InitiateCheckout / Plan Selection
 * Triggers Meta Pixel standard 'InitiateCheckout' event & PostHog event
 * @param {object} plan - Plan details { planKey, planName, amount, downloads, currency }
 */
export const trackInitiateCheckout = (plan = {}) => {
  if (!isBrowser()) return;

  const {
    planKey = "unknown",
    planName = "Plan",
    amount = 0,
    downloads = 0,
    currency = "INR",
  } = plan;

  const properties = {
    plan_key: planKey,
    plan_name: planName,
    value: amount,
    currency: currency,
    downloads_count: downloads,
    content_name: planName,
    content_category: "Subscription Plan",
    num_items: downloads,
  };

  try {
    // Meta Pixel Standard Event
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout", {
        content_name: planName,
        content_category: "Subscription Plan",
        value: amount,
        currency: currency,
        num_items: downloads,
      });
    }

    // PostHog
    if (posthog && typeof posthog.capture === "function") {
      posthog.capture("initiate_checkout", properties);
      posthog.capture("plan_selected", properties);
    }

    // Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("event", "begin_checkout", {
        currency: currency,
        value: amount,
        items: [
          {
            item_id: planKey,
            item_name: planName,
            price: amount,
            quantity: 1,
          },
        ],
      });
    }
  } catch (err) {
    console.warn("Analytics trackInitiateCheckout error:", err);
  }
};

/**
 * Track Lead / Contact initiation
 * Triggers Meta Pixel standard 'Lead' & 'Contact' event
 * @param {object} leadData - { type, channel, label, email, destination }
 */
export const trackLead = (leadData = {}) => {
  if (!isBrowser()) return;

  const {
    type = "general",
    channel = "email",
    label = "Contact Link Clicked",
    email = "",
    destination = "",
  } = leadData;

  const properties = {
    lead_type: type,
    contact_channel: channel,
    contact_label: label,
    email: email,
    destination: destination,
  };

  try {
    // Meta Pixel Lead Standard Event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: label,
        content_category: type,
      });
      window.fbq("track", "Contact");
    }

    // PostHog
    if (posthog && typeof posthog.capture === "function") {
      posthog.capture("lead_generated", properties);
      posthog.capture("contact_click", properties);
    }

    // Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", properties);
    }
  } catch (err) {
    console.warn("Analytics trackLead error:", err);
  }
};

/**
 * Track Search Query
 * Triggers Meta Pixel standard 'Search' event
 * @param {string} query - Search keyword
 */
export const trackSearch = (query) => {
  if (!isBrowser() || !query) return;

  try {
    // Meta Pixel Standard Search Event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Search", {
        search_string: query,
      });
    }

    // PostHog
    if (posthog && typeof posthog.capture === "function") {
      posthog.capture("search_performed", {
        search_query: query,
      });
    }

    // Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("event", "search", {
        search_term: query,
      });
    }
  } catch (err) {
    console.warn("Analytics trackSearch error:", err);
  }
};

/**
 * Track ViewContent
 * Triggers Meta Pixel standard 'ViewContent' event
 * @param {object} contentData - { contentName, contentType, contentId }
 */
export const trackViewContent = (contentData = {}) => {
  if (!isBrowser()) return;

  const {
    contentName = "Food Image",
    contentType = "image",
    contentId = "",
  } = contentData;

  try {
    if (typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: contentName,
        content_type: contentType,
        content_ids: contentId ? [contentId] : [],
      });
    }

    if (posthog && typeof posthog.capture === "function") {
      posthog.capture("view_content", contentData);
    }
  } catch (err) {
    console.warn("Analytics trackViewContent error:", err);
  }
};

/**
 * Track Image Download
 * @param {object} downloadData - { fileName, imageTitle, type }
 */
export const trackDownload = (downloadData = {}) => {
  if (!isBrowser()) return;

  try {
    trackEvent("image_download", downloadData);

    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", "DownloadFoodImage", downloadData);
    }
  } catch (err) {
    console.warn("Analytics trackDownload error:", err);
  }
};

/**
 * Track Video Play / Modal Interaction
 * @param {object} videoData - { videoTitle, videoSrc }
 */
export const trackVideoPlay = (videoData = {}) => {
  if (!isBrowser()) return;

  try {
    trackEvent("video_play", videoData);

    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", "VideoWatch", videoData);
    }
  } catch (err) {
    console.warn("Analytics trackVideoPlay error:", err);
  }
};

/**
 * Track FAQ Question Accordion Toggle
 * @param {string} question - Question text
 * @param {boolean} isOpen - Whether accordion is opened or closed
 */
export const trackFaqToggle = (question, isOpen) => {
  if (!isBrowser()) return;

  try {
    trackEvent("faq_toggle", {
      faq_question: question,
      action: isOpen ? "expand" : "collapse",
    });
  } catch (err) {
    console.warn("Analytics trackFaqToggle error:", err);
  }
};

/**
 * Track Call to Action (CTA) button clicks
 * @param {string} buttonName - Label/name of button
 * @param {string} buttonLocation - Where on page (e.g. hero, header, footer, bottom_banner)
 * @param {string} destination - Target link/URL
 */
export const trackCTAClick = (buttonName, buttonLocation, destination = "") => {
  if (!isBrowser()) return;

  try {
    trackEvent("cta_click", {
      button_name: buttonName,
      button_location: buttonLocation,
      destination_url: destination,
    });

    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", "CTAClick", {
        button_name: buttonName,
        button_location: buttonLocation,
      });
    }
  } catch (err) {
    console.warn("Analytics trackCTAClick error:", err);
  }
};

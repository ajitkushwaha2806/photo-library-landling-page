'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

  useEffect(() => {
    if (pathname) {
      let url = pathname;
      const search = searchParams ? searchParams.toString() : '';
      if (search) url += '?' + search;

      // Track via universal analytics helper (fires PostHog, Meta Pixel PageView, GA)
      trackPageView(url, document?.title || 'FoodSnap.in');
    }
  }, [pathname, searchParams, ph]);

  return null;
}

export function PostHogProvider({ children }) {
  useEffect(() => {
    const posthogKey =
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ||
      process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com';

    if (posthogKey && typeof window !== 'undefined') {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: 'identified_only',
        capture_pageview: false, // Handled dynamically in PostHogPageView
        capture_pageleave: true,
        autocapture: true,
        loaded: (ph) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('PostHog initialized successfully');
          }
        },
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}

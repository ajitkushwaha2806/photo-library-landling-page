"use client";

import { useEffect } from "react";

export default function ThirdPartyScripts() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1674228269954185";

  useEffect(() => {
    // 1. Initialize Meta Pixel (Facebook Pixel) immediately for accurate attribution
    if (pixelId && typeof window !== "undefined") {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      window.fbq("init", pixelId);
      window.fbq("track", "PageView");
    }

    // 2. Initialize Microsoft Clarity
    if (typeof window !== "undefined") {
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "u1zyl05z4t");
    }

    // 3. Initialize Google Analytics
    if (typeof window !== "undefined") {
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src =
        "https://www.googletagmanager.com/gtag/js?id=G-DDZXQ7G4VW";
      document.head.appendChild(gaScript);

      const gaInline = document.createElement("script");
      gaInline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DDZXQ7G4VW');
      `;
      document.head.appendChild(gaInline);
    }
  }, [pixelId]);

  return (
    <>
      {pixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { trackVideoPlay } from "@/lib/analytics";

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
    trackVideoPlay({
      videoTitle: thumbnailAlt || "Hero Demo Video",
      videoSrc: videoSrc,
    });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        className="group relative cursor-pointer rounded-2xl p-1.5 sm:p-2 bg-gradient-to-b from-gray-200 to-gray-100/60 border border-gray-200 shadow-2xl shadow-gray-300/60"
        onClick={handleOpenVideo}
      >
        <div className="relative overflow-hidden rounded-xl bg-gray-900">
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            width={1920}
            height={1080}
            className="w-full object-cover transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:brightness-[0.9]"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out">
            <div className="flex size-20 sm:size-24 items-center justify-center rounded-full bg-emerald-600/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
              <div
                className="relative flex size-14 sm:size-16 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 shadow-xl shadow-emerald-600/40 text-white transition-all duration-300 group-hover:scale-105"
              >
                <Play
                  className="size-6 sm:size-7 fill-white text-white ml-0.5"
                  style={{
                    filter:
                      "drop-shadow(0 4px 6px rgb(0 0 0 / 0.15))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
            >
              <motion.button
                aria-label="Close video dialog"
                className="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
              >
                <XIcon className="size-5" />
              </motion.button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                <iframe
                  src={videoSrc}
                  className="size-full rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

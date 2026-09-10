import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-white/40 transition-all duration-500" />

      <motion.svg
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-[-10%] w-[130vw] h-[130vh] -translate-x-1/2 blur-[120px] opacity-25 transition-all duration-1000"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: 1.05, rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        <circle
          cx="600"
          cy="400"
          r="400"
          className="fill-emerald-200"
          fillOpacity="0.4"
        />
        <circle
          cx="200"
          cy="700"
          r="200"
          className="fill-green-200"
          fillOpacity="0.35"
        />
        <circle
          cx="1000"
          cy="200"
          r="250"
          className="fill-teal-100"
          fillOpacity="0.3"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedBackground;

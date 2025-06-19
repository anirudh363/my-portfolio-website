import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const loadingMessages = [
  "Initializing secure protocols...",
  "Decrypting assets...",
  "Establishing encrypted link...",
  "Loading classified visuals...",
  "Rendering tactical interface...",
  "Finalizing mission brief..."
];

const LoadingScreen = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-green-400">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-2xl md:text-4xl font-mono tracking-wide">
          {loadingMessages[messageIndex]}
        </div>
        <div className="w-32 h-2 bg-green-500 rounded-full overflow-hidden mx-auto mt-4 relative">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/4 bg-red-300 opacity-70"
            animate={{ x: ["0%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

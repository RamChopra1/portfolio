"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profile, blurb } from "@/data/site";

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState("");
  const roleText = profile.role;

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < roleText.length) {
          setDisplayedRole(roleText.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(animate, 100); // 100ms per character
        } else {
          // Pause at end before deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            animate();
          }, 2000); // Pause for 2 seconds
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedRole(roleText.slice(0, currentIndex));
          timeoutId = setTimeout(animate, 50); // Faster deletion
        } else {
          // Pause before restarting
          timeoutId = setTimeout(() => {
            isDeleting = false;
            animate();
          }, 500); // Short pause before restarting
        }
      }
    };

    // Start the animation after a delay
    const startDelay = setTimeout(() => {
      animate();
    }, 1000);

    // Cleanup function
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (startDelay) clearTimeout(startDelay);
    };
  }, [roleText]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 lg:mb-20"
    >
      {/* Compact Greeting */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8 flex items-center gap-2 text-zinc-400"
      >
        <span className="text-2xl">👋</span>
        <span className="text-lg font-medium">Say Hello</span>
      </motion.div>
      
      {/* Name and Role */}
      <div className="mb-8">
        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold leading-tight text-zinc-100 sm:text-5xl lg:text-6xl"
        >
          I'm {profile.name},
        </motion.h1>
        
        {/* Animated Role with Typewriter Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        >
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            {displayedRole}
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-emerald-400"
          >
            |
          </motion.span>
        </motion.div>
      </div>
      
      {/* Brief Introduction */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg leading-relaxed text-zinc-300 max-w-3xl lg:text-xl"
      >
        {blurb}
      </motion.p>
    </motion.section>
  );
}
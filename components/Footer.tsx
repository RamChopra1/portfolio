"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-[#1f1f1f] py-12 text-center"
    >
      <div className="flex flex-col items-center gap-4 text-sm text-zinc-400 sm:flex-row sm:justify-between">
        <div className="font-medium">
          © 2025 Ram Chopra. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Built with</span>
          <Heart size={14} className="text-emerald-400 fill-emerald-400" />
          <span>using</span>
          <span className="text-emerald-400 font-medium">Next.js</span>
          <span>&</span>
          <span className="text-emerald-400 font-medium">Tailwind CSS</span>
        </div>
      </div>
    </motion.footer>
  );
}
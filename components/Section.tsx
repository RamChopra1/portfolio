"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, icon, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <div className="mb-8 flex items-center gap-4">
        {icon && <div className="text-zinc-400 flex-shrink-0">{icon}</div>}
        <h2 className="text-2xl font-bold text-zinc-100 lg:text-3xl">{title}</h2>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </motion.section>
  );
}
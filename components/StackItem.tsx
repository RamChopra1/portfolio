"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Brain, 
  FileCode2, 
  GitBranch, 
  Figma, 
  Square,
  LucideIcon
} from "lucide-react";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  FileCode2,
  GitBranch,
  Figma,
  Square
};

interface StackItemProps {
  name: string;
  sub: string;
  icon: string;
  index: number;
}

export default function StackItem({ name, sub, icon, index }: StackItemProps) {
  const Icon = iconMap[icon] || Code2;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -2, scale: 1.02 }}
      className="group"
    >
      <Card className="bg-[#111111] border-[#1f1f1f] p-5 hover:border-[#2a2a2a] transition-all duration-200 hover:shadow-lg hover:shadow-emerald-400/5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 border border-emerald-400/20 group-hover:bg-emerald-400/20 group-hover:scale-110 transition-all duration-200">
            <Icon size={22} className="text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-200 mb-1">
              {name}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{sub}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
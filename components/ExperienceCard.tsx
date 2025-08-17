"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
  index: number;
}

export default function ExperienceCard({ title, company, start, end, bullets, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <Card className="bg-[#111111] border-[#1f1f1f] p-6 hover:border-[#2a2a2a] transition-all duration-200 hover:shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            {/* Job Title */}
            <h3 className="mb-2 text-xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-200">
              {title}
            </h3>
            
            {/* Company */}
            <div className="mb-4 flex items-center gap-2 text-zinc-400">
              <MapPin size={16} />
              <span className="font-medium">{company}</span>
            </div>
            
            {/* Responsibilities */}
            <ul className="space-y-3">
              {bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></div>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Duration Badge */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#1f1f1f] bg-zinc-800/30 px-4 py-2 text-sm text-zinc-400">
              <Calendar size={14} />
              <span className="font-medium">{start} - {end}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
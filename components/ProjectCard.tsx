"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  featured?: boolean;
  href: string;
  github?: string;
  demo?: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  tags, 
  featured = false, 
  href, 
  github, 
  demo, 
  index 
}: ProjectCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -4, scale: 1.02 }}
        className="group"
      >
        <Card className="overflow-hidden bg-[#111111] border-[#1f1f1f] hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-400/10">
          <div className="relative h-56 bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-500 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-30"></div>
            
            <div className="relative text-center text-white z-10">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-white/80 font-medium">{subtitle}</p>
            </div>
          </div>
          
          <div className="p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-base text-zinc-300 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="flex gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source Code"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-400 transition-all duration-200 hover:bg-emerald-400 hover:text-black hover:scale-110"
                  >
                    <Github size={18} />
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Demo"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-400 transition-all duration-200 hover:bg-emerald-400 hover:text-black hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-lg bg-zinc-800/50 border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-emerald-400/10 hover:border-emerald-400/30 hover:text-emerald-400 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <Card className="overflow-hidden bg-[#111111] border-[#1f1f1f] hover:border-[#2a2a2a] transition-all duration-200 hover:shadow-lg">
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-200 mb-2">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 font-medium mb-3">{subtitle}</p>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title="View Project"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-400 transition-all duration-200 hover:bg-emerald-400 hover:text-black hover:scale-110"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
          
          <p className="mb-4 text-sm text-zinc-300 leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-lg bg-zinc-800/50 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300 hover:bg-emerald-400/10 hover:border-emerald-400/30 hover:text-emerald-400 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
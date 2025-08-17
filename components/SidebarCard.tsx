"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/site";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function SidebarCard() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:sticky lg:top-8"
    >
      {/* Desktop Layout */}
      <Card className="hidden lg:block bg-[#111111] border-[#1f1f1f] p-8 text-center shadow-xl">
        {/* Profile Photo */}
        <div className="relative mx-auto mb-6 h-30 w-30 overflow-hidden rounded-full border-2 border-[#1f1f1f]">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Availability Status */}
        {profile.available && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-400 font-medium">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
            Available for work
          </div>
        )}
        
        {/* Name and Role */}
        <h1 className="mb-2 text-2xl font-bold text-zinc-100">{profile.name}</h1>
        <p className="mb-2 text-lg text-emerald-400 font-medium">{profile.role}</p>
        
        {/* Location */}
        <div className="mb-6 flex items-center justify-center gap-2 text-zinc-400">
          <MapPin size={16} />
          <span className="text-sm">{profile.location}</span>
        </div>
        
        {/* Key Metrics */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          {profile.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-zinc-100 mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-zinc-400 leading-tight">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="mb-8 flex justify-center gap-4">
          {profile.socials.map((social) => {
            const Icon = social.icon === 'Github' ? Github : Linkedin;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800/50 text-zinc-400 transition-all duration-200 hover:bg-zinc-700 hover:text-zinc-300 hover:scale-105"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            asChild
            variant="outline"
            className="w-full h-11 border-[#1f1f1f] bg-transparent text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200"
          >
            <a href={profile.cv} download>
              <Download size={16} className="mr-2" />
              Download CV
            </a>
          </Button>
          
          <Button
            onClick={scrollToContact}
            className="w-full h-11 bg-emerald-400 text-black hover:bg-emerald-500 font-medium transition-all duration-200 hover:scale-[1.02]"
          >
            <Mail size={16} className="mr-2" />
            Contact Me
          </Button>
        </div>
      </Card>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Profile Photo - Mobile */}
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-[#1f1f1f] flex-shrink-0">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Profile Info - Mobile */}
          <div className="flex-1 text-center sm:text-left">
            {/* Availability Status */}
            {profile.available && (
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2 py-1 text-xs text-emerald-400 font-medium">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                Available for work
              </div>
            )}
            
            {/* Name and Role */}
            <h1 className="mb-1 text-xl sm:text-2xl font-bold text-zinc-100">{profile.name}</h1>
            <p className="mb-2 text-base sm:text-lg text-emerald-400 font-medium">{profile.role}</p>
            
            {/* Location */}
            <div className="mb-3 flex items-center justify-center sm:justify-start gap-2 text-zinc-400">
              <MapPin size={14} />
              <span className="text-sm">{profile.location}</span>
            </div>
          </div>
        </div>
        
        {/* Metrics - Mobile */}
        <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
          {profile.metrics.map((metric, index) => (
            <div key={index} className="text-center bg-[#111111] border border-[#1f1f1f] rounded-lg p-3">
              <div className="text-lg sm:text-xl font-bold text-zinc-100 mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-zinc-400 leading-tight">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Links & Buttons - Mobile */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon === 'Github' ? Github : Linkedin;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/50 text-zinc-400 transition-all duration-200 hover:bg-zinc-700 hover:text-zinc-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none border-[#1f1f1f] bg-transparent text-zinc-300 hover:bg-zinc-800"
            >
              <a href={profile.cv} download>
                <Download size={14} className="mr-1" />
                CV
              </a>
            </Button>
            
            <Button
              onClick={scrollToContact}
              size="sm"
              className="flex-1 sm:flex-none bg-emerald-400 text-black hover:bg-emerald-500 font-medium"
            >
              <Mail size={14} className="mr-1" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import React from "react";
import { Briefcase, FolderOpen, GraduationCap, Wrench, MessageCircle } from "lucide-react";
import SidebarCard from "@/components/SidebarCard";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import StackItem from "@/components/StackItem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { experience, projects, education, stacks } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Desktop Layout: Fixed Sidebar + Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Fixed Sidebar - Desktop */}
        <div className="hidden lg:block w-[33.333333%] fixed left-0 top-0 h-screen overflow-y-auto bg-[#000000] border-r border-[#1f1f1f]">
          <div className="p-8">
            <SidebarCard />
          </div>
        </div>
        
        {/* Mobile/Tablet Header - Stacked */}
        <div className="lg:hidden w-full bg-[#000000] border-b border-[#1f1f1f]">
          <div className="p-4 sm:p-6">
            <SidebarCard />
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="w-full lg:ml-[33.333333%] min-h-screen">
          <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {/* Hero */}
              <Hero />
              
              {/* Experience */}
              <Section id="experience" title="Experience" icon={<Briefcase size={24} />}>
                {experience.map((exp, index) => (
                  <ExperienceCard
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    start={exp.start}
                    end={exp.end}
                    bullets={exp.bullets}
                    index={index}
                  />
                ))}
              </Section>
              
              {/* Projects */}
              <Section id="projects" title="Projects" icon={<FolderOpen size={24} />}>
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    subtitle={project.subtitle}
                    description={project.description}
                    tags={project.tags}
                    featured={project.featured}
                    href={project.href}
                    github={project.github}
                    demo={project.demo}
                    index={index}
                  />
                ))}
              </Section>
              
              {/* Education */}
              <Section id="education" title="Education" icon={<GraduationCap size={24} />}>
                {education.map((edu, index) => (
                  <Card key={index} className="bg-[#111111] border-[#1f1f1f] p-6 hover:border-[#2a2a2a] transition-all duration-200 hover:shadow-lg group">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-200">
                          {edu.title}
                        </h3>
                        <p className="mb-3 text-zinc-400 font-medium">{edu.org}</p>
                        <p className="text-sm text-zinc-300 leading-relaxed">{edu.summary}</p>
                      </div>
                      <div className="shrink-0">
                        <div className="rounded-lg border border-[#1f1f1f] bg-zinc-800/30 px-4 py-2 text-sm text-zinc-400 font-medium">
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Section>
              
              {/* Stacks */}
              <Section id="stacks" title="Stacks" icon={<Wrench size={24} />}>
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                  {stacks.map((stack, index) => (
                    <StackItem
                      key={index}
                      name={stack.name}
                      sub={stack.sub}
                      icon={stack.icon}
                      index={index}
                    />
                  ))}
                </div>
              </Section>
              
              {/* Contact */}
              <Section id="contact" title="Contact" icon={<MessageCircle size={24} />}>
                <Contact />
              </Section>
              
              {/* Footer */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
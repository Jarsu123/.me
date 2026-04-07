"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Layers, Code, Globe, MessageSquare, MessageCircle, Link2, Sparkles } from "lucide-react";

const projectIcons: Record<number, any> = {
  1: MessageCircle, // Chat App
  2: Link2,         // URL Shortener  
  3: Sparkles,      // Your Derma
  4: Globe,         // Vastu Consultancy
};

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-foreground"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <p className="text-[#666666] max-w-2xl mx-auto mb-10 font-light">
          A showcase of my recent work focusing on backend infrastructure, real-time systems, and scalable web apps.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? "bg-primary text-black shadow-lg shadow-primary/10" 
                  : "bg-[#0a0a0a] text-[#555555] border border-[#1a1a1a] hover:border-primary/20 hover:text-[#888888]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card group overflow-hidden flex flex-col h-full"
              >
                {/* Themed Project Visual */}
                {(() => {
                  const ProjectIcon = projectIcons[project.id] || Layers;
                  return (
                    <div className="relative h-48 w-full bg-[#040404] overflow-hidden">
                      {/* Decorative grid */}
                      <div className="absolute inset-0 bg-[radial-gradient(#a08b5b08_1px,transparent_1px)] [background-size:20px_20px]" />
                      {/* Gradient glow behind icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all duration-700" />
                      {/* Decorative ring */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-primary/10 group-hover:border-primary/25 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-primary/5 group-hover:scale-105 transition-all duration-1000" />
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <ProjectIcon size={48} className="text-primary/40 group-hover:text-primary/70 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
                      </div>
                      {/* Bottom fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10" />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                        <a href={project.githubUrl} target="_blank" className="p-3 bg-black/60 backdrop-blur-md rounded-full text-primary hover:bg-primary hover:text-black transition-all border border-primary/20">
                          <Github size={20} />
                        </a>
                        <a href={project.liveUrl} className="p-3 bg-black/60 backdrop-blur-md rounded-full text-primary hover:bg-primary hover:text-black transition-all border border-primary/20">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <a 
                      href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title"
                    >
                      <h3 className="text-xl font-bold text-foreground group-hover/title:text-primary transition-colors flex items-center gap-2">
                        {project.title}
                        <ExternalLink size={14} className="opacity-0 group-hover/title:opacity-100 transition-opacity" />
                      </h3>
                    </a>
                    <span className="text-[10px] px-2 py-1 rounded bg-[#0a0a0a] text-[#555555] border border-[#1a1a1a]">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[#666666] text-sm mb-6 flex-grow leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded bg-primary/5 text-primary/80 border border-primary/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-[#111111] pt-6 mt-auto">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-[#888888] flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      <Github size={14} /> Source Code
                    </a>
                    {project.liveUrl !== "#" && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold text-[#888888] flex items-center gap-1.5 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

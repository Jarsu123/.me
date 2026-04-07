"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Layers, Code, Globe, MessageSquare, MessageCircle, Link2, Sparkles, Box } from "lucide-react";

const projectIcons: Record<number, any> = {
  1: MessageCircle,
  2: Link2,
  3: Sparkles,
  4: Globe,
};

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold mb-4 text-foreground"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <p className="text-[#666666] max-w-2xl mx-auto mb-10 font-light">
          A showcase of my recent work focusing on backend infrastructure, real-time systems, and scalable web apps.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? "bg-primary text-black" 
                  : "bg-[#0a0a0a] text-[#555555] border border-[#1a1a1a] hover:border-primary/20 hover:text-[#888888]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const IconComponent = projectIcons[project.id] || Box;
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  className="glass-card p-8 group hover:border-primary/30 transition-all flex flex-col items-start text-left"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.1 }}
                >
                  <div className="p-4 rounded-2xl bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                    <IconComponent size={24} />
                  </div>
                  
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold mb-2">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    <a href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  
                  <p className="text-[#666666] mb-8 font-light flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-6 mt-auto">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-bold text-[#555555] hover:text-primary flex items-center gap-2"
                    >
                      <Github size={18} /> GitHub
                    </a>
                    {project.liveUrl !== "#" && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-bold text-[#555555] hover:text-primary flex items-center gap-2"
                      >
                        <ExternalLink size={18} /> Live
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

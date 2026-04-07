"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Layers, Code, Globe, MessageSquare, MessageCircle, Link2, Sparkles, Zap, ArrowUpRight } from "lucide-react";

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
    <section id="projects" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              className="flex items-center gap-2 text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
            >
              <Zap size={14} className="fill-primary" />
              Featured Work
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
            >
              The <span className="text-gradient">Portfolio.</span>
            </motion.h2>
            <p className="text-[#666666] text-lg md:text-xl font-light leading-relaxed">
              A curated selection of my most impactful projects, ranging from high-performance backend systems to modern web platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 bg-primary/5 p-1.5 rounded-full border border-primary/10">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-500 ${
                  filter === cat 
                    ? "bg-primary text-black shadow-[0_0_20px_rgba(160,139,91,0.2)]" 
                    : "text-[#555555] hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        initial={false}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const IconComponent = projectIcons[project.id] || Zap;
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col h-full rounded-[32px] bg-[#080808] border border-[#1a1a1a] hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Visual Thumbnail Area */}
                <div className="relative aspect-[16/10] bg-[#0c0c0c] flex items-center justify-center p-12 overflow-hidden border-b border-[#111111]">
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
                  
                  {/* Unique CSS Art Icon */}
                  {(() => {
                    return (
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <div className="absolute w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-all duration-500" />
                        <div className="relative flex flex-col items-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-6 rounded-[24px] bg-primary/5 border border-primary/15 text-primary shadow-[0_0_40px_rgba(160,139,91,0.05)] group-hover:shadow-[0_0_60px_rgba(160,139,91,0.15)] group-hover:border-primary/40 transition-all duration-500"
                          >
                            <IconComponent size={40} strokeWidth={1} />
                          </motion.div>
                          
                          {/* Animated Particles */}
                          <div className="absolute -top-10 -right-10 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse" />
                          <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-accent/5 rounded-full blur-xl animate-pulse delay-700" />
                          
                          {/* Tech Icons Floating */}
                          <div className="flex gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                            {project.techStack.slice(0, 3).map((tech, i) => (
                              <span key={i} className="text-[10px] text-primary/40 font-black tracking-widest uppercase">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                  
                  {/* Live Link Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <a 
                      href={project.liveUrl !== "#" ? project.liveUrl : project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 rounded-full bg-primary text-black hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(160,139,91,0.4)]"
                    >
                      <ArrowUpRight size={28} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[#666666] leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-6 pt-6 border-t border-[#111111]">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[11px] font-black tracking-widest text-[#555555] uppercase flex items-center gap-2 hover:text-primary transition-all duration-300"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.liveUrl !== "#" && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[11px] font-black tracking-widest text-[#555555] uppercase flex items-center gap-2 hover:text-primary transition-all duration-300"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

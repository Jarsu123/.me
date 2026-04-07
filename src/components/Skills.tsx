"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { 
  Database, Server, Globe, Cpu, Code, Terminal, GitBranch, Layers, Box, 
  ShieldCheck, Zap, Share2, Award, Zap as Fast, Layout
} from "lucide-react";

const iconMap: Record<string, any> = {
  Code: Code,
  Server: Server,
  Database: Database,
  Layers: Layers,
  Cpu: Cpu,
  Terminal: Terminal,
  Globe: Globe,
  GitBranch: GitBranch,
  Box: Box,
  Shield: ShieldCheck,
  Zap: Zap,
};

// Map categories to specific icons for the headers
const categoryIcons: Record<string, any> = {
  "Languages": Code,
  "Frameworks": Server,
  "Databases": Database,
  "Tools": GitBranch,
  "DevOps": Cpu,
  "Security": ShieldCheck,
  "Real-time": Zap,
  "AI/ML": Cpu,
  "Libraries": Layers
};

const categoryOrder = [
  "Languages",
  "Frameworks",
  "Databases",
  "Real-time",
  "Libraries",
  "Security",
  "DevOps",
  "Tools",
  "AI/ML"
];

export const Skills = () => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Sort categories based on the predefined order
  const sortedCategories = Object.entries(groupedSkills).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a[0]);
    const indexB = categoryOrder.indexOf(b[0]);
    
    // If category is not in the list, move it to the end
    const finalIndexA = indexA === -1 ? 99 : indexA;
    const finalIndexB = indexB === -1 ? 99 : indexB;
    
    return finalIndexA - finalIndexB;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          className="text-4xl font-bold mb-4 text-foreground"
          initial={false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.2 }}
        >
          My Technical <span className="text-gradient">Skills</span>
        </motion.h2>
        <p className="text-[#666666] max-w-2xl mx-auto font-light">
          A comprehensive toolkit focused on backend performance, scalability, and modern engineering practices, prioritized by core expertise.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sortedCategories.map(([category, items], catIndex) => {
          const CategoryIcon = categoryIcons[category] || Box;
          
          return (
            <motion.div
              key={category}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 border border-[#1a1a1a] hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <CategoryIcon size={18} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => {
                  const SkillIcon = iconMap[skill.icon] || Box;
                  return (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-primary/30 hover:bg-primary/5 transition-all group"
                    >
                      <SkillIcon size={14} className="text-[#555555] group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-[#888888] group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

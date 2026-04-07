"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-foreground">
            <Briefcase className="text-primary" />
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-[#666666] font-light">Roadmap of my professional journey and learning path.</p>
        </div>

        <div className="relative ml-4 md:ml-0 md:border-l-0">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"}`}
              initial={false}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`absolute top-0 w-8 h-8 rounded-full bg-black border-4 border-primary z-10 ${index % 2 === 0 ? "-left-4 md:-right-4 md:left-auto" : "-left-4 md:-left-4"}`} />
              
              <div className="glass-card p-6 border border-[#1a1a1a] hover:border-primary/40 transition-all shadow-2xl shadow-black">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold mb-3 border border-primary/10">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                <p className="text-primary font-medium mb-3">{exp.company}</p>
                <p className="text-[#666666] text-sm leading-relaxed font-light">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 flex items-center justify-center gap-3 text-foreground">
          <GraduationCap className="text-primary" />
          Education
        </h2>
        
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            className="glass-card p-8 relative overflow-hidden group"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1 }}
          >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                <div className="flex items-center gap-4 text-[#666666] text-sm">
                  <span className="flex items-center gap-1"><MapPin size={16} /> Indore, India</span>
                  <span className="flex items-center gap-1"><Calendar size={16} /> {edu.period}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#777777] font-medium">Branch: <span className="text-foreground">{edu.branch}</span></p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

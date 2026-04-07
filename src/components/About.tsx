"use client";

import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { User, Code2, Server, Cpu } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <User className="text-primary" />
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-[#777777] mb-10 leading-relaxed font-light">
              {profile.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Scalable APIs", icon: <Server className="text-primary" />, desc: "Building robust REST and real-time APIs." },
                { title: "System Design", icon: <Cpu className="text-primary" />, desc: "Architecting efficient and reliable systems." },
                { title: "Modern Tech", icon: <Code2 className="text-accent" />, desc: "Staying ahead with the latest frameworks." },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-2xl glass-card">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-[#666666]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
      </div>
    </section>
  );
};

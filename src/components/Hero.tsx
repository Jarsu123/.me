"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const words = profile.tagline.split(" | ");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const word = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < word.length) {
        setDisplayText(word.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(word.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === word.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[160px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px] -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-8 border border-primary/15 tracking-wider uppercase">
            Welcome to my digital space
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <div className="h-10 md:h-12 mb-8 flex justify-center items-center">
            <p className="text-xl md:text-3xl font-light text-[#8a8a8a]">
              {displayText}
              <span className="w-0.5 h-8 md:h-10 bg-primary ml-1 inline-block animate-blink-caret" />
            </p>
          </div>
          <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Crafting robust backends and scalable systems with FastAPI, Python, and PostgreSQL. Focused on real-time performance and reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-black font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/15"
            >
              View My Work
              <ArrowRight size={20} />
            </button>
            <a
              href={profile.resumeUrl}
              download="Suraj_Dhakad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-foreground font-medium flex items-center justify-center gap-2 hover:border-primary/30 transition-all hover:scale-105 active:scale-95"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-10">
            <a href={profile.contact.github} target="_blank" className="text-[#555555] hover:text-primary transition-all duration-300 hover:scale-110">
              <Github size={26} />
            </a>
            <a href={profile.contact.linkedin} target="_blank" className="text-[#555555] hover:text-primary transition-all duration-300 hover:scale-110">
              <Linkedin size={26} />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="text-[#555555] hover:text-primary transition-all duration-300 hover:scale-110">
              <Mail size={26} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex-col items-center gap-2"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#333333] flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-gradient cursor-pointer"
        >
          {profile.name.split(" ")[0]}
          <span className="text-foreground">.</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary",
                activeSection === link.id ? "text-primary" : "text-[#666666]"
              )}
            >
              {link.name}
            </button>
          ))}
          
          <div className="flex items-center gap-4 border-l border-[#1a1a1a] pl-8">
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-accent text-black px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 bg-black/98 backdrop-blur-lg md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-2xl font-medium transition-colors",
                activeSection === link.id ? "text-primary" : "text-[#666666]"
              )}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-black px-8 py-3 rounded-full text-lg font-bold"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

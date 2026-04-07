"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, Github, Linkedin, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const whatsappMessage = `Hi Suraj, I'm ${formData.name}. 
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = profile.contact.phone.replace(/[^0-9]/g, ""); // Remove plus and spaces
    
    // Open WhatsApp link
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset submitted status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-foreground"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.1 }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-[#666666] font-light">Have a project in mind? Let's build something amazing together.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            className="w-full lg:w-1/3 space-y-6"
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { icon: <Mail className="text-primary" />, title: "Email", value: profile.contact.email, link: `mailto:${profile.contact.email}` },
              { icon: <Phone className="text-primary" />, title: "Phone", value: profile.contact.phone, link: `tel:${profile.contact.phone}` },
              { icon: <Linkedin className="text-accent" />, title: "LinkedIn", value: "Suraj Dhakad", link: profile.contact.linkedin },
              { icon: <MapPin className="text-primary" />, title: "Location", value: "Indore (IET DAVV)", link: "#" },
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.link}
                className="flex items-center gap-5 p-5 glass-card hover:translate-y-[-4px] transition-all group"
              >
                <div className="p-3.5 rounded-xl bg-[#060606] border border-[#1a1a1a] transition-all group-hover:border-primary/20 group-hover:bg-primary/5">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#555555] font-bold mb-1">{item.title}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-10 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="text-primary" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-[#666666]">Thanks for reaching out. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#555555] uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className="w-full p-4 bg-[#060606] border border-[#1a1a1a] rounded-xl text-foreground placeholder:text-[#333333] outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#555555] uppercase tracking-widest">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        className="w-full p-4 bg-[#060606] border border-[#1a1a1a] rounded-xl text-foreground placeholder:text-[#333333] outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#555555] uppercase tracking-widest">Subject</label>
                    <input 
                      required
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      className="w-full p-4 bg-[#060606] border border-[#1a1a1a] rounded-xl text-foreground placeholder:text-[#333333] outline-none focus:border-primary/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#555555] uppercase tracking-widest">Message</label>
                    <textarea 
                      required
                      rows={6} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..." 
                      className="w-full p-4 bg-[#060606] border border-[#1a1a1a] rounded-xl text-foreground placeholder:text-[#333333] outline-none focus:border-primary/40 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#111111]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-gradient mb-4">
          {profile.name.split(" ")[0]}
          <span className="text-foreground">.</span>
        </div>
        <p className="text-[#555555] mb-8 max-w-md text-center font-light">
          Building the future of backend engineering, one API at a time.
        </p>
        
        <div className="flex items-center gap-8 mb-10">
          <a href={profile.contact.github} target="_blank" className="text-[#444444] hover:text-primary transition-all duration-300 hover:scale-110">
            <Github size={22} />
          </a>
          <a href={profile.contact.linkedin} target="_blank" className="text-[#444444] hover:text-primary transition-all duration-300 hover:scale-110">
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${profile.contact.email}`} className="text-[#444444] hover:text-primary transition-all duration-300 hover:scale-110">
            <Mail size={22} />
          </a>
          <a href={`tel:${profile.contact.phone}`} className="text-[#444444] hover:text-primary transition-all duration-300 hover:scale-110">
            <Phone size={22} />
          </a>
        </div>
        
        <div className="text-[#333333] text-sm font-medium">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved. Made with 🖤 in India.
        </div>
      </div>
    </footer>
  );
};

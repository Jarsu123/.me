# 🚀 Suraj Dhakad | Full Stack Developer Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind-CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-611f69?style=for-the-badge&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel" alt="Vercel" />
</div>

---

## 🌟 Overview

Welcome to the source code of my personal portfolio. This project showcases a premium, high-performance developer identity built with **Next.js 15**, **React 19**, and **Tailwind CSS v4**. It features a sophisticated **Full Black & Antique Gold** aesthetic, designed to highlight full-stack expertise with a focus on backend reliability and real-time systems.

### ✨ Key Highlights

- **Premium Black & Gold Aesthetic**: A custom-crafted visual theme using muted antique gold accents (`#a08b5b`) on a deep black background.
- **WhatsApp Integration**: High-conversion contact form that redirects directly to WhatsApp with pre-filled message formatting.
- **Resume-Ready**: Integrated one-click resume download feature directly from the Hero section.
- **Categorized Skills**: A clean, organized presentation of technical skills grouped by Languages, Frameworks, and Tools.
- **Dynamic Projects**: Interactive, filterable project showcase with 3D-hover states and direct GitHub/Live links.
- **Performance Optimized**: Achieves near-perfect Lighthouse scores with Next.js 15 App Router optimizations.
- **Fully Responsive**: Meticulously tested and refined for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

- **Core**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 (Glassmorphism, Custom Gradients)
- **Animations**: Framer Motion (Scroll-triggered reveals, staggered lists)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (Layouts, Pages, Globals)
│   ├── globals.css       # Core Design System & Tailwind v4 Config
│   ├── layout.tsx        # Root entry with ThemeProvider
│   └── page.tsx          # Main assembled portfolio view
├── components/           # Modularized UI Sections
│   ├── Hero.tsx          # Dynamic typing effects & social actions
│   ├── Skills.tsx        # Categorized technical toolkit
│   ├── Projects.tsx      # Performance-driven project gallery
│   └── Contact.tsx       # Lead-gen via WhatsApp integration
├── data/                 # Central Source of Truth
│   └── portfolio.ts      # Easy-to-edit portfolio configuration
├── lib/                  # Reusable utility functions
└── public/               # Optimized static assets (Resume, Images)
```

## ⚙️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js (LTS)** and **npm** installed.

### 2. Installation
```bash
git clone https://github.com/Jarsu123/Portfolio.git
cd Portfolio
npm install
```

### 3. Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the project.

### 4. Customization
All textual content, project links, and skill lists can be updated in `src/data/portfolio.ts`. No need to hunt through component files!

## 📄 License

This project is open-source and available under the **MIT License**. Feel free to use it as a foundation for your own amazing portfolio!

---

<div align="center">
  Developed with 🖤 by <a href="https://github.com/Jarsu123">Suraj Dhakad</a>
</div>

"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CursorGlow = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement with elastic springs
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.06]"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, #a08b5b 0%, #bfa97a 40%, transparent 100%)",
        }}
      />
      {/* Secondary warm orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.03]"
        style={{
          x: smoothX,
          y: smoothY,
          translateY: 50,
          translateX: 50,
          background: "radial-gradient(circle, #bfa97a 0%, transparent 70%)",
        }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

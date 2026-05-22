"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowDown, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

// Dynamically load R3F Hologram to prevent SSR errors
const HologramFace = dynamic(() => import("./HologramFace"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-electric-blue/20 border-t-electric-blue rounded-full animate-spin" />
        <span className="absolute font-mono text-[9px] text-electric-blue/40 tracking-wider">LOAD_3D</span>
      </div>
    </div>
  ),
});

const roles = [
  "AI Tool Developer",
  "ML Engineer",
  "Browser Automation Developer",
  "Full Stack Builder",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const mousePos = useMousePosition();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6 md:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-[#10B981] border-2 border-black px-3.5 py-1 text-black font-mono text-xs tracking-wider uppercase font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <span className="w-2.5 h-2.5 bg-black border border-black inline-block" />
            System Status: Operational
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-space font-extrabold text-5xl md:text-7xl leading-tight tracking-tight text-black"
            >
              Hi, I’m <span className="bg-[#10B981] px-3 py-1 border-4 border-black text-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">Amit Raj</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-general font-extrabold text-lg md:text-xl text-black tracking-wide mt-2"
            >
              AI Engineer · Automation Developer · Computer Vision Enthusiast
            </motion.h2>
          </div>

          {/* Scrolling Role Banner */}
          <div className="h-10 overflow-hidden relative flex items-center font-space">
            <span className="text-black/60 mr-2 text-lg uppercase tracking-widest font-extrabold">Specialty:</span>
            <div className="relative h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-[#10B981] font-black text-xl md:text-2xl tracking-wide block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-general text-base md:text-lg text-black/85 font-semibold leading-relaxed max-w-xl"
          >
            Passionate about building scalable AI systems, browser automation frameworks, and production-ready software solutions with a focus on performance and intelligent user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="relative px-6 py-3 bg-[#10B981] border-4 border-black hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-0 active:translate-y-0 transition-all font-general font-extrabold text-black tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="relative px-6 py-3 bg-white border-4 border-black hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-0 active:translate-y-0 transition-all font-general font-extrabold text-black tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side 3D Digital Twin Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 h-[400px] md:h-[550px] w-full relative flex items-center justify-center overflow-hidden"
        >
          {/* Hologram Canvas Component */}
          <HologramFace mousePos={mousePos} />
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-black font-extrabold">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-black stroke-[3px]" />
        </motion.div>
      </div>
    </section>
  );
}

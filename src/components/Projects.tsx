"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ShieldCheck, Sparkles, Database, FileAudio } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

interface ProjectItem {
  title: string;
  category: string;
  desc: string[];
  techs: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  github?: string;
  demo?: string;
}

const projects: ProjectItem[] = [
  {
    title: "AI Watermark Removal Tool",
    category: "Computer Vision / AI Freelance",
    icon: Sparkles,
    image: "/images/watermark_removal.png",
    desc: [
      "Developed an end-to-end AI pipeline to automatically detect text and logo watermarks using a fine-tuned YOLOv11 object detection model.",
      "Integrated LaMA Inpainting model to reconstruct image backgrounds beneath detected watermark regions.",
      "Optimized inference performance using CUDA acceleration and concurrent bulk-processing queues for scalable image processing."
    ],
    techs: ["YOLOv11", "LaMA Inpainting", "OpenCV", "CUDA", "Python"],
    github: "https://github.com",
  },
  {
    title: "Web Automation System",
    category: "Browser Automation / Freelance",
    icon: ShieldCheck,
    image: "/images/web_automation.png",
    desc: [
      "Built a scalable browser automation framework using Playwright and Chromium.",
      "Automated form filling, web scraping, and workflow automation.",
      "Managed 50+ simultaneous browser tabs with staggered execution strategies.",
      "Reduced repetitive client workflow time from hours to minutes using CSV-driven automation systems."
    ],
    techs: ["Playwright", "Chromium", "Python", "Asyncio", "CSV Data Engine"],
    github: "https://github.com",
  },
  {
    title: "Static Landing Page",
    category: "Web Development / FastAPI",
    icon: Database,
    image: "/images/landing_page.png",
    desc: [
      "Developed a responsive landing page using HTML, CSS, and JavaScript.",
      "Integrated FastAPI backend for analytics and form handling.",
      "Deployed and maintained application on Linux VPS infrastructure."
    ],
    techs: ["HTML5", "CSS3", "JavaScript", "FastAPI", "Linux VPS", "Nginx"],
    github: "https://github.com",
  },
  {
    title: "Python TTS Converter",
    category: "Python / gTTS",
    icon: FileAudio,
    image: "/images/sound_wave.png",
    desc: [
      "Built a command-line text-to-speech application with multilingual support and audio export functionality."
    ],
    techs: ["Python", "gTTS", "Multilingual CLI", "Audio Rendering"],
    github: "https://github.com",
  }
];

function ProjectCard({ project, idx }: { project: ProjectItem; idx: number }) {
  const IconComponent = project.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="p-4 sm:p-6 md:p-8 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between h-full group"
    >
      <div className="w-full">
        {/* Project Image Banner */}
        <div className="relative w-full h-36 sm:h-44 md:h-52 mb-6 overflow-hidden border-4 border-black bg-[#F5F3EF]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={idx < 2}
            className="object-cover object-center transform group-hover:scale-102 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Top Header info */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-space font-black text-black bg-[#10B981] border-2 border-black px-2.5 py-0.5 uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-xs font-mono font-bold text-black">
            PROJ_0{idx + 1}
          </span>
        </div>

        {/* Project Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-[#F5F3EF] border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="font-space font-black text-xl md:text-2xl text-black uppercase">
            {project.title}
          </h3>
        </div>

        {/* Description Points - Expandable on mobile/desktop */}
        <div className="mb-6">
          <ul className="space-y-3 font-space text-sm text-black/80 pl-4 list-disc marker:text-black">
            <li className="leading-relaxed">{project.desc[0]}</li>
          </ul>

          <AnimatePresence initial={false}>
            {isExpanded && project.desc.length > 1 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden mt-3"
              >
                <ul className="space-y-3 font-space text-sm text-black/80 pl-4 list-disc marker:text-black">
                  {project.desc.slice(1).map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {project.desc.length > 1 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-xs font-mono font-black uppercase text-black hover:text-[#10B981] flex items-center gap-1 select-none underline decoration-2 cursor-pointer decoration-black/40 hover:decoration-[#10B981] transition-colors"
            >
              {isExpanded ? "Hide Details [-]" : `Show Details [+] (${project.desc.length - 1} more)`}
            </button>
          )}
        </div>
      </div>

      {/* Tech Tags and Buttons at the bottom */}
      <div className="mt-auto">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techs.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="text-[10px] font-space font-bold text-black bg-[#F5F3EF] border-2 border-black px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - Flex Wrap for Mobile */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-black">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black bg-white border-2 border-black px-3 py-1.5 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 transition-all font-space"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-2 font-space font-black text-sm text-[#10B981] tracking-widest uppercase">
            <span className="w-4 h-[4px] bg-[#10B981]" />
            03 / Production Builds
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl tracking-tight text-black uppercase">
            Featured <span className="bg-[#F59E0B] text-black px-3 py-1 border-4 border-black inline-block transform -rotate-1">Projects</span>
          </h2>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

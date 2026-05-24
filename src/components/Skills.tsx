"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Bot, Cpu, Terminal, Folder, FolderOpen, Activity, Link } from "lucide-react";

// Brand Logo SVGs in official colors
function PythonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#3776AB" d="M11.966 2c-3.155 0-2.955 1.368-2.955 1.368L9.02 5.093h2.985v.421H7.81C6.275 5.514 5 6.74 5 8.275v2.92c0 1.536 1.157 2.762 2.692 2.762H9.02v-1.701c0-1.74 1.378-2.986 2.955-2.986h2.986V6.26c0-1.535-1.282-2.76-2.817-2.76H11.966V2z" />
      <path fill="#FFE873" d="M12.034 22c3.155 0 2.955-1.368 2.955-1.368V18.91h-2.985v-.421h4.195c1.535 0 2.81-1.226 2.81-2.762v-2.92c0-1.536-1.157-2.762-2.692-2.762h-1.328v1.701c0 1.74-1.378 2.986-2.955 2.986H9.034v3.076c0 1.535 1.282 2.76 2.817 2.76h.183V22z" />
      <circle cx="10.5" cy="3.5" r="0.5" fill="#fff" />
      <circle cx="13.5" cy="20.5" r="0.5" fill="#3776AB" />
    </svg>
  );
}

function CIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#00599C" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 9.88-8.48h-3.07a7 7 0 1 1 0-7.04h3.07A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function CppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#00599C" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 9.88-8.48h-3.07a7 7 0 1 1 0-7.04h3.07A10 10 0 0 0 12 2z" />
      <path fill="#00599C" d="M19 11h-1V10h-1v1h-1v1h1v1h1v-1h1v-1zm4 0h-1V10h-1v1h-1v1h1v1h1v-1h1v-1z" />
    </svg>
  );
}

function JavaScriptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path fill="#000000" d="M18.8 17.2c-.4.8-1 1.3-1.8 1.6-.8.3-1.7.5-2.6.5-1.1 0-2-.2-2.7-.7-.7-.5-1.1-1.2-1.3-2.1h2.5c.1.5.3.8.6 1.1.3.3.8.4 1.4.4.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.9 0-.4-.1-.7-.4-.9-.3-.2-.8-.4-1.5-.7-.9-.4-1.6-.7-2.1-1.1-.5-.4-.8-.9-.8-1.7 0-.7.3-1.3.8-1.7.5-.4 1.3-.6 2.3-.6.9 0 1.6.2 2.2.5.6.3 1 .8 1.2 1.5h-2.4c-.1-.4-.3-.6-.5-.8-.2-.1-.6-.2-1-.2-.4 0-.7.1-.9.2-.2.1-.3.3-.3.6 0 .3.1.5.3.7.2.2.7.4 1.4.7.9.4 1.6.8 2.1 1.2.5.4.8.9.8 1.7zM9.5 8h2.5v7.7c0 .7-.2 1.3-.6 1.7-.4.4-1 .6-1.9.6-.8 0-1.4-.2-1.8-.5-.4-.3-.7-.8-.8-1.5h2.4c.1.4.3.6.7.6.4 0 .6-.2.6-.7V8z" />
    </svg>
  );
}

function HtmlIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#E34F26" d="M2.5 21L1 2h22l-1.5 19L12 24z" />
      <path fill="#EF652A" d="M12 21.8l7.9-2.2L18.6 4H12z" />
      <path fill="#FFFFFF" d="M12 9.5H8.7l-.2-2.5H12V4.5H5.8l.7 7.5H12zM12 16.7l-.1.1-3.2-.9-.2-2.4H6l.4 4.9 5.6 1.5z" />
      <path fill="#EFEFEF" d="M12 9.5h3.5l-.3 3.8-3.2.9v-2.5l1.6-.4.2-1.8H12zM12 4.5h6.2l-.2 2.5H12zM12 16.8l5.6-1.5.7-7.8h-6.3z" />
    </svg>
  );
}

function CssIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#1572B6" d="M2.5 21L1 2h22l-1.5 19L12 24z" />
      <path fill="#33A9DC" d="M12 21.8l7.9-2.2L18.6 4H12z" />
      <path fill="#FFFFFF" d="M12 9.5H8.7l-.2-2.5H12V4.5H5.8l.7 7.5H12zM12 16.7l-.1.1-3.2-.9-.2-2.4H6l.4 4.9 5.6 1.5z" />
      <path fill="#EFEFEF" d="M12 9.5h3.5l-.3 3.8-3.2.9v-2.5l1.6-.4.2-1.8H12zM12 4.5h6.2l-.2 2.5H12zM12 16.8l5.6-1.5.7-7.8h-6.3z" />
    </svg>
  );
}

function YoloIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
      <rect x="2" y="2" width="12" height="12" rx="1" stroke="#EF4444" />
      <rect x="10" y="10" width="12" height="12" rx="1" stroke="#10B981" />
      <circle cx="8" cy="8" r="1.5" fill="#EF4444" />
      <circle cx="16" cy="16" r="1.5" fill="#10B981" />
      <path d="M2 14v4a2 2 0 0 0 2 2h4" stroke="#F59E0B" />
    </svg>
  );
}

function OpenCvIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <circle cx="12" cy="7.5" r="4.5" fill="none" stroke="#EF4444" strokeWidth="3.5" />
      <circle cx="7" cy="16" r="4.5" fill="none" stroke="#10B981" strokeWidth="3.5" />
      <circle cx="17" cy="16" r="4.5" fill="none" stroke="#3B82F6" strokeWidth="3.5" />
    </svg>
  );
}

function LamaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
      <path d="M3 21l6-6m4-8l4-4 4 4-4 4-4-4z" stroke="#EC4899" />
      <path d="M9 15c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0" stroke="#8B5CF6" strokeLinecap="round" />
      <circle cx="19" cy="5" r="1" fill="#EC4899" />
      <circle cx="15" cy="9" r="1" fill="#8B5CF6" />
    </svg>
  );
}

function NumpyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#013243" opacity="0.1" />
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#4DABCF" />
      <path d="M2 7v10l10 5V12L2 7z" fill="#013243" />
      <path d="M22 7v10l-10 5V12l10-5z" fill="#76B900" />
    </svg>
  );
}

function PandasIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <circle cx="6" cy="6" r="3.5" fill="#150458" />
      <circle cx="18" cy="6" r="3.5" fill="#150458" />
      <circle cx="12" cy="13" r="8" fill="#E20074" />
      <circle cx="12" cy="13.5" r="6.5" fill="#FFFFFF" />
      <ellipse cx="9" cy="12" rx="2" ry="2.5" fill="#150458" />
      <ellipse cx="15" cy="12" rx="2" ry="2.5" fill="#150458" />
      <circle cx="9.5" cy="11.5" r="0.7" fill="#FFFFFF" />
      <circle cx="14.5" cy="11.5" r="0.7" fill="#FFFFFF" />
      <polygon points="12,14.5 10.5,13.5 13.5,13.5" fill="#150458" />
    </svg>
  );
}

function MatplotlibIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="#11557c" />
      <path d="M5 19L9 11l4 5 6-9" stroke="#E24A35" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5" cy="19" r="1" fill="#E24A35" />
      <circle cx="9" cy="11" r="1" fill="#E24A35" />
      <circle cx="13" cy="16" r="1" fill="#E24A35" />
      <circle cx="19" cy="7" r="1" fill="#E24A35" />
    </svg>
  );
}

function PlaywrightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#2EAD33" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h3c1.66 0 3 1.34 3 3s-1.34 3-3 3h-1v2zm1-6H10v2h2c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </svg>
  );
}

function ChromiumIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <circle cx="12" cy="12" r="4.5" fill="#4285F4" />
      <path d="M12 2a10 10 0 0 0-7.6 3.5l3.8 6.5A4.5 4.5 0 0 1 12 7.5h7.5A10 10 0 0 0 12 2zm-7.6 4.3a10 10 0 0 0 .1 11.2l3.8-6.5a4.5 4.5 0 0 1 0-4.7l-3.9 0zm8.6 10.2A4.5 4.5 0 0 1 8.2 14l-3.8 6.5A10 10 0 0 0 12 22a10 10 0 0 0 8.5-4.8l-7.5-.7z" fill="#4285F4" />
    </svg>
  );
}



function BrowserAutoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#8B5CF6" />
      <path d="M2 8h20" stroke="#8B5CF6" />
      <circle cx="5" cy="5.5" r="0.5" fill="#8B5CF6" />
      <circle cx="7" cy="5.5" r="0.5" fill="#8B5CF6" />
      <circle cx="9" cy="5.5" r="0.5" fill="#8B5CF6" />
      <path d="M12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" stroke="#10B981" />
      <path d="M12 10v2M12 18v2M10 15H8M16 15h-2" stroke="#10B981" />
    </svg>
  );
}

function GitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#F05032" d="M22.6 11.4L12.6 1.4c-.6-.6-1.5-.6-2 0l-10 10c-.6.6-.6 1.5 0 2l10 10c.6.6 1.5.6 2 0l10-10c.6-.6.6-1.6 0-2zm-12.2 7c-.6.6-1.5.4-2-.2s-.8-1.5-.2-2.1c.4-.4 1-.6 1.5-.5V12c-.5-.1-.9-.4-1.2-.8l-2.4 1c-.1.5-.4.9-.8 1.1-.6.4-1.4.3-1.8-.2s-.5-1.3-.1-1.8c.4-.4 1-.6 1.5-.5l2.4-1c0-.1.1-.2.1-.3V7.2c.4-.3.9-.3 1.3 0v4.7c.5.2.9.6 1.1 1.1h3.4c.3-.4.8-.7 1.3-.7.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5c-.6 0-1.1-.3-1.3-.8h-3.4c-.2.4-.6.8-1.1.9v2z" />
    </svg>
  );
}

function LinuxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#000000" d="M12 2a4 4 0 0 0-4 4c0 1.5.5 3 1.5 4-2.5 1-4.5 3.5-4.5 6.5 0 1.5 1 2.5 2.5 2.5 1.5 0 2.5-.5 3.5-1.5a6 6 0 0 0 2 1 6 6 0 0 0 2-1c1 1 2 1.5 3.5 1.5 1.5 0 2.5-1 2.5-2.5 0-3-2-5.5-4-6.5.9-1 1.5-2.5 1.5-4a4 4 0 0 0-4-4z" />
      <path fill="#FFD133" d="M12 9a2 2 0 0 1-2-2 2 2 0 0 1 4 0 2 2 0 0 1-2 2z" />
      <circle cx="10" cy="5.5" r="0.7" fill="#FFFFFF" />
      <circle cx="14" cy="5.5" r="0.7" fill="#FFFFFF" />
      <circle cx="10" cy="5.7" r="0.3" fill="#000000" />
      <circle cx="14" cy="5.7" r="0.3" fill="#000000" />
      <ellipse cx="12" cy="15" rx="3.5" ry="4" fill="#FFFFFF" />
      <path fill="#FFA500" d="M11 18.5c-1 0-2 .5-2 1.5s1.5 1.5 3 1.5c1.5 0 3-.5 3-1.5s-1-1.5-2-1.5h-2z" />
    </svg>
  );
}

function WindowsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#00ADEF" d="M2.2 12L2 4.8l7.8-1v8.2H2.2zm9 0V3.5L22 2v10h-10.8zm10.8 1v8.5L11.2 20v-7h10.8zm-11.8 0v7L2 19.2l.2-6.2H10.2z" />
    </svg>
  );
}

function MacosIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#000000" d="M17.05 20.28c-.98.95-2.05 1.88-3.08 1.88-1.02 0-1.4-.62-2.58-.62-1.18 0-1.6.6-2.58.65-1.02.05-2.2-.98-3.22-1.96-2.1-2.02-3.7-5.69-3.7-9.12 0-5.46 3.55-8.35 7.02-8.35 1.1 0 2.12.67 2.8.67.67 0 1.9-.8 3.25-.8 1.4 0 2.68.75 3.38 1.95-2.9 1.75-2.45 5.58.6 6.8-1.1 2.8-2.5 5.5-3.8 7.37.02.05.02.05 0 0zM14.9 1.05c1-.9 2.2-1.1 3.2-1.1.1 1-.3 2.15-1.1 3-1 .9-2.2 1.1-3.2 1.1-.1-1.05.3-2.15 1.1-3z" />
    </svg>
  );
}

function CudaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} width="24" height="24">
      <path fill="#76B900" d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm1.6 15.4c-1.3.4-3.1.2-4.2-.7a3.8 3.8 0 0 1-1-3.8c.4-1.5 2-2.5 3.5-2.3a4.2 4.2 0 0 1 2.5 1.3 4.8 4.8 0 0 0-.6-.7 3.3 3.3 0 0 0-2.3-.9 3 3 0 0 0-3 2.8 3 3 0 0 0 .9 2.6c.9.9 2.5 1 3.4.6.5-.2.8-.5 1-1h-2.2v-1.2h3.5v3.4c-.5.4-1.2.6-1.5.8z" />
      <path fill="#76B900" d="M12 5.5a6.5 6.5 0 0 0-4.6 1.9 6.5 6.5 0 0 0 0 9.2 6.5 6.5 0 0 0 9.2 0 6.5 6.5 0 0 0 0-9.2A6.5 6.5 0 0 0 12 5.5zm0 1.2a5.3 5.3 0 0 1 3.7 1.5 5.3 5.3 0 0 1 0 7.6 5.3 5.3 0 0 1-7.6 0 5.3 5.3 0 0 1 0-7.6 5.3 5.3 0 0 1 3.9-1.5z" />
    </svg>
  );
}



interface SkillItem {
  name: string;
}

interface SkillSection {
  title: string;
  titleShort: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  borderClr: string;
  textClr: string;
  skills: SkillItem[];
}

const skillSections: SkillSection[] = [
  {
    title: "Programming Languages",
    titleShort: "Languages",
    icon: Code,
    color: "bg-[#3B82F6]",
    borderClr: "border-[#3B82F6]",
    textClr: "text-[#3B82F6]",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    title: "AI / Machine Learning",
    titleShort: "AI / ML",
    icon: Bot,
    color: "bg-[#8B5CF6]",
    borderClr: "border-[#8B5CF6]",
    textClr: "text-[#8B5CF6]",
    skills: [
      { name: "YOLOv11" },
      { name: "OpenCV" },
      { name: "LaMA Inpainting" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
    ],
  },
  {
    title: "Web & Automation",
    titleShort: "Web & Auto",
    icon: Cpu,
    color: "bg-[#10B981]",
    borderClr: "border-[#10B981]",
    textClr: "text-[#10B981]",
    skills: [
      { name: "Playwright" },
      { name: "Chromium Automation" },
      { name: "Browser Automation" },
    ],
  },
  {
    title: "Tools & Platforms",
    titleShort: "Tools",
    icon: Terminal,
    color: "bg-[#F59E0B]",
    borderClr: "border-[#F59E0B]",
    textClr: "text-[#F59E0B]",
    skills: [
      { name: "Git" },
      { name: "Linux" },
      { name: "Windows" },
      { name: "macOS" },
      { name: "CUDA" },
    ],
  },
];

const brandIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Python": PythonIcon,
  "C": CIcon,
  "C++": CppIcon,
  "HTML": HtmlIcon,
  "CSS": CssIcon,
  "YOLOv11": YoloIcon,
  "OpenCV": OpenCvIcon,
  "LaMA Inpainting": LamaIcon,
  "NumPy": NumpyIcon,
  "Pandas": PandasIcon,
  "Matplotlib": MatplotlibIcon,
  "Playwright": PlaywrightIcon,
  "Chromium Automation": ChromiumIcon,
  "Browser Automation": BrowserAutoIcon,
  "Git": GitIcon,
  "Linux": LinuxIcon,
  "Windows": WindowsIcon,
  "macOS": MacosIcon,
  "CUDA": CudaIcon,
};

const skillProjectMap: Record<string, { projects: string[]; description: string; metricName: string; metricValue: string; efficiency: number }> = {
  "Python": {
    projects: ["AI Watermark Removal Tool", "Web Automation System", "Python TTS Converter"],
    description: "Core backend language used for deep learning pipelines, script automation, and CLI development.",
    metricName: "COMPILER_EXEC",
    metricValue: "Py3.11 / CPython",
    efficiency: 98,
  },
  "C": {
    projects: ["Embedded Systems Programming", "Low-Level System Architecture"],
    description: "Used for memory-efficient scripting, microcontrollers, and performance-critical hardware interfacing.",
    metricName: "OPTIMIZATION",
    metricValue: "GCC -O3 / Native",
    efficiency: 95,
  },
  "C++": {
    projects: ["Computer Vision Acceleration", "Data Structure Optimizations"],
    description: "Utilized for performance optimization, high-speed algorithms, and building efficient runtime layers.",
    metricName: "RUNTIME_LANG",
    metricValue: "C++20 / Clang",
    efficiency: 96,
  },
  "HTML": {
    projects: ["Static Landing Page", "Interactive Portfolio Website"],
    description: "Structuring responsive documents, semantic templates, and accessibility compliance.",
    metricName: "STRUCTURE",
    metricValue: "HTML5 / Semantic",
    efficiency: 100,
  },
  "CSS": {
    projects: ["Static Landing Page", "Interactive Portfolio Website"],
    description: "Designing advanced styling, responsive grid systems, and custom theme variables.",
    metricName: "RENDERING",
    metricValue: "Tailwind v4 / CSS3",
    efficiency: 94,
  },
  "YOLOv11": {
    projects: ["AI Watermark Removal Tool"],
    description: "State-of-the-art object detection model fine-tuned to locate text/logo watermarks in images.",
    metricName: "INF_SPEED",
    metricValue: "< 8.5ms / Image",
    efficiency: 97,
  },
  "OpenCV": {
    projects: ["AI Watermark Removal Tool"],
    description: "Image processing operations, masking, image manipulation, and spatial transforms.",
    metricName: "LIB_CORE",
    metricValue: "v4.9.0 / C++ backend",
    efficiency: 94,
  },
  "LaMA Inpainting": {
    projects: ["AI Watermark Removal Tool"],
    description: "Deep learning model trained to reconstruct image details behind removed watermark areas.",
    metricName: "RECON_LOSS",
    metricValue: "0.012 MSE",
    efficiency: 95,
  },
  "NumPy": {
    projects: ["AI Watermark Removal Tool", "Scientific plotting pipelines"],
    description: "Vectorized array calculations, pixel-matrix modifications, and algebraic transformations.",
    metricName: "MATH_ENGINE",
    metricValue: "Vectorized BLAS",
    efficiency: 99,
  },
  "Pandas": {
    projects: ["AI Watermark Removal Tool", "Web Automation System"],
    description: "Tabular data structuring, data cleanup, file parsing, and log auditing.",
    metricName: "IO_PARSE",
    metricValue: "Engine: Arrow / C++",
    efficiency: 93,
  },
  "Matplotlib": {
    projects: ["AI Watermark Removal Tool", "Telemetry dashboarding"],
    description: "Generating visual graphs, heatmaps, and spatial coordinate mappings.",
    metricName: "PLOT_FPS",
    metricValue: "60 FPS / Agg Renderer",
    efficiency: 90,
  },
  "Playwright": {
    projects: ["Web Automation System"],
    description: "End-to-end browser execution, scraping, and concurrent form-filling operations.",
    metricName: "TEST_LATENCY",
    metricValue: "Fully Headless / Chromium",
    efficiency: 98,
  },
  "Chromium Automation": {
    projects: ["Web Automation System"],
    description: "Configuring headless browser instances, stealth mode bypasses, and proxy pooling.",
    metricName: "STEALTH_INDEX",
    metricValue: "Bypassed / Cloudflare-proof",
    efficiency: 96,
  },
  "Browser Automation": {
    projects: ["Web Automation System"],
    description: "Workflow optimization systems designed to cut manual operator tasks down to script execution.",
    metricName: "TIME_SAVING",
    metricValue: "94.5% Reduction",
    efficiency: 99,
  },
  "Git": {
    projects: ["All Portfolio Projects", "Open Source Contributions"],
    description: "Distributed version control, branch management, and collaborative development flow.",
    metricName: "COLLAB_FLOW",
    metricValue: "Git Commit / Hooked",
    efficiency: 100,
  },
  "Linux": {
    projects: ["Static Landing Page (deployed on Linux VPS)"],
    description: "Configuring Ubuntu/Debian virtual private servers, systemd services, Nginx reverse proxies, and firewalls.",
    metricName: "UPTIME",
    metricValue: "99.99% / Systemd Managed",
    efficiency: 99,
  },
  "Windows": {
    projects: ["Local development & testing environment"],
    description: "Primary operating system for local coding, terminal administration, and graphical validation.",
    metricName: "ENV_DEV",
    metricValue: "Windows 11 / WSL2",
    efficiency: 95,
  },
  "macOS": {
    projects: ["Cross-platform compatibility testing"],
    description: "Building, compiling, and testing applications to verify UI and engine consistency across UNIX targets.",
    metricName: "COMPAT",
    metricValue: "Darwin / POSIX compliant",
    efficiency: 90,
  },
  "CUDA": {
    projects: ["AI Watermark Removal Tool"],
    description: "NVIDIA parallel computing platform utilized for local acceleration of neural network inference (YOLO/LaMA).",
    metricName: "ACCEL_MULT",
    metricValue: "18.4x speedup vs CPU",
    efficiency: 98,
  },
};

function SystemConsolePanel({ selectedSkillName }: { selectedSkillName: string }) {
  const [clock, setClock] = useState("");
  const skillData = skillProjectMap[selectedSkillName] || {
    projects: ["General Portfolio Development"],
    description: "Core developer competency and operational methodology.",
    metricName: "STATUS",
    metricValue: "OPERATIONAL",
    efficiency: 95,
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      setClock(timeStr);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const progressBlocks = Math.floor(skillData.efficiency / 10);
  const progressBar = "█".repeat(progressBlocks) + "░".repeat(10 - progressBlocks);

  return (
    <div className="w-full border-4 border-black bg-black text-[#10B981] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col font-mono text-xs select-none">
      {/* Terminal Title Bar */}
      <div className="border-b-4 border-black bg-[#1A1A1A] p-2 flex items-center justify-between text-[#888]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black inline-block" />
          <span className="ml-2 text-[10px] font-bold text-white uppercase tracking-wider">CONSOLE // AMIT_SYS_LOG</span>
        </div>
        <div className="text-[10px] font-bold bg-black/40 px-2 py-0.5 border border-white/10 text-[#27C93F]">
          [{clock}] ONLINE
        </div>
      </div>

      {/* Screen Frame */}
      <div className="p-4 sm:p-5 flex-1 relative overflow-hidden bg-[#0A0A0C]">
        {/* Subtle Scanlines effect */}
        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-[0.04]" />

        {/* Content Box */}
        <div className="flex flex-col gap-3.5 relative z-10">
          <div className="text-[#FFB86C] font-bold animate-pulse text-[11px] sm:text-xs">
            &gt; ANALYZING TARGET NODE: {selectedSkillName.toUpperCase()}
          </div>
          
          <div className="h-[2px] bg-[#10B981]/20 w-full" />

          {/* Core Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-[11px] sm:text-xs text-white/90">
            <div>
              <span className="text-[#888]">[IDENT] :</span> {selectedSkillName}
            </div>
            <div>
              <span className="text-[#888]">[METRIC] :</span> <span className="text-[#00E5FF] font-bold">{skillData.metricName}</span>
            </div>
            <div>
              <span className="text-[#888]">[VAL] :</span> <span className="text-[#F1FA8C]">{skillData.metricValue}</span>
            </div>
            <div>
              <span className="text-[#888]">[STATUS] :</span> <span className="text-[#50FA7B] font-bold">READY</span>
            </div>
          </div>

          <div className="h-[1px] bg-[#10B981]/20 w-full" />

          {/* Description */}
          <div className="text-white/80 leading-relaxed text-[11px] sm:text-xs">
            <span className="text-[#FF79C6] font-bold">[DESC]:</span> {skillData.description}
          </div>

          <div className="h-[1px] bg-[#10B981]/20 w-full" />

          {/* Link Project Modules */}
          <div>
            <span className="text-[#FF79C6] font-bold block mb-2">[ASSOCIATED_BUILDS]:</span>
            <ul className="space-y-1.5 text-white/85">
              {skillData.projects.map((proj, pIdx) => (
                <li key={pIdx} className="flex items-center gap-2 group/link">
                  <span className="text-[#8B5CF6]">&gt;&gt;</span>
                  <a
                    href="#projects"
                    className="hover:text-[#00E5FF] hover:underline flex items-center gap-1 transition-colors"
                  >
                    {proj}
                    <Link className="w-3 h-3 text-[#888] opacity-50 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[2px] bg-[#10B981]/20 w-full" />

          {/* Efficiency Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] sm:text-xs">
            <span className="text-[#FF79C6] font-bold">[ENGINE_EFFICIENCY]:</span>
            <div className="flex items-center gap-2">
              <span className="text-[#50FA7B]">{progressBar}</span>
              <span className="text-white font-bold bg-[#1A1A1A] border border-[#333] px-1.5 py-0.5 text-[10px]">
                {skillData.efficiency}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("Python");
  const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({
    0: true, // First category expanded by default
  });

  // Automatically expand a category if it contains the hovered/selected skill
  const selectSkill = (skillName: string, catIdx: number) => {
    setSelectedSkill(skillName);
    setExpandedCategories(prev => ({
      ...prev,
      [catIdx]: true
    }));
  };

  const toggleCategory = (idx: number) => {
    setExpandedCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      {/* Neo-Brutalist Grid Overlay in background */}
      <div className="absolute inset-0 neo-dot-grid opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-2 font-space font-black text-sm text-[#10B981] tracking-widest uppercase">
            <span className="w-4 h-[4px] bg-[#10B981]" />
            02 / Core Capabilities
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl tracking-tight text-black uppercase">
            Skills & <span className="bg-[#10B981] text-black px-3 py-1 border-4 border-black inline-block transform rotate-1">Technologies</span>
          </h2>
        </div>

        {/* Tree layout & Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left / Tech Tree Graph (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col">
            
            {/* System Root Node */}
            <div className="flex justify-center mb-10 w-full">
              <div className="px-5 py-3 border-4 border-black bg-black text-[#10B981] font-mono text-xs sm:text-sm uppercase font-black tracking-wider relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] select-none">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping mr-2.5 align-middle" />
                SYSTEM_ROOT // AMIT_CORE_v1.0
              </div>
            </div>

            {/* Tree branches container */}
            <div className="relative pl-4 sm:pl-6 border-l-4 border-black ml-4 sm:ml-8 flex flex-col gap-6">
              
              {/* Category Node List */}
              {skillSections.map((section, catIdx) => {
                const isExpanded = !!expandedCategories[catIdx];
                const CatIcon = section.icon;

                return (
                  <div key={catIdx} className="relative flex flex-col">
                    
                    {/* Horizontal Branch Connector Line to Category */}
                    <div className="absolute top-[26px] -left-4 sm:-left-6 w-4 sm:w-6 h-[4px] bg-black" />

                    {/* Category Block Header */}
                    <div
                      onClick={() => toggleCategory(catIdx)}
                      className={`flex items-center justify-between p-3 border-4 border-black bg-[#F5F3EF] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 transition-all cursor-pointer select-none group/cat`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 border-2 border-black ${section.color} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                          <CatIcon className="w-4 h-4 text-black" />
                        </div>
                        <span className="font-space font-black text-xs sm:text-sm uppercase tracking-wide text-black">
                          {section.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-black/60 bg-black/5 px-2 py-0.5 border border-black/10 rounded-sm">
                          [{section.skills.length} NODES]
                        </span>
                        {isExpanded ? (
                          <FolderOpen className="w-4 h-4 text-black" />
                        ) : (
                          <Folder className="w-4 h-4 text-black" />
                        )}
                      </div>
                    </div>

                    {/* Collapsible Sub-Skills Branch Tree */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          {/* Inner Vertical dashed line connecting child skills */}
                          <div className="relative pl-6 sm:pl-8 mt-4 ml-4 sm:ml-6 flex flex-col gap-3">
                            
                            {section.skills.map((skill, sIdx) => {
                              const isSelected = selectedSkill === skill.name;
                              const SkillIcon = brandIconMap[skill.name] || Code;
                              const isLast = sIdx === section.skills.length - 1;

                              return (
                                <div key={skill.name} className="relative flex items-center">
                                  
                                  {/* Custom connector segments: vertical lines that terminate on the last item */}
                                  <div className={`absolute left-0 w-[4px] bg-black/25 ${isLast ? 'top-0 h-1/2' : 'top-0 bottom-0'}`} />
                                  
                                  {/* Horizontal Connector Hook Line */}
                                  <div className="absolute top-1/2 left-0 w-6 h-[4px] bg-black/25 -translate-y-1/2" />

                                  {/* Skill Badge Node Card */}
                                  <div
                                    onClick={() => selectSkill(skill.name, catIdx)}
                                    onMouseEnter={() => setSelectedSkill(skill.name)}
                                    className={`ml-6 px-3 py-2 border-2 border-black flex items-center gap-2.5 cursor-pointer transition-all duration-150 relative select-none rounded-none
                                      ${isSelected 
                                        ? `bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px] font-bold ${section.borderClr}`
                                        : 'bg-white/75 hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] border-black/40'
                                      }
                                    `}
                                  >
                                    {/* Active Path Light */}
                                    {isSelected && (
                                      <span className={`absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full border border-black ${section.color} animate-pulse`} />
                                    )}
                                    <SkillIcon className="w-4 h-4 shrink-0" />
                                    <span className="font-space font-black text-xs text-black tracking-tight">
                                      {skill.name}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right / Console Telemetry Panel (2 cols on desktop) */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="flex flex-col gap-4">
              {/* Little info label above console */}
              <div className="flex items-center gap-2 font-mono text-[10px] text-black/50 uppercase font-black tracking-wider select-none px-1">
                <Activity className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                SYSTEM TELEMETRY DISPLAY UNIT
              </div>
              
              <SystemConsolePanel selectedSkillName={selectedSkill} />
              
              {/* Micro instructions */}
              <div className="font-mono text-[9px] text-black/40 leading-normal px-1">
                Hover or tap nodes in the Tech Tree on the left to inspect variables, compile metrics, and project linkages in real-time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { Cpu, ShieldCheck, Clock, Globe, Wifi } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [localTime, setLocalTime] = useState("");
  const [utcTime, setUtcTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
    const updateClocks = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString());
      setUtcTime(now.toISOString().slice(11, 19) + " UTC");
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 border-t-4 border-black bg-white pt-20 pb-10 px-6 md:px-12 font-space overflow-hidden text-black">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b-2 border-black">
          
          {/* Column 1: Identity & Availability Beacon */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-space font-black text-2xl tracking-wider text-black">
                AMIT<span className="text-[#10B981]">.</span>RAJ
              </span>
              <p className="font-space text-sm text-black/80 max-w-sm leading-relaxed">
                Dual-Degree Engineering Student · B.Tech in ECE & BS in Data Science at IIT Madras. Specializing in computer vision models and web automation architectures.
              </p>
            </div>

            {/* Pulsing Availability Beacon */}
            <div className="flex items-center gap-3 p-3.5 border-2 border-black bg-yellow-100 text-black font-mono text-[10px] w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981] border border-black"></span>
              </span>
              <span className="tracking-wider uppercase">STATUS: ACTIVE FOR INTERNSHIPS</span>
            </div>

            {/* Social channels */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 border-2 border-black bg-white text-black hover:bg-yellow-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 border-2 border-black bg-white text-black hover:bg-yellow-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Protocol links */}
          <div className="md:col-span-3 flex flex-col gap-6 md:pl-8">
            <span className="font-mono text-[10px] text-black/60 uppercase tracking-widest font-extrabold">
              {"// Navigation Protocols"}
            </span>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-space text-sm text-black hover:text-[#10B981] transition-all duration-200 flex items-center gap-1.5 group w-fit font-bold"
                >
                  <span className="font-mono text-[10px] text-black/60 transition-colors duration-200 group-hover:text-[#10B981] group-hover:translate-x-1 shrink-0">
                    &gt;
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Cyber Dashboard Diagnostics */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <span className="font-mono text-[10px] text-black/60 uppercase tracking-widest font-extrabold">
              {"// System Diagnostics"}
            </span>
            
            <div className="bg-white p-4 border-4 border-black font-mono text-[11px] text-black flex flex-col gap-3 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              
              {/* Region */}
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-black" />
                  <span>HOST_NODE:</span>
                </div>
                <span className="text-black font-black">IIT_MADRAS // IND</span>
              </div>

              {/* Time displays */}
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  <span>LOCAL_CLOCK:</span>
                </div>
                <span className="text-black font-black tracking-wider">
                  {mounted ? localTime : "--:--:--"}
                </span>
              </div>
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-black" />
                  <span>UTC_ZONE:</span>
                </div>
                <span className="text-[#8B5CF6] font-black tracking-wider">
                  {mounted ? utcTime : "--:--:-- UTC"}
                </span>
              </div>

              {/* SSL Status */}
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>ENCRYPTION:</span>
                </div>
                <span className="text-[#10B981] font-black tracking-wide">SECURE (SSL_HTTPS)</span>
              </div>

              {/* Connection Type */}
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="flex items-center gap-2">
                  <Wifi className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>LINK_TUNNEL:</span>
                </div>
                <span className="text-[#3B82F6] font-black tracking-wide">PORTAL_ON</span>
              </div>

              {/* FPS Stat */}
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-black" />
                  <span>REFRESH_RATE:</span>
                </div>
                <span className="text-black font-black flex items-center gap-1">
                  60.0 FPS <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                </span>
              </div>

              {/* Technology badges grid */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="px-1.5 py-0.5 text-[9px] font-bold border-2 border-black bg-[#F5F3EF] text-black">
                  NEXT_15
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold border-2 border-black bg-[#F5F3EF] text-black">
                  TS_5
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold border-2 border-black bg-[#F5F3EF] text-black">
                  TAILWIND_4
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold border-2 border-black bg-[#F5F3EF] text-black">
                  MOTION_11
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-mono text-[10px] text-black/70">
          <div>
            &copy; {new Date().getFullYear()} AMIT RAJ. ALL RIGHTS RESERVED. TRANSMITTED VIA SECURE HTTPS.
          </div>
          <div className="flex items-center gap-1.5 uppercase font-black text-black">
            <span className="w-2.5 h-2.5 rounded-none border border-black bg-[#10B981]" />
            PROTOCOL_SECURE_PORT_443 // SHIELD_ON
          </div>
        </div>

      </div>
    </footer>
  );
}

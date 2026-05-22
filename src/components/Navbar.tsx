"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for glassmorphism background
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active section with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus on middle portion of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-black z-[100]">
        <div
          className="h-full bg-[#10B981]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#F5F3EF] border-b-4 border-black ${
          scrolled ? "py-3 shadow-md" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            className="flex items-center gap-2 group font-space font-extrabold text-xl tracking-wider text-black"
          >
            <span className="relative">
              AMIT
              <span className="text-[#10B981] font-extrabold">.</span>
              RAJ
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 bg-white p-1 border-2 border-black">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1 text-sm font-bold font-space tracking-wide transition-all border-2 ${
                    isActive
                      ? "bg-[#10B981] border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      : "border-transparent text-black hover:bg-yellow-100 hover:border-black"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#F59E0B] border-2 border-black px-4 py-2 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0 transition-all font-space group shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Contact Me
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden border-2 border-black bg-white p-2 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] bottom-0 z-40 md:hidden bg-[#F5F3EF] border-t-4 border-black flex flex-col justify-between p-8"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-space font-extrabold text-2xl tracking-wide flex items-center justify-between border-2 border-black p-3 transition-all ${
                      isActive ? "bg-[#10B981] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" : "bg-white text-black hover:bg-yellow-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Footer Links */}
            <div className="flex flex-col gap-4">
              <p className="text-black/60 text-xs font-space font-bold tracking-widest uppercase">
                Dual Degree Engineering Student · IIT Madras
              </p>
              <div className="h-[2px] bg-black w-full" />
              <div className="flex flex-col gap-2 text-sm text-black font-mono font-bold">
                <span>amit.stu24.eng@student.mdu.ac.in</span>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]">GH</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#10B981]">LN</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

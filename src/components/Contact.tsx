"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addLog = (msg: string) => {
    setTerminalLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setTerminalLogs([]);

    // Simulate cybernetic transmitting logs
    addLog("INITIALIZING MESSAGE PROTOCOL...");
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    addLog("RESOLVING IP STACK & SECURE PORT...");
    await new Promise((resolve) => setTimeout(resolve, 600));

    addLog("ENCRYPTING DATA CORRECTIONS...");
    await new Promise((resolve) => setTimeout(resolve, 700));

    addLog("TRANSMITTING TO HOST: amit.stu24.eng@student.mdu.ac.in...");
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitStatus("success");
    addLog("SYS_MSG: SECURE TRANSMISSION COMPLETED! [OK]");

    // Reset Form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-2 font-space font-black text-sm text-[#10B981] tracking-widest uppercase">
            <span className="w-4 h-[4px] bg-[#10B981]" />
            05 / Channels
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl tracking-tight text-black uppercase">
            Get In <span className="bg-[#10B981] text-black px-3 py-1 border-4 border-black inline-block transform -rotate-1">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h3 className="font-space font-black text-2xl md:text-3xl text-black uppercase">
                Let’s collaborate on intelligent systems.
              </h3>
              <p className="font-space text-sm md:text-base text-black/80 leading-relaxed">
                Whether you need a custom computer vision model, full-scale browser automation frameworks, or a clean full-stack interface, let&apos;s connect and build something smart.
              </p>
            </motion.div>

            {/* Direct Channels */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:amit.stu24.eng@student.mdu.ac.in"
                className="flex items-center gap-4 p-4 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 group"
              >
                <div className="p-3 bg-[#F59E0B] border-2 border-black rounded-none text-black group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-black/60 uppercase tracking-widest font-bold">
                    Email Channel
                  </span>
                  <span className="font-space text-sm md:text-base text-black font-black break-all">
                    amit.stu24.eng@student.mdu.ac.in
                  </span>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 border-4 border-black bg-white text-black hover:bg-yellow-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 border-4 border-black bg-white text-black hover:bg-yellow-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-6 md:p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[10px] text-black uppercase tracking-wider font-extrabold">
                      Your Identity
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Jane Doe"
                      className="px-4 py-3 bg-white border-2 border-black focus:bg-yellow-50 transition-all duration-200 text-sm text-black placeholder-zinc-500 outline-none rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[10px] text-black uppercase tracking-wider font-extrabold">
                      Return Frequency (Email)
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., client@system.com"
                      className="px-4 py-3 bg-white border-2 border-black focus:bg-yellow-50 transition-all duration-200 text-sm text-black placeholder-zinc-500 outline-none rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-mono text-[10px] text-black uppercase tracking-wider font-extrabold">
                    Interaction Domain (Subject)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g., Computer Vision Project"
                    className="px-4 py-3 bg-white border-2 border-black focus:bg-yellow-50 transition-all duration-200 text-sm text-black placeholder-zinc-500 outline-none rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-[10px] text-black uppercase tracking-wider font-extrabold">
                    Encrypted Payload (Message)
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe the collaboration parameters..."
                    className="px-4 py-3 bg-white border-2 border-black focus:bg-yellow-50 transition-all duration-200 text-sm text-black placeholder-zinc-500 outline-none resize-none rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 border-4 border-black bg-[#10B981] hover:bg-[#10B981]/90 transition-all duration-200 font-space font-black text-black uppercase tracking-wide flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      Transmit Signal
                      <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Terminal Logs View for Submission Feedback */}
              <AnimatePresence>
                {terminalLogs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 bg-[#F5F3EF] border-2 border-black font-mono text-[11px] text-black flex flex-col gap-1.5 overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="flex items-center justify-between border-b border-black pb-2 mb-1.5 text-[9px] font-black uppercase tracking-widest text-black/60">
                      <div className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                        Secure Transmission Console
                      </div>
                      {submitStatus === "success" && (
                        <span className="text-[#10B981] font-bold">Transmit Success [OK]</span>
                      )}
                    </div>
                    {terminalLogs.map((log, lIdx) => (
                      <div key={lIdx} className="leading-relaxed font-bold">
                        {log}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

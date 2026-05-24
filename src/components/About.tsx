"use client";

import { motion } from "framer-motion";

import { GraduationCap, Brain } from "lucide-react";

const educationList = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Maharshi Dayanand University (MDU), Rohtak",
    period: "2024 – Present",
    desc: "Focusing on hardware-software interfaces, signal processing, embedded systems, and communication frameworks.",
  },
  {
    degree: "BS in Data Science & Applications",
    institution: "IIT Madras",
    period: "2024 – Present",
    desc: "Focusing on machine learning algorithms, database structures, statistical inference.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-black border-2 border-black bg-white px-2.5 py-1 w-fit font-bold tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2.5 h-2.5 bg-black border border-black inline-block" />
            01 // Identity
          </div>
          <h2 className="font-space font-extrabold text-4xl md:text-5xl tracking-tight text-black mt-2">
            About <span className="bg-[#10B981] px-2.5 py-0.5 border-4 border-black text-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">Myself</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Professional Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="p-8 border-4 border-black relative overflow-hidden flex flex-col justify-between h-full bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#10B981] border-2 border-black text-black">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="font-space font-extrabold text-xl text-black">AI & Automation Architect</h3>
                </div>

                <p className="font-general text-sm text-black/85 leading-relaxed mb-4 font-bold">
                  A dual-degree engineering student passionate about Artificial Intelligence, Computer Vision, Web automation, and scalable software systems. Experienced in developing freelance AI tools, browser automation systems, and full-stack applications focused on performance optimization and production-ready deployment.
                </p>

                <p className="font-general text-sm text-black/60 leading-relaxed font-bold">
                  By bridging the gap between hardware engineering (ECE) and computational statistics (Data Science), I bring a holistic understanding of how high-performance systems and intelligent algorithms interact to solve complex physical-digital automation challenges.
                </p>
              </div>
            </div>

            {/* Microstats banner */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border-4 border-black text-center bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-space text-2xl font-black text-black block">2</span>
                <span className="font-mono text-[10px] font-extrabold text-black/60 uppercase tracking-wider">Degrees Pursued</span>
              </div>
              <div className="p-4 border-4 border-black text-center bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-space text-2xl font-black text-[#10B981] block">50+</span>
                <span className="font-mono text-[10px] font-extrabold text-black/60 uppercase tracking-wider">Automation Tabs Run</span>
              </div>
              <div className="p-4 border-4 border-black text-center bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-space text-2xl font-black text-[#F59E0B] block">10k+</span>
                <span className="font-mono text-[10px] font-extrabold text-black/60 uppercase tracking-wider">Processed Images</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <div className="p-8 border-4 border-black relative h-full bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#F59E0B] border-2 border-black text-black">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-space font-extrabold text-xl text-black">Academic Journey</h3>
              </div>

              {/* Timeline Track */}
              <div className="relative pl-6 md:pl-8 border-l-4 border-black flex flex-col gap-10">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Neo Timeline Node */}
                    <div className="absolute -left-[32px] md:-left-[40px] top-1 w-5 h-5 bg-[#10B981] border-2 border-black group-hover:scale-110 transition-transform duration-300" />

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <h4 className="font-space font-extrabold text-sm md:text-base text-black group-hover:text-[#10B981] transition-colors leading-snug">
                          {edu.degree}
                        </h4>
                        <span className="font-mono text-[10px] text-black bg-[#10B981]/20 border-2 border-black px-2 py-0.5 w-fit font-bold select-none mt-1">
                          {edu.period}
                        </span>
                      </div>
                      
                      <div className="font-general text-xs text-black/80 font-bold">
                        {edu.institution}
                      </div>

                      <p className="font-general text-xs text-black/60 font-semibold leading-relaxed mt-1">
                        {edu.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

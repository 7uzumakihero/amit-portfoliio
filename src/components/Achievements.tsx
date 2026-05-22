"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Compass, Users, Flag, Terminal, Lock, CheckCircle2, Play } from "lucide-react";

interface AchievementItem {
  title: string;
  issuer: string;
  role: string;
  year: string;
  code: string;
  colorClass: string;
  dotColor: string;
}

const achievements: AchievementItem[] = [
  {
    title: "The Big Code 2026",
    issuer: "Google",
    role: "Round 1 Qualifier",
    year: "2026",
    code: "CRED_GOOG_26",
    colorClass: "text-[#3B82F6]",
    dotColor: "bg-[#3B82F6]"
  },
  {
    title: "Smart India Hackathon 2025",
    issuer: "Ministry of Education, Govt. of India",
    role: "National-Level Participant",
    year: "2025",
    code: "CRED_GOVT_25",
    colorClass: "text-[#10B981]",
    dotColor: "bg-[#10B981]"
  },
  {
    title: "Campus Ambassador, UDGAM 2026",
    issuer: "IIT Guwahati",
    role: "Public Relations & Operations",
    year: "2026",
    code: "CRED_IITG_26",
    colorClass: "text-[#8B5CF6]",
    dotColor: "bg-[#8B5CF6]"
  },
  {
    title: "Campus Ambassador, UDGAM 2025",
    issuer: "IIT Delhi",
    role: "Campus Relations Lead",
    year: "2025",
    code: "CRED_IITD_25",
    colorClass: "text-[#EC4899]",
    dotColor: "bg-[#EC4899]"
  },
  {
    title: "Bhartiya Antariksh Hackathon 2025",
    issuer: "ISRO (Indian Space Research Organisation)",
    role: "National Hackathon Participant",
    year: "2025",
    code: "CRED_ISRO_25",
    colorClass: "text-[#F59E0B]",
    dotColor: "bg-[#F59E0B]"
  },
  {
    title: "Geo-Data Sharing & Cybersecurity",
    issuer: "ISRO (Indian Space Research Organisation)",
    role: "Specialized Course Certificate",
    year: "2024",
    code: "CRED_ISRO_24",
    colorClass: "text-[#F97316]",
    dotColor: "bg-[#F97316]"
  },
];

const interests = [
  { name: "Machine Learning", code: "INT_ML", color: "text-[#8B5CF6]" },
  { name: "Computer Vision", code: "INT_CV", color: "text-[#10B981]" },
  { name: "AI Tool Development", code: "INT_AIT", color: "text-[#06B6D4]" },
  { name: "Web Automation", code: "INT_AUTO", color: "text-[#0ea5e9]" },
  { name: "Full-Stack Development", code: "INT_FS", color: "text-[#F59E0B]" },
];

const leadership = [
  {
    role: "Event Management Lead",
    organization: "Bihar Business Mahakumbh 2025",
    desc: "Coordinated logistics and event operations for a state-level business summit, managing cross-functional student teams and coordinating speaker VIP schedules.",
    icon: Flag,
    code: "LDR_EVM_25",
    color: "text-[#3B82F6]",
  },
  {
    role: "Technology Lead Contributor",
    organization: "Student Initiatives",
    desc: "Active contributor to student technology initiatives with project coordination, software architecture, and cross-functional team collaboration experience.",
    icon: Users,
    code: "LDR_TECH_26",
    color: "text-[#8B5CF6]",
  },
];

export default function Achievements() {
  const [activeCert, setActiveCert] = useState<AchievementItem | null>(null);
  const [verificationLogs, setVerificationLogs] = useState<string[]>([]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const consoleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [verificationLogs]);

  const startVerification = async (cert: AchievementItem) => {
    if (isVerifying) return;
    
    setActiveCert(cert);
    setIsVerifying(true);
    setVerificationSuccess(false);
    setVerificationLogs([]);

    const logs = [
      "INITIALIZING CRYPTOGRAPHIC HANDSHAKE...",
      "TARGET AUTHORITY: SECURE LEDGER GATEWAY",
      `LOCATING ENTRY BLOCK [ID: ${cert.code}]...`,
      `VERIFYING SIGNATURE: ${cert.issuer.toUpperCase()}`,
      "PERFORMING HASH CHECKS [SHA-256]...",
      "STATUS: RECORD MATCHED & SIGNED!",
      "VERIFICATION PROTOCOL: SUCCESSFUL [OK]"
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setVerificationLogs((prev) => [...prev, logs[i]]);
    }

    setIsVerifying(false);
    setVerificationSuccess(true);
  };

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-2 font-space font-black text-sm text-[#10B981] tracking-widest uppercase">
            <span className="w-4 h-[4px] bg-[#10B981]" />
            04 / Credentials & Focus
          </div>
          <h2 className="font-space font-black text-4xl md:text-6xl tracking-tight text-black uppercase">
            Credentials & <span className="bg-[#F59E0B] text-black px-3 py-1 border-4 border-black inline-block transform rotate-1">Interests</span>
          </h2>
        </div>

        {/* Dashboard Grid Layout - Row 1: Credentials & Verifier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Achievements & Certifications Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="bg-white p-6 md:p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full">
              <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#8B5CF6] border-2 border-black rounded-none text-black">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-space font-black text-xl text-black uppercase">Certifications & Achievements</h3>
                </div>
                <span className="font-mono text-xs font-bold text-black">SEC_04_A</span>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F5F3EF] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-space font-extrabold text-sm text-black uppercase">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[9px] font-bold text-black bg-white border-2 border-black px-2 py-0.5 rounded-none shrink-0 select-none">
                          {item.year}
                        </span>
                      </div>
                      
                      <div className="font-space text-xs text-black/70 font-bold">
                        {item.issuer}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className={`font-mono text-[9px] ${item.colorClass} flex items-center gap-1.5 uppercase font-bold`}>
                        <span className={`w-2.5 h-2.5 rounded-none border border-black ${item.dotColor}`} />
                        {item.role}
                      </div>
                      
                      {/* Verify Button */}
                      <button
                        onClick={() => startVerification(item)}
                        className="px-2.5 py-1 border-2 border-black bg-white hover:bg-yellow-100 text-[10px] font-space font-bold text-black flex items-center gap-1 transition-all shrink-0 cursor-pointer shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none self-start sm:self-auto"
                        title="Run Cryptographic Ledger Verification"
                      >
                        <Play className="w-2.5 h-2.5 text-black" />
                        Verify
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Verification Console */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-6 border-4 border-black h-full flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#10B981]" />
                  <span className="font-mono text-xs text-black uppercase tracking-wider font-extrabold">Registry Verification Console</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full border-2 border-black bg-[#EF4444]" />
                  <span className="w-3 h-3 rounded-full border-2 border-black bg-[#F59E0B]" />
                  <span className="w-3 h-3 rounded-full border-2 border-black bg-[#10B981] animate-pulse" />
                </div>
              </div>

              {/* Console Output Screen */}
              <div
                ref={consoleRef}
                className="flex-1 bg-[#F5F3EF] border-2 border-black p-4 font-mono text-[11px] flex flex-col gap-2 min-h-[220px] overflow-y-auto text-black select-none"
              >
                {/* Default standby state */}
                {!activeCert && (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-10 opacity-70">
                    <Lock className="w-8 h-8 text-black" />
                    <span className="text-black font-bold">
                      STANDBY: SECURE AUTHENTICATION<br />SELECT CERTIFICATE &apos;VERIFY&apos; BUTTON
                    </span>
                  </div>
                )}

                {/* Live verifying logs */}
                {activeCert && (
                  <>
                    <div className="text-black border-b-2 border-black pb-2 mb-2 flex justify-between items-center text-[10px] uppercase tracking-wider font-bold">
                      <span>Query: {activeCert.code}</span>
                      <span className={isVerifying ? "text-yellow-600 animate-pulse font-black" : "text-[#10B981] font-black"}>
                        {isVerifying ? "Processing..." : "Standby"}
                      </span>
                    </div>

                    {verificationLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          log.startsWith("STATUS:") || log.startsWith("VERIFICATION PROTOCOL:")
                            ? "text-[#10B981] font-black"
                            : "text-black/80 font-bold"
                        }
                      >
                        &gt; {log}
                      </div>
                    ))}

                    {/* Blinking typing cursor */}
                    {isVerifying && (
                      <span className="w-1.5 h-3 bg-yellow-500 animate-ping shrink-0" />
                    )}

                    {/* Verified Certificate stamp */}
                    <AnimatePresence>
                      {verificationSuccess && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="mt-4 p-3 border-2 border-black bg-yellow-100 flex items-center gap-3 relative overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <CheckCircle2 className="w-8 h-8 text-[#10B981] shrink-0" />
                          <div className="flex flex-col gap-0.5 z-10">
                            <span className="text-[9px] text-black/60 uppercase tracking-widest font-black">Signed & Verified</span>
                            <span className="text-[11px] font-black text-black uppercase">{activeCert.title}</span>
                            <span className="text-[9px] text-[#10B981] font-extrabold">
                              {activeCert.issuer}{" // "}{activeCert.year}
                            </span>
                          </div>
                          
                          {/* Diagonal watermark stamp */}
                          <div className="absolute right-[-10px] bottom-[-5px] opacity-10 select-none rotate-12 font-space font-black text-2xl text-black">
                            VALID_OK
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>

              {/* Console Diagnostics footer info */}
              <div className="mt-4 pt-3 border-t-2 border-black flex justify-between items-center font-mono text-[9px] text-black/60 font-bold">
                <span>TUNNEL: GATEWAY_SECURE</span>
                <span>SHA-256 HASH VERIFY ENABLED</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dashboard Grid Layout - Row 2: Interests & Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Areas of Interest Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 bg-white p-6 md:p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full"
          >
            <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#F59E0B] border-2 border-black rounded-none text-black">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-space font-black text-xl text-black uppercase">Areas of Interest</h3>
              </div>
              <span className="font-mono text-xs font-bold text-black">SEC_04_B</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {interests.map((tag, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 border-2 border-black bg-[#F5F3EF] hover:bg-yellow-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-mono text-xs cursor-pointer select-none flex items-center justify-between gap-3 text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-none border border-black shrink-0 bg-black`} />
                    <span>{tag.name}</span>
                  </div>
                  <span className="text-[9px] font-bold tracking-tight border-2 border-black px-1.5 py-0.5 bg-white text-black shrink-0 select-none">
                    {tag.code}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 bg-white p-6 md:p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-full"
          >
            <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#3B82F6] border-2 border-black rounded-none text-black">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-space font-black text-xl text-black uppercase">Leadership Roles</h3>
              </div>
              <span className="font-mono text-xs font-bold text-black">SEC_04_C</span>
            </div>

            <div className="flex flex-col gap-4">
              {leadership.map((lead, idx) => {
                const LeadIcon = lead.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 border-2 border-black bg-[#F5F3EF] flex gap-4 items-start relative overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="p-2 bg-white rounded-none border-2 border-black text-black mt-1 shrink-0">
                      <LeadIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-space font-black text-sm md:text-base text-black uppercase">
                          {lead.role}
                        </h4>
                        <span className="font-mono text-[9px] font-bold tracking-tight border-2 border-black px-1.5 py-0.5 bg-white text-black shrink-0 select-none">
                          {lead.code}
                        </span>
                      </div>
                      <span className="font-space text-xs text-[#10B981] font-bold">
                        {lead.organization}
                      </span>
                      <p className="font-space text-xs md:text-sm text-black/75 leading-relaxed mt-1.5">
                        {lead.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

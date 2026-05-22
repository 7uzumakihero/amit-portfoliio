import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full select-none overflow-x-hidden bg-[#F5F3EF] text-black">
      {/* Cinematic Cybernetic Shaders and Grid Particles */}
      <BackgroundEffects />

      {/* Floating Glassmorphism Navigation Bar */}
      <Navbar />

      {/* Structured Sections */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Section 00: Hero & 3D Interactive Model */}
        <Hero />

        {/* Section 01: Identity (About & Timeline) */}
        <About />

        {/* Section 02: Core Capabilities (Skills Matrix) */}
        <Skills />

        {/* Section 03: Production Builds (Featured Projects) */}
        <Projects />

        {/* Section 04: Achievements & Focus (Credentials & Tags) */}
        <Achievements />

        {/* Section 05: Channels (Contact Interface) */}
        <Contact />
      </main>

      {/* Futuristic Footer */}
      <Footer />
    </div>
  );
}

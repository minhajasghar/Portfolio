"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left relative z-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-400 mb-8 inline-block backdrop-blur-sm"
            >
              B.S. Artificial Intelligence
            </motion.span>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-bold tracking-tight mb-6 pb-2 bg-gradient-to-br from-white via-zinc-100 to-blue-500 bg-clip-text text-transparent leading-[1.2] whitespace-nowrap pr-2 drop-shadow-sm">
                Minhaj Asghar
              </h1>
            </div>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-zinc-400 mb-8 font-light tracking-tight leading-relaxed">
              <span className="text-blue-400 font-medium">AI Engineer</span> & <span className="text-blue-400 font-medium">Machine Learning</span> Developer
            </h2>
            
            <p className="text-zinc-400 mb-12 max-w-lg mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed">
              Building intelligent systems with Machine Learning, Computer Vision, and Generative AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center group shadow-xl shadow-white/10"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="/cv.pdf" 
                download="Minhaj_Asghar_CV.pdf"
                className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-semibold flex items-center gap-2 group backdrop-blur-sm"
              >
                Download CV
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform text-zinc-400 group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-blue-500/15 blur-[120px] rounded-full animate-pulse" />
              <div className="absolute -inset-4 bg-blue-600/5 blur-[40px] rounded-full" />
              
              {/* Image Frame */}
              <motion.div 
                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 group z-10 shadow-2xl"
              >
                <img 
                  src="/me.jpeg" 
                  alt="Minhaj Asghar" 
                  className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-[3px] border-b-[3px] border-blue-500/40 rounded-br-3xl z-20" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-[3px] border-t-[3px] border-white/10 rounded-tl-3xl z-0" />
              
              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/4 glass px-4 py-2 rounded-lg border border-white/10 shadow-xl z-30 animate-bounce-slow hidden md:block">
                <span className="text-xs font-bold text-blue-400">AI SPECIALIST</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

const coursework = [
  "Deep Learning & Neural Networks",
  "Computer Vision & Edge Inference",
  "Generative AI & Agent Architectures",
  "Data Structures & Algorithms",
  "Machine Learning & Pattern Recognition",
  "Database Systems & Cloud Deployments"
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Education" 
          subtitle="Academic foundation empowering my real-world engineering in Artificial Intelligence."
        />
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl border border-white/10 p-8 md:p-12 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden group shadow-2xl"
        >
          {/* Top subtle highlight line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            {/* Degree & University Details */}
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform flex-shrink-0 shadow-lg shadow-blue-500/5">
                <GraduationCap size={36} />
              </div>
              
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Final Year Undergraduate Student
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10 font-medium">
                    BS Artificial Intelligence
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                  Bachelor of Science in Artificial Intelligence
                </h3>
                
                <p className="text-lg md:text-xl text-blue-400/90 font-medium mb-3 flex items-center gap-2">
                  <span>Superior University, Lahore</span>
                </p>

                <div className="flex items-center gap-6 text-sm text-zinc-400 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-blue-400" />
                    2023 – 2027 (Expected Graduation)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={15} className="text-blue-400" />
                    Lahore, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA & Academic Standing Card */}
            <div className="flex-shrink-0 lg:text-right flex lg:flex-col items-center lg:items-end justify-between gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-yellow-400/90 text-xs font-semibold uppercase tracking-wider">
                <Award size={16} />
                <span>Academic Standing</span>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  3.39
                  <span className="text-zinc-500 text-lg font-medium"> / 4.0</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">Cumulative Grade Point Average</p>
              </div>
            </div>
          </div>

          {/* Core Focus & Key Coursework */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8 items-start">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-400" />
                Academic Overview
              </h4>
              <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                Currently in the final year of my Bachelor of Science in Artificial Intelligence at Superior University Lahore. Combining deep academic research in modern machine learning, multi-agent frameworks, and computer vision with active industry engineering as an AI Engineer at TNT Innovations.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-blue-400" />
                Key Coursework & Specializations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coursework.map((course) => (
                  <div 
                    key={course}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs md:text-sm text-zinc-300 hover:border-blue-500/20 hover:text-white transition-colors"
                  >
                    <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Stafflytics AI",
    description: "AI-powered business intelligence system for restaurants using computer vision and machine learning. Features real-time staff tracking, automated attendance, and performance analytics.",
    tags: ["Python", "YOLO", "Computer Vision", "ML"],
    flagship: true
  },
  {
    title: "SmartAttend AI",
    description: "Intelligent attendance and productivity system using computer vision. Implements real-time detection, zone-based activity tracking, and AI-powered assistant.",
    tags: ["OpenCV", "YOLO", "SQLite", "Flask"],
    flagship: true
  },
  {
    title: "Traffic Sign Recognition",
    description: "Deep learning model using CNNs to classify traffic signs with advanced preprocessing and augmentation techniques for high accuracy.",
    tags: ["Deep Learning", "CNN", "Flask", "Python"],
    flagship: false
  },
  {
    title: "PhishGuard",
    description: "Machine learning-based phishing URL detection system using feature engineering and classification to identify malicious links.",
    tags: ["ML", "Scikit-Learn", "Cybersecurity", "Flask"],
    flagship: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of AI systems built with a focus on real-world application."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 md:p-10 rounded-3xl border ${
                project.flagship 
                  ? 'border-blue-500/20 bg-blue-500/[0.03]' 
                  : 'border-white/5 bg-white/[0.01]'
              } flex flex-col h-full hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden`}
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  {project.flagship ? (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                      Flagship Project
                    </span>
                  ) : (
                    <div />
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-8 flex-grow leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 border border-white/5 group-hover:border-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

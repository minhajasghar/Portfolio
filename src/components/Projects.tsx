"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Stafflytics AI",
    description: "AI-powered business intelligence system for restaurants using computer vision and machine learning. Features real-time staff tracking, automated attendance, and performance analytics.",
    tags: ["Python", "YOLO", "Computer Vision", "ML"],
    flagship: true,
    githubUrl: "https://github.com/minhajasghar/Stafflytics-AI"
  },
  {
    title: "SmartAttend AI",
    description: "Intelligent attendance and productivity system using computer vision. Implements real-time detection, zone-based activity tracking, and AI-powered assistant.",
    tags: ["OpenCV", "YOLO", "SQLite", "Flask"],
    flagship: true,
    githubUrl: "https://github.com/minhajasghar/SmartAttend-AI"
  },
  {
    title: "Brandflux",
    description: "A brand content automation platform with client login. Clients submit their brand website and app, then receive ready-to-post content for Instagram, Facebook, and LinkedIn.",
    tags: ["Next.js", "AI", "Social Media", "Content"],
    flagship: true,
    githubUrl: "https://github.com/minhajasghar/Brandflux"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 md:p-10 rounded-3xl border ${project.flagship
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
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
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

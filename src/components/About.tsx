"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="About Me" 
          subtitle="Driving innovation through Artificial Intelligence and Machine Learning."
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl border border-white/5"
        >
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl">
            <span className="text-blue-400 font-semibold">AI Engineer</span> and final-year <span className="text-white font-medium">BS Artificial Intelligence student</span> at Superior University, Lahore (CGPA 3.39). 
            Currently engineering production-grade systems as an <span className="text-blue-400 font-semibold">AI Engineer at TNT Innovations</span>, I specialize in 
            <span className="text-white font-semibold"> multi-agent architectures, computer vision pipelines, and intelligent automation</span>{" "}
            that drive real business impact.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <h4 className="text-blue-500 font-bold text-3xl mb-1">3+</h4>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Years of Learning AI</p>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold text-3xl mb-1">1</h4>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">AI Engineer Role</p>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold text-3xl mb-1">3+</h4>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Internships Completed</p>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold text-3xl mb-1">10+</h4>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Projects Built</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

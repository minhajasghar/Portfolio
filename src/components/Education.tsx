"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Education" 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] flex items-start gap-6 max-w-3xl"
        >
          <div className="p-4 rounded-xl bg-blue-500/10 text-blue-500">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">BS Artificial Intelligence</h3>
            <p className="text-zinc-300 text-lg mb-2">Superior University</p>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span>2023 – 2027</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className="font-semibold text-blue-400">CGPA: 3.4</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

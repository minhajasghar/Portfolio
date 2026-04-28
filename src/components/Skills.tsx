"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Brain, Cpu, Database, Layout, PenTool, Terminal } from "lucide-react";

const skills = [
  {
    category: "Machine Learning",
    icon: <Brain className="text-blue-500" />,
    items: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Evaluation"]
  },
  {
    category: "Computer Vision",
    icon: <Cpu className="text-purple-500" />,
    items: ["OpenCV", "YOLO", "CNNs", "Face Recognition", "Image Processing"]
  },
  {
    category: "Libraries",
    icon: <Database className="text-green-500" />,
    items: ["Pandas", "NumPy", "scikit-learn", "TensorFlow"]
  },
  {
    category: "GenAI & Automation",
    icon: <PenTool className="text-yellow-500" />,
    items: ["LangChain", "RAG Systems", "AI Agents", "n8n"]
  },
  {
    category: "Backend & Data",
    icon: <Terminal className="text-red-500" />,
    items: ["API Integration", "SQL", "Data Preprocessing"]
  },
  {
    category: "Tools",
    icon: <Layout className="text-cyan-500" />,
    items: ["GitHub", "Jupyter", "Google Colab", "AWS"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="A comprehensive toolkit for developing intelligent solutions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-zinc-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

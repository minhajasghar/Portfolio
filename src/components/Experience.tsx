"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "AI Engineer",
    company: "TNT Innovations",
    period: "Onsite | April 2026 – Present",
    isCurrent: true,
    badge: "Current Role",
    bullets: [
      "Designing end-to-end AI pipelines for real-time video analytics and automated monitoring.",
      "Collaborating with the onsite engineering team to deploy CV models on edge hardware.",
      "Optimizing model inference performance for low-latency production environments."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Elevvo Pathways",
    period: "Remote | September 2025",
    isCurrent: false,
    badge: "Internship",
    bullets: [
      "Applying advanced ML models to large-scale real-world datasets for predictive analytics.",
      "Utilizing Scikit-learn and Pandas for feature engineering and performance optimization.",
      "Conducting hyperparameter tuning to achieve high-accuracy model benchmarks."
    ]
  },
  {
    role: "AI Research Intern",
    company: "Digital Empowerment Pakistan",
    period: "Remote | July 2024",
    isCurrent: false,
    badge: "Internship",
    bullets: [
      "Contributed to social impact initiatives by developing AI models for public welfare projects.",
      "Analyzed demographic data using Python to extract actionable insights for local communities.",
      "Assisted in the research and documentation of ethical AI implementation strategies."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Digicon Valley Software House",
    period: "Onsite | April 2024",
    isCurrent: false,
    badge: "Internship",
    bullets: [
      "Streamlined data preprocessing workflows for large-scale enterprise datasets.",
      "Created interactive data visualizations and dashboards using Matplotlib and Seaborn.",
      "Performed exploratory data analysis (EDA) to identify patterns and anomalies in raw data."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Professional Experience" 
          subtitle="My journey in AI engineering — from 3+ high-impact internships to engineering production AI solutions as an AI Engineer."
        />
        
        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative pl-8 border-l transition-colors ${
                exp.isCurrent ? 'border-blue-500' : 'border-white/10 hover:border-blue-500/50'
              }`}
            >
              <div className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full ${
                exp.isCurrent ? 'bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)] scale-125' : 'bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.4)]'
              }`} />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    exp.isCurrent 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold'
                      : 'bg-white/5 text-zinc-400 border border-white/10'
                  }`}>
                    {exp.badge}
                  </span>
                </div>
                <span className="text-sm font-medium text-blue-500">{exp.period}</span>
              </div>
              <p className="text-zinc-300 font-medium mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                    • {bullet}
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

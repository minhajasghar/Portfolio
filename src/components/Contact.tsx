"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Mail, MapPin, Send } from "lucide-react";
import { Github, Linkedin, Whatsapp } from "./SocialIcons";

const contactLinks = [
  { icon: <Mail size={20} />, label: "Email", value: "minhajasghar5@gmail.com", href: "mailto:minhajasghar5@gmail.com" },
  { icon: <Whatsapp size={20} />, label: "WhatsApp", value: "+92 332 0271743", href: "https://wa.me/923320271743" },
  { icon: <Github size={20} />, label: "GitHub", value: "github.com/minhajasghar", href: "https://github.com/minhajasghar" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/minhajasghar", href: "https://linkedin.com/in/minhajasghar" },
  { icon: <MapPin size={20} />, label: "Location", value: "Lahore, Pakistan", href: "#" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="Interested in collaborating or have a question? Feel free to reach out."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group"
              >
                <div className="p-3 rounded-lg bg-white/5 group-hover:text-blue-500 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">{link.label}</p>
                  <p className="text-zinc-300 font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-colors"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "success" && (
                <p className="text-green-500 text-sm font-medium text-center mt-4">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm font-medium text-center mt-4">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

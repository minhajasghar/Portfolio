"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const KNOWLEDGE_BASE = {
  about: "Minhaj Asghar is an AI Engineer and final-year BS Artificial Intelligence student at Superior University, Lahore (CGPA 3.39, 2023–2027). He has 3+ years of learning AI, completed 3+ internships, and currently works as an AI Engineer at TNT Innovations.",
  education: "Minhaj is in his final year of Bachelor of Science in Artificial Intelligence at Superior University, Lahore (2023–2027) with a CGPA of 3.39.",
  projects: "His flagship projects include Stafflytics AI (restaurant BI with YOLOv8-Pose), Chaty-Waty (multi-platform AI customer service system with CrewAI, Gemini API & Meta APIs built at TNT Innovations), and Brandflux (brand content generation platform).",
  skills: "He is proficient in Python, CrewAI, YOLO, OpenCV, TensorFlow, PyTorch, LangChain, and FastAPI/Next.js. He also has strong experience in edge CV deployment and SQL.",
  contact: "You can contact Minhaj via the contact form on this website or email him at minhajasghar5@gmail.com. He is also active on LinkedIn and GitHub.",
  experience: "Minhaj is currently working as an AI Engineer at TNT Innovations, where he designs real-time video analytics and multi-agent systems. Prior to this role, he completed 3+ internships in Machine Learning, AI Research, and Data Science."
};

const getLocalResponse = (query: string): string => {
  const q = query.toLowerCase();
  if (q.includes("project") || q.includes("work") || q.includes("chaty")) return KNOWLEDGE_BASE.projects;
  if (q.includes("education") || q.includes("university") || q.includes("gpa") || q.includes("degree") || q.includes("study") || q.includes("student")) return KNOWLEDGE_BASE.education;
  if (q.includes("about") || q.includes("who is") || q.includes("role") || q.includes("title")) return KNOWLEDGE_BASE.about;
  if (q.includes("skill") || q.includes("tech") || q.includes("language")) return KNOWLEDGE_BASE.skills;
  if (q.includes("contact") || q.includes("email") || q.includes("hire")) return KNOWLEDGE_BASE.contact;
  if (q.includes("experience") || q.includes("internship") || q.includes("job")) return KNOWLEDGE_BASE.experience;
  return "That's a great question! Minhaj is an AI Engineer and final-year BS Artificial Intelligence student at Superior University Lahore (CGPA 3.39). For specific details about his experience, projects, or skills, feel free to ask!";
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Minhaj's AI Assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, { role: "user", content: userMessage }] }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setMessages(prev => [...prev, { role: "assistant", content: data.text }]);
    } catch (err) {
      console.error("Gemini unavailable, using local fallback:", err);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: getLocalResponse(userMessage) }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-500/20 z-50 hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-12 right-0 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Ask Minhaj&apos;s AI
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Minhaj&apos;s Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-white/5 text-zinc-300 border border-white/10 rounded-tl-none"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 size={16} className="animate-spin text-blue-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about projects, skills..."
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-blue-500 outline-none transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

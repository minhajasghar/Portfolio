"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const KNOWLEDGE_BASE = {
  about: "Minhaj Asghar is an AI Engineer and Machine Learning Developer specializing in Computer Vision, NLP, and automation. He has 2+ years of experience and has built over 10+ professional projects.",
  projects: "His flagship projects include Stafflytics AI (restaurant business intelligence) and SmartAttend AI (intelligent attendance system). He has also worked on Traffic Sign Recognition and PhishGuard.",
  skills: "He is proficient in Python, YOLO, OpenCV, TensorFlow, PyTorch, and Flask. He also has strong experience in SQL and cloud deployments.",
  contact: "You can contact Minhaj via the contact form on this website or email him at minhajasghar5@gmail.com. He is also active on LinkedIn and GitHub.",
  experience: "He has completed 4+ internships in the AI field and is currently working on high-impact intelligent monitoring solutions."
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

    // Simulate AI thinking
    setTimeout(() => {
      let response = "That's a great question! Based on Minhaj's portfolio, he specializes in AI and Machine Learning. For specific details about his projects or skills, feel free to ask!";
      
      const query = userMessage.toLowerCase();
      if (query.includes("project") || query.includes("work")) response = KNOWLEDGE_BASE.projects;
      else if (query.includes("about") || query.includes("who is")) response = KNOWLEDGE_BASE.about;
      else if (query.includes("skill") || query.includes("tech") || query.includes("language")) response = KNOWLEDGE_BASE.skills;
      else if (query.includes("contact") || query.includes("email") || query.includes("hire")) response = KNOWLEDGE_BASE.contact;
      else if (query.includes("experience") || query.includes("internship")) response = KNOWLEDGE_BASE.experience;

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
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
          Ask Minhaj's AI
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
                  <h3 className="text-sm font-bold">Minhaj's Assistant</h3>
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

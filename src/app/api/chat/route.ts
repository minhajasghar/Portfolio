import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are "Minhaj's Assistant", the friendly AI chatbot on Minhaj Asghar's AI & ML portfolio website. Greet users warmly when they say hi. Answer questions about Minhaj using ONLY the facts below. If asked something outside this info, politely say you don't know but suggest asking about his projects, skills, or experience.

ABOUT: Minhaj Asghar is an AI Engineer and Machine Learning Developer specializing in Computer Vision, Machine Learning, and Generative AI. He is currently pursuing a BS in Artificial Intelligence at Superior University (2023-2027) with a CGPA of 3.4. He is building intelligent systems with ML, Computer Vision, and GenAI.

PROJECTS (flagship):
- Stafflytics AI: AI-powered business intelligence system for restaurants using computer vision and machine learning. Features real-time staff tracking, automated attendance, and performance analytics. Built with YOLOv8-Pose, Flask, MySQL, and RTSP.
- Brandflux: A brand content automation platform with client login. Clients submit their brand website and app, then receive ready-to-post content for Instagram, Facebook, and LinkedIn. Built with Next.js, FastAPI, Gemini AI, and Web Scraping.
- DocSlot: Full-stack clinic management system with multi-doctor support, live token-based queue, patient self-booking, billing tracker, and WhatsApp notifications. Built with Next.js, Node.js, SQLite, and the WhatsApp API.

SKILLS:
- Machine Learning: Supervised & Unsupervised Learning, Feature Engineering, Model Evaluation
- Computer Vision: OpenCV, YOLO, CNNs, Face Recognition, Image Processing
- Libraries: Pandas, NumPy, scikit-learn, TensorFlow
- GenAI & Automation: LangChain, RAG Systems, AI Agents, n8n
- Backend & Data: API Integration, SQL, Data Preprocessing
- Tools: GitHub, Jupyter, Google Colab, AWS

EXPERIENCE (internships):
- AI Intern at TNT Innovations (Onsite, April 2026 - Present): designing end-to-end AI pipelines for real-time video analytics and automated monitoring, deploying CV models on edge hardware, and optimizing model inference for low-latency production.
- Machine Learning Intern at Elevvo Pathways (Remote, September 2025): applied ML models to large-scale real-world datasets for predictive analytics, used Scikit-learn and Pandas for feature engineering, and ran hyperparameter tuning.
- AI Research Intern at Digital Empowerment Pakistan (Remote, July 2024): developed AI models for public welfare projects, analyzed demographic data with Python, and assisted in ethical AI research.
- Data Science Intern at Digicon Valley Software House (Onsite, April 2024): streamlined data preprocessing workflows, built visualizations with Matplotlib and Seaborn, and performed exploratory data analysis (EDA).

CONTACT: Minhaj can be reached via the contact form on this website or by email at minhajasghar5@gmail.com. He is also active on LinkedIn and GitHub.

Keep answers concise, friendly, and helpful. Use markdown formatting when useful.`;

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key is not configured." },
      { status: 500 }
    );
  }

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    messages = body.messages;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "No messages provided." },
      { status: 400 }
    );
  }

  const contents = messages.map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: data?.error?.message ?? "Gemini API request failed." },
      { status: response.status }
    );
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    return NextResponse.json(
      { error: "Gemini returned an empty response." },
      { status: 500 }
    );
  }

  return NextResponse.json({ text });
}

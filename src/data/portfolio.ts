export const profile = {
  name: "Suraj Dhakad",
  tagline: "Backend Developer | AI/ML Engineer",
  about: "Backend Developer and AI/ML Engineer experienced in building scalable backend systems and LLM-powered applications. Proficient in Python, FastAPI, LangGraph, and LangChain for developing RAG pipelines and multi-agent workflows, with a strong foundation in Machine Learning and Deep Learning using TensorFlow and Scikit-learn. Adept at designing production-grade architectures with PostgreSQL and Redis, integrating vector search and real-time data processing for real-world AI solutions.",
  resumeUrl: "/Suraj_Dhakad_Resume.pdf", // Path to your uploaded resume
  contact: {
    email: "dhakadsuraj77@gmail.com",
    github: "https://github.com/Suraj516732",
    linkedin: "https://www.linkedin.com/in/suraj-dhakad-574a273ba/",
    phone: "+91-7879553211"
  }
};

export const skills = [
  // Languages
  { name: "Python", level: 95, category: "Languages", icon: "Code" },
  { name: "SQL", level: 90, category: "Languages", icon: "Database" },

  // Backend
  { name: "FastAPI", level: 95, category: "Backend", icon: "Server" },
  { name: "REST APIs", level: 95, category: "Backend", icon: "Globe" },
  { name: "WebSockets", level: 90, category: "Backend", icon: "Globe" },
  { name: "Pydantic", level: 90, category: "Backend", icon: "Layers" },

  // AI / LLM
  { name: "LangChain", level: 90, category: "AI / LLM", icon: "Cpu" },
  { name: "LangGraph", level: 95, category: "AI / LLM", icon: "Cpu" },
  { name: "LangSmith", level: 85, category: "AI / LLM", icon: "Terminal" },
  { name: "RAG", level: 95, category: "AI / LLM", icon: "Layers" },
  { name: "Prompt Engineering", level: 90, category: "AI / LLM", icon: "Code" },
  { name: "Multi-Agent Systems", level: 95, category: "AI / LLM", icon: "Cpu" },
  { name: "OpenAI API", level: 90, category: "AI / LLM", icon: "Globe" },
  { name: "Groq API", level: 90, category: "AI / LLM", icon: "Globe" },

  // Machine Learning
  { name: "Scikit-learn", level: 85, category: "Machine Learning", icon: "Cpu" },
  { name: "TensorFlow", level: 80, category: "Machine Learning", icon: "Cpu" },
  { name: "Keras", level: 80, category: "Machine Learning", icon: "Cpu" },

  // Deep Learning
  { name: "ANN", level: 85, category: "Deep Learning", icon: "Cpu" },
  { name: "CNN", level: 85, category: "Deep Learning", icon: "Cpu" },
  { name: "RNN", level: 80, category: "Deep Learning", icon: "Cpu" },
  { name: "LSTM", level: 80, category: "Deep Learning", icon: "Cpu" },
  { name: "OpenAI Whisper", level: 85, category: "Deep Learning", icon: "Terminal" },

  // Databases & Vector Search
  { name: "PostgreSQL", level: 90, category: "Databases & Vector Search", icon: "Database" },
  { name: "MySQL", level: 80, category: "Databases & Vector Search", icon: "Database" },
  { name: "Redis", level: 90, category: "Databases & Vector Search", icon: "Zap" },
  { name: "FAISS", level: 90, category: "Databases & Vector Search", icon: "Database" },
  { name: "pgvector", level: 85, category: "Databases & Vector Search", icon: "Layers" },

  // Developer Tools
  { name: "Docker", level: 85, category: "Developer Tools", icon: "Box" },
  { name: "Git", level: 90, category: "Developer Tools", icon: "GitBranch" },
  { name: "GitHub Actions", level: 85, category: "Developer Tools", icon: "GitBranch" },
  { name: "Postman", level: 90, category: "Developer Tools", icon: "Globe" },
  { name: "Railway", level: 85, category: "Developer Tools", icon: "Globe" },
  { name: "Render", level: 80, category: "Developer Tools", icon: "Globe" },
  { name: "Vercel", level: 85, category: "Developer Tools", icon: "Globe" },

  // Authentication
  { name: "JWT", level: 90, category: "Authentication", icon: "Shield" },
  { name: "OAuth2", level: 85, category: "Authentication", icon: "Shield" },
  { name: "RBAC", level: 90, category: "Authentication", icon: "Shield" },

  // Data Analysis & Visualization
  { name: "NumPy", level: 90, category: "Data Analysis & Visualization", icon: "Layers" },
  { name: "Pandas", level: 90, category: "Data Analysis & Visualization", icon: "Database" },
  { name: "Matplotlib", level: 85, category: "Data Analysis & Visualization", icon: "Layers" },
  { name: "Seaborn", level: 85, category: "Data Analysis & Visualization", icon: "Layers" },
];

export const projects = [
  {
    id: 1,
    title: "AI Video Assistant",
    description: "Built an AI assistant that processes YouTube videos and local media files — transcribing, indexing, and enabling conversational Q&A over video content.",
    features: [
      "Implemented speech-to-text transcription using OpenAI Whisper and a RAG-based querying pipeline for contextually accurate answers from video content.",
      "Generated AI-powered summaries, action items, key decisions, and timestamped highlights automatically using LangChain chains.",
      "Integrated Sarvam AI for multilingual transcription and translation, expanding usability for regional language content.",
      "Designed a Streamlit conversational UI for intuitive real-time interactions with video content — zero prompt-engineering required from end users."
    ],
    techStack: ["Python", "OpenAI Whisper", "LangChain", "RAG", "Streamlit", "Sarvam AI"],
    image: "/images/video-assistant.png",
    githubUrl: "https://github.com/Suraj516732/AI-Video-Assistant",
    liveUrl: "#",
    category: "AI / RAG"
  },
  {
    id: 2,
    title: "Perplexity 2.0 — AI-Powered Search Engine",
    description: "Built a production-style AI search engine with multi-step reasoning, real-time web search, and contextual answer generation using LangGraph-orchestrated multi-agent workflows.",
    features: [
      "Designed a full RAG pipeline using FAISS vector store for semantic search and grounded, citation-backed responses — reducing hallucination risk significantly.",
      "Implemented Server-Sent Events (SSE) for streaming responses, achieving low-latency output comparable to production AI systems.",
      "Integrated Tavily Search API for live web retrieval and Redis caching to reduce redundant API calls and improve response throughput.",
      "Engineered scalable FastAPI backend with PostgreSQL for persistent chat memory, user sessions, and source tracking."
    ],
    techStack: ["LangGraph", "FastAPI", "React", "PostgreSQL", "FAISS", "Redis", "SSE"],
    image: "/images/perplexity.png",
    githubUrl: "https://github.com/Suraj516732/Perplexity-2.0",
    liveUrl: "#",
    category: "AI / Agentic"
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Developed a full-stack real-time messaging system using WebSockets with support for concurrent users and low-latency delivery.",
    features: [
      "Implemented JWT authentication and Role-Based Access Control (RBAC) for secure, scoped access across user roles.",
      "Integrated Redis Pub/Sub for horizontal scalability — enabling message broadcasting across multiple server instances.",
      "Designed normalized PostgreSQL schema with modular REST APIs for user management, message history, and room operations."
    ],
    techStack: ["FastAPI", "WebSockets", "Redis Pub/Sub", "PostgreSQL", "JWT", "RBAC"],
    image: "/images/chat-app.png",
    githubUrl: "https://github.com/Suraj516732/Realtime-chat-app",
    liveUrl: "#",
    category: "Real-time"
  }
];

export const experience = [
  {
    role: "Backend & AI Project Developer",
    company: "Self-Employed / Independent Builder",
    period: "2023 - Present",
    description: "Architected and built highly scalable real-time chat infrastructures, LangGraph AI agent search engines, and automated video query systems. Proficient in FastAPI, vector search engines, and robust security integrations."
  },
  {
    role: "Open Source Contributor & Learner",
    company: "GitHub / Community",
    period: "2023 - Present",
    description: "Contributing to repositories, experimenting with new agentic patterns, and adopting industrial-grade caching, message queues, and indexing architectures."
  },
  {
    role: "Aspiring Backend & AI Engineer Intern",
    company: "Seeking Professional Opportunities",
    period: "Present",
    description: "Actively building production-grade systems and seeking engineering internships to deploy scalable and optimized backend APIs."
  }
];

export const education = [
  {
    degree: "B.Tech",
    institution: "Institute of Engineering & Technology (IET), DAVV Indore",
    branch: "Electronics & Telecommunication Engineering",
    period: "2024 - 2028",
  }
];

export const certifications = [
  {
    name: "FastAPI for Machine Learning",
    issuer: "CampusX",
  },
  {
    name: "Complete Agentic AI Bootcamp with LangGraph and LangChain",
    issuer: "Udemy",
  }
];

export const profile = {
  name: "Suraj Dhakad",
  tagline: "Backend Developer | AI Engineer",
  about: "Backend Developer and AI Engineer with hands-on experience building production-grade APIs, RAG pipelines, and real-time systems. Proficient in FastAPI, LangGraph, and LangChain for developing LLM-powered applications. Skilled in designing scalable architectures using PostgreSQL, Redis, Docker, and WebSockets. Strong background in AI/ML integration, vector search with FAISS, and multi-agent workflow orchestration.",
  resumeUrl: "/Master resume Suraj_01.pdf", // Path to your uploaded resume
  contact: {
    email: "dhakadsuraj77@gmail.com",
    github: "https://github.com/Jarsu123",
    linkedin: "https://linkedin.com/in/surajdhakad",
    phone: "+91-7879553211"
  }
};

export const skills = [
  // Languages
  { name: "Python", level: 95, category: "Languages", icon: "Code" },
  { name: "SQL", level: 90, category: "Languages", icon: "Database" },
  { name: "JavaScript", level: 80, category: "Languages", icon: "Code" },
  { name: "Bash", level: 75, category: "Languages", icon: "Terminal" },

  // Backend Frameworks
  { name: "FastAPI", level: 95, category: "Frameworks", icon: "Server" },
  { name: "Flask", level: 80, category: "Frameworks", icon: "Server" },
  { name: "REST APIs", level: 95, category: "Frameworks", icon: "Globe" },
  { name: "WebSockets", level: 90, category: "Frameworks", icon: "Globe" },
  { name: "Pydantic", level: 90, category: "Frameworks", icon: "Layers" },
  { name: "Async Python", level: 90, category: "Frameworks", icon: "Cpu" },

  // AI / LLM Stack
  { name: "LangChain", level: 90, category: "AI / LLM Stack", icon: "Cpu" },
  { name: "LangGraph", level: 95, category: "AI / LLM Stack", icon: "Cpu" },
  { name: "LangSmith", level: 85, category: "AI / LLM Stack", icon: "Terminal" },
  { name: "RAG Pipelines", level: 95, category: "AI / LLM Stack", icon: "Layers" },
  { name: "Prompt Engineering", level: 90, category: "AI / LLM Stack", icon: "Code" },
  { name: "Multi-Agent Systems", level: 95, category: "AI / LLM Stack", icon: "Cpu" },
  { name: "OpenAI API", level: 90, category: "AI / LLM Stack", icon: "Globe" },
  { name: "Groq API", level: 90, category: "AI / LLM Stack", icon: "Globe" },

  // Vector Search & Databases
  { name: "FAISS", level: 90, category: "Databases", icon: "Database" },
  { name: "PostgreSQL", level: 90, category: "Databases", icon: "Database" },
  { name: "MySQL", level: 80, category: "Databases", icon: "Database" },
  { name: "Redis", level: 90, category: "Databases", icon: "Zap" },
  { name: "pgvector", level: 85, category: "Databases", icon: "Layers" },

  // Authentication & Security
  { name: "JWT", level: 90, category: "Security", icon: "Shield" },
  { name: "OAuth2", level: 85, category: "Security", icon: "Shield" },
  { name: "RBAC", level: 90, category: "Security", icon: "Shield" },
  { name: "Secure API Design", level: 95, category: "Security", icon: "Shield" },

  // DevOps & Tools
  { name: "Docker", level: 85, category: "DevOps & Tools", icon: "Box" },
  { name: "Git", level: 90, category: "DevOps & Tools", icon: "GitBranch" },
  { name: "GitHub Actions", level: 85, category: "DevOps & Tools", icon: "GitBranch" },
  { name: "Linux", level: 80, category: "DevOps & Tools", icon: "Terminal" },
  { name: "Postman", level: 90, category: "DevOps & Tools", icon: "Globe" },
  { name: "Railway", level: 85, category: "DevOps & Tools", icon: "Globe" },
  { name: "Render", level: 80, category: "DevOps & Tools", icon: "Globe" },
  { name: "Vercel", level: 85, category: "DevOps & Tools", icon: "Globe" },

  // Core Concepts
  { name: "System Design", level: 90, category: "Core Concepts", icon: "Cpu" },
  { name: "Caching", level: 90, category: "Core Concepts", icon: "Zap" },
  { name: "Authentication", level: 90, category: "Core Concepts", icon: "Shield" },
  { name: "Vector Search", level: 95, category: "Core Concepts", icon: "Database" },
  { name: "Async Processing", level: 90, category: "Core Concepts", icon: "Cpu" },
];

export const projects = [
  {
    id: 1,
    title: "Perplexity 2.0 — AI Search Engine",
    description: "Built a production-style AI search engine with multi-step reasoning, real-time web search, and contextual answer generation using LangGraph-orchestrated multi-agent workflows.",
    features: [
      "Designed a full RAG pipeline using FAISS vector store for semantic search and grounded, citation-backed responses.",
      "Implemented Server-Sent Events (SSE) for real-time response streaming to minimize perceived latency.",
      "Integrated Tavily Search API for live web retrieval and Redis caching to optimize API usage and response speed.",
      "Engineered scalable FastAPI backend with PostgreSQL for persistent chat memory, sessions, and source tracking."
    ],
    techStack: ["LangGraph", "FastAPI", "React", "PostgreSQL", "FAISS", "Redis", "SSE"],
    image: "/images/perplexity.png",
    githubUrl: "https://github.com/Jarsu123/Perplexity-2.0",
    liveUrl: "#",
    category: "AI / Agentic"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Developed a full-stack real-time messaging system using WebSockets with support for concurrent users and low-latency delivery.",
    features: [
      "Implemented secure JWT Authentication and Role-Based Access Control (RBAC) to handle authorization layers.",
      "Integrated Redis Pub/Sub for horizontal scalability across multiple server instances.",
      "Designed modular REST APIs with PostgreSQL schema for chat history, user management, and room states."
    ],
    techStack: ["FastAPI", "WebSockets", "Redis Pub/Sub", "PostgreSQL", "JWT", "RBAC"],
    image: "/images/chat-app.png",
    githubUrl: "https://github.com/Jarsu123/Realtime-chat-app",
    liveUrl: "#",
    category: "Real-time"
  },
  {
    id: 3,
    title: "AI Video Assistant",
    description: "Built an AI assistant that processes YouTube videos and local media files — transcribing, indexing, and enabling conversational Q&A over video content.",
    features: [
      "Implemented speech-to-text transcription using OpenAI Whisper and a RAG-based querying pipeline for contextually accurate answers.",
      "Generated automated summaries, action items, key decisions, and timestamped highlights automatically using LangChain.",
      "Integrated Sarvam AI for multilingual transcription and translation for regional language content.",
      "Designed a Streamlit conversational UI for intuitive real-time interactions with video content."
    ],
    techStack: ["Python", "OpenAI Whisper", "LangChain", "RAG", "Streamlit", "Sarvam AI"],
    image: "/images/video-assistant.png",
    githubUrl: "https://github.com/Jarsu123/AI-Video-Assistant",
    liveUrl: "#",
    category: "AI / RAG"
  },
  {
    id: 4,
    title: "Vastu Consultancy",
    description: "A high-performance professional web platform for Vastu consultancy services, featuring modern styling, smooth transitions, and dynamic client booking.",
    features: [
      "Modern UI/UX design with customized visual components.",
      "Integrated consultation booking workflow.",
      "Framer Motion layout transitions for an immersive experience.",
      "Fully responsive and SEO optimized."
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/vastu.png",
    githubUrl: "https://github.com/Jarsu123/Vastu-consultance",
    liveUrl: "https://www.healingconsultance.com",
    category: "Web App"
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

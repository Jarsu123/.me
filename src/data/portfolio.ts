import { 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  Code, 
  Terminal, 
  GitBranch, 
  Layers, 
  MessageSquare, 
  Link, 
  Scissors, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Mail, 
  Github, 
  Linkedin, 
  Phone
} from "lucide-react";

export const profile = {
  name: "Suraj Dhakad",
  tagline: "Full Stack Developer | FastAPI | Python | PostgreSQL | Docker | WebSocket",
  about: "I am a full-stack developer passionate about building scalable APIs, real-time applications, and modern web systems. I enjoy working with Python, FastAPI, PostgreSQL, Docker, JWT authentication, WebSocket, and system design. I am currently learning advanced backend engineering and AI-related technologies.",
  resumeUrl: "/resume.pdf", // Path to your uploaded resume
  contact: {
    email: "dhakadsuraj77@gmail.com",
    github: "https://github.com/surajdhakad",
    linkedin: "https://linkedin.com/in/surajdhakad",
    phone: "+91 7879553211"
  }
};

export const skills = [
  { name: "Python", level: 90, category: "Languages", icon: "Code" },
  { name: "FastAPI", level: 85, category: "Frameworks", icon: "Server" },
  { name: "PostgreSQL", level: 80, category: "Databases", icon: "Database" },
  { name: "SQL", level: 85, category: "Languages", icon: "Database" },
  { name: "SQLAlchemy", level: 80, category: "Libraries", icon: "Layers" },
  { name: "Docker", level: 75, category: "DevOps", icon: "Cpu" },
  { name: "JWT Auth", level: 85, category: "Security", icon: "Terminal" },
  { name: "WebSocket", level: 80, category: "Real-time", icon: "Globe" },
  { name: "Git & GitHub", level: 85, category: "Tools", icon: "GitBranch" },
  { name: "REST APIs", level: 90, category: "Frameworks", icon: "Code" },
  { name: "NumPy", level: 70, category: "AI/ML", icon: "Cpu" },
  { name: "Pandas", level: 75, category: "AI/ML", icon: "Cpu" },
  { name: "Matplotlib", level: 65, category: "AI/ML", icon: "Cpu" },
  { name: "LangChain", level: 60, category: "AI/ML", icon: "Cpu" },
  { name: "LangGraph", level: 55, category: "AI/ML", icon: "Cpu" },
  { name: "Basic ML", level: 60, category: "AI/ML", icon: "Cpu" },
];

export const projects = [
  {
    id: 1,
    title: "Real-Time Chat App",
    description: "A real-time chat application using FastAPI and WebSocket where multiple users can connect and exchange messages instantly.",
    features: ["Real-time communication", "WebSocket support", "Multiple user handling", "Clean UI", "Scalable backend"],
    techStack: ["FastAPI", "WebSocket", "HTML", "CSS", "JavaScript"],
    image: "/images/chat-app.png",
    githubUrl: "https://github.com/Jarsu123/Realtime-chat-app",
    liveUrl: "#",
    category: "Real-time"
  },
  {
    id: 2,
    title: "URL Shortener",
    description: "A URL shortening service where users can convert long URLs into short and shareable links.",
    features: ["Short URL generation", "Redirection support", "Analytics-ready structure", "Database integration"],
    techStack: ["FastAPI", "PostgreSQL", "SQLAlchemy"],
    image: "/images/url-shortener.png",
    githubUrl: "#",
    liveUrl: "#",
    category: "Backend"
  },
  {
    id: 3,
    title: "Your Derma",
    description: "A skincare-related web project focused on helping users understand products and routines.",
    features: ["Product suggestions", "Informative content", "Responsive UI", "Backend integration"],
    techStack: ["Python", "FastAPI", "HTML", "CSS"],
    image: "/images/derma-care.png",
    githubUrl: "https://github.com/Jarsu123/Your-Derma",
    liveUrl: "#",
    category: "Web App"
  },
  {
    id: 4,
    title: "Vastu Consultancy",
    description: "A professional web platform for Vastu consultancy services, featuring modern design and client-focused layouts.",
    features: ["Modern UI/UX", "Service listings", "Consultation booking", "Responsive design"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/vastu.png",
    githubUrl: "https://github.com/Jarsu123/Vastu-consultance",
    liveUrl: "https://www.healingconsultance.com",
    category: "Web App"
  }
];

export const experience = [
  {
    role: "Full Stack Developer Intern (Aspiring)",
    company: "Seeking Opportunities",
    period: "Present",
    description: "Actively building backend systems and looking for internship roles."
  },
  {
    role: "Open Source Learner",
    company: "GitHub / Community",
    period: "2023 - Present",
    description: "Contributing to projects and learning from the community."
  },
  {
    role: "Personal Projects Builder",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Developed multiple full-stack and backend projects focused on scalability and real-time features."
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "IET DAVV",
    branch: "Electronics and Telecommunication",
    period: "2024 - 2028",
  }
];

export const achievements = [
  "Built multiple backend projects",
  "Strong understanding of APIs and authentication",
  "Learning AI tools and modern backend systems",
  "Consistent learner of backend engineering"
];

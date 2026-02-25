export const personalInfo = {
  name: "Ekarsha Sumaj Kotikalapoodi",
  location: "Andhra Pradesh, India",
  phone: "+91 9441861069",
  email: "ekarshaksumaj@gmail.com",
  linkedin: "linkedin.com/in/ekarshasumajk",
  github: "github.com/EkarshaSumajK",
}

export const summary =
  "AI-focused Software Developer (2026) with experience building scalable REST APIs, distributed systems, and AI-powered services using FastAPI, Node.js, PostgreSQL, and Redis. Improved API latency by 80% and optimized database performance by 40% in production SaaS environments serving 1,000+ users."

export const education = {
  institution: "Vellore Institute of Technology",
  degree: "Bachelor of Science in Computer Science",
  cgpa: "8.88/10",
  year: "2022 – 2026",
  location: "Vijayawada, Andhra Pradesh",
}

export const skills = {
  languages: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Microservices", "Distributed Systems"],
  databases: ["PostgreSQL", "Redis", "MongoDB", "Prisma ORM"],
  ai: ["LLM Integration", "RAG Pipelines", "Vector Databases"],
  devops: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Linux", "Git"],
  frontend: ["React.js", "Next.js", "Tailwind CSS"],
}

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Fixity EDX",
    period: "August 2024 – Present",
    location: "Remote",
    highlights: [
      "Built and maintained scalable full-stack features on a SaaS platform serving 1,000+ active users, ensuring 99.9% uptime",
      "Improved REST API response times by 80% (700ms → 100ms) via Redis caching, asynchronous processing, and PostgreSQL query optimization",
      "Reduced deployment time by 50% through Docker containerization and automated CI/CD pipelines",
      "Delivered 10+ production features across sprints with unit/integration test coverage",
    ],
  },
  {
    role: "Technical Consultant",
    company: "Wellnest Group, Build Sphere",
    period: "September 2025 – Present",
    location: "Remote",
    highlights: [
      "Led end-to-end development of a B2B wellness app (Wellnest Group) and a construction project tracker (Build Sphere), both shipped to production",
      "Designed RESTful APIs and optimized PostgreSQL schemas, reducing average query time by 40%",
      "Managed full lifecycle from architecture to post-production support",
    ],
  },
]

export const projects = [
  {
    title: "AI Website Builder",
    period: "August 2025",
    description:
      "A multi-agent AI SaaS system using Gemini 2.5 and Inngest Agent Kit to generate production-ready Next.js websites from natural language with real-time E2B sandbox execution.",
    tech: ["TypeScript", "Next.js", "React", "tRPC", "PostgreSQL", "E2B", "Gemini 2.5", "Clerk", "Prisma ORM", "shadcn/ui"],
    link: "",
      github: "https://github.com/EkarshaSumajK/Agentic-Website-Builder",
    gradient: "from-apple-blue to-apple-purple",
    iconKey: "wand",
  },
  {
    title: "Distributed Background Task Processing System",
    period: "December 2025",
    description:
      "Architected a production-ready distributed task queue with decoupled Producer/Worker microservices handling email dispatch, image resizing, and PDF generation using FastAPI and Redis.",
    tech: ["Python", "FastAPI", "Redis", "Docker", "Microservices", "OpenAPI"],
    link: "",
    github: "https://github.com/EkarshaSumajK/Distributed-Work-Queue",
    gradient: "from-apple-purple to-apple-pink",
    iconKey: "network",
  },
  {
    title: "Certificate Generator",
    period: "February 2025",
    description:
      "Built a browser-based bulk certificate generation tool with interactive Konva canvas editor, CSV recipient list upload, and bulk export functionality.",
    tech: ["Next.js 15", "React 19", "Konva", "Zustand", "Clerk", "Tailwind CSS", "xlsx", "jszip"],
    link: "",
    github: "https://github.com/EkarshaSumajK/certificate-generator",
    gradient: "from-apple-pink to-apple-orange",
    iconKey: "filecheck",
  },
]

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

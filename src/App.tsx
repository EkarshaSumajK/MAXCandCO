import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  GitBranch,
  BrainCircuit,
  Monitor,
  ArrowRight,
  Download,
  Menu,
  X,
  Zap,
  Network,
  Wand2,
  FileCheck,
  Server,
  GraduationCap,
  Contact as ContactIcon,
  Sun,
  Moon,
} from 'lucide-react'
import { personalInfo, summary, education, skills, experiences, projects, navLinks } from './data'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Components
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050507]">
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '44px 44px',
        }}
      />
      {/* Fade-out overlay: transparent in the middle, dark toward edges and bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 10%, transparent 40%, #050507 80%)',
        }}
      />
      {/* Thin top-edge glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(41,151,255,0.7)] to-transparent" />
      {/* Blue radial highlight bleeding in from top */}
      <div
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 50% -10%, rgba(41,151,255,0.13), transparent)',
        }}
      />
    </div>
  )
}

function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">EK</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm text-apple-grayText hover:text-apple-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 text-apple-grayText hover:text-apple-white transition-colors rounded-full hover:bg-apple-white/5"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-apple-grayText hover:text-apple-white transition-colors rounded-full"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="text-apple-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-apple-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-apple-grayText hover:text-apple-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="min-h-screen flex items-center relative px-6 pt-24 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <motion.div style={{ y }} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-apple-grayText">
                <Zap className="w-4 h-4 text-apple-blue" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Ekarsha</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-lg md:text-xl text-apple-grayText mb-8 max-w-xl leading-relaxed"
            >
              AI-focused Software Developer building scalable APIs, distributed systems, and AI-powered services
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-apple-blue text-apple-white rounded-full font-medium hover:bg-apple-blue/90 transition-all hover:scale-105"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-medium hover:bg-apple-white/10 transition-all hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4"
            >
              <SocialLink href={`https://${personalInfo.github}`} icon={<Github className="w-5 h-5" />} />
              <SocialLink href={`https://${personalInfo.linkedin}`} icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href={`mailto:${personalInfo.email}`} icon={<Mail className="w-5 h-5" />} />
            </motion.div>
          </motion.div>

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind the image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-apple-blue/20 via-apple-purple/15 to-apple-pink/10 blur-3xl scale-90" />

            {/* Image frame */}
            <div className="relative w-[300px] md:w-[380px] lg:w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-apple-white/10 shadow-2xl">
              <img
                src="/hero.jpg"
                alt="Ekarsha Sumaj"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom gradient to blend into background */}
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#050507] to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-apple-gray3 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-apple-grayText rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 glass rounded-full hover:bg-apple-white/10 transition-colors"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12">
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Bio Card */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors"
            >
              <p className="text-lg text-apple-grayText leading-relaxed">{summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <TechBadge icon={<BrainCircuit className="w-3 h-3" />} text="AI & ML" />
                <TechBadge icon={<Network className="w-3 h-3" />} text="Distributed Systems" />
                <TechBadge icon={<Code2 className="w-3 h-3" />} text="Full Stack" />
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-apple-blue/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-apple-blue" />
                </div>
                <span className="text-apple-grayText">Location</span>
              </div>
              <p className="text-lg font-medium">{personalInfo.location}</p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-apple-purple/20 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-apple-purple" />
                </div>
                <span className="text-apple-grayText">Education</span>
              </div>
              <p className="font-medium">{education.institution}</p>
              <p className="text-sm text-apple-grayText mt-1">{education.degree}</p>
              <p className="text-sm text-apple-blue mt-2">CGPA: {education.cgpa}</p>
              <p className="text-xs text-apple-grayText mt-1">{education.year}</p>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-apple-pink/20 rounded-lg">
                  <ContactIcon className="w-5 h-5 text-apple-pink" />
                </div>
                <span className="text-apple-grayText">Contact</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm text-apple-blue hover:underline"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-sm text-apple-grayText mt-1"
              >
                {personalInfo.phone}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TechBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-apple-white/5 rounded-full text-sm text-apple-grayText">
      {icon}
      {text}
    </span>
  )
}

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    { title: 'Languages', icon: <Code2 className="w-5 h-5" />, items: skills.languages, color: 'apple-blue' },
    { title: 'Backend', icon: <Server className="w-5 h-5" />, items: skills.backend, color: 'apple-purple' },
    { title: 'Databases', icon: <Database className="w-5 h-5" />, items: skills.databases, color: 'apple-green' },
    { title: 'AI Systems', icon: <BrainCircuit className="w-5 h-5" />, items: skills.ai, color: 'apple-pink' },
    { title: 'DevOps', icon: <GitBranch className="w-5 h-5" />, items: skills.devops, color: 'apple-orange' },
    { title: 'Frontend', icon: <Monitor className="w-5 h-5" />, items: skills.frontend, color: 'apple-yellow' },
  ]

  return (
    <section className="py-24 px-6 bg-apple-dark/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12">
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${category.color}/20 text-${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-apple-white/5 rounded-full text-sm text-apple-grayText hover:text-apple-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12">
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-apple-blue via-apple-purple to-apple-pink" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1" />

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-apple-blue rounded-full shadow-[0_0_20px_rgba(41,151,255,0.5)]" />

                <div className="flex-1 pl-8 md:pl-0">
                  <div className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-apple-blue/20 text-apple-blue rounded-full text-sm">
                        {exp.period}
                      </span>
                      <span className="text-apple-grayText text-sm">{exp.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-apple-purple font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-apple-grayText flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-apple-grayText rounded-full mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const projectIconMap: Record<string, React.ReactNode> = {
  wand: <Wand2 className="w-6 h-6 text-apple-white" />,
  network: <Network className="w-6 h-6 text-apple-white" />,
  filecheck: <FileCheck className="w-6 h-6 text-apple-white" />,
}

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6 bg-apple-dark/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12">
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity rounded-2xl`}
                />
                <div className="absolute inset-[1px] bg-apple-black rounded-2xl" />

                <div className="relative p-6 h-full flex flex-col">
                  {/* Project icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}
                  >
                    {projectIconMap[project.iconKey]}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>

                  <span className="text-xs text-apple-grayText mb-3">{project.period}</span>

                  <p className="text-sm text-apple-grayText mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-apple-white/5 rounded text-xs text-apple-grayText"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-apple-white/5 rounded text-xs text-apple-blue">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-apple-grayText hover:text-apple-white transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-apple-grayText hover:text-apple-white transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          ref={ref}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-apple-grayText text-center mb-12 max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors cursor-pointer"
              onClick={handleCopyEmail}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-apple-blue/20 rounded-xl">
                  <Mail className="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <p className="text-sm text-apple-grayText">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-apple-green mt-3"
                >
                  Copied to clipboard!
                </motion.p>
              )}
            </motion.div>

            {/* Phone Card */}
            <motion.a
              variants={fadeInUp}
              href={`tel:${personalInfo.phone}`}
              className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-apple-purple/20 rounded-xl">
                  <Phone className="w-6 h-6 text-apple-purple" />
                </div>
                <div>
                  <p className="text-sm text-apple-grayText">Phone</p>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              variants={fadeInUp}
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-apple-pink/20 rounded-xl">
                  <Linkedin className="w-6 h-6 text-apple-pink" />
                </div>
                <div>
                  <p className="text-sm text-apple-grayText">LinkedIn</p>
                  <p className="font-medium">Connect with me</p>
                </div>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              variants={fadeInUp}
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass hover:bg-apple-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-apple-gray2 rounded-xl">
                  <Github className="w-6 h-6 text-apple-white" />
                </div>
                <div>
                  <p className="text-sm text-apple-grayText">GitHub</p>
                  <p className="font-medium">Check my code</p>
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <a
              href="/EkarshaSumaj_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-apple-blue text-apple-white rounded-full font-medium hover:bg-apple-blue/90 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-apple-grayText">
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`https://${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-grayText hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-apple-grayText hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-apple-grayText hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <div className="min-h-screen bg-apple-black text-apple-white transition-colors duration-300">
      <AnimatedBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

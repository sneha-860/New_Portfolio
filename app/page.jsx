"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const navItems = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];
const heroSignals = ["Microservices", "Kafka", "PostgreSQL", "AWS", "System Design"];

const skills = [
  { title: "Languages", tags: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "Backend",
    tags: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "JWT",
      "OAuth 2.0",
      "Maven",
      "Gradle"
    ],
    featured: true
  },
  { title: "Secondary Backend", tags: ["Node.js", "Express.js", "TypeScript"] },
  { title: "Frontend", tags: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { title: "Databases", tags: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Query Optimization", "Indexing"] },
  { title: "Testing", tags: ["JUnit 5", "Mockito"] },
  { title: "AI/ML", tags: ["Scikit-learn", "Pandas", "NumPy", "LangChain", "RAG", "Vector Databases", "OpenAI/Anthropic API"] },
  { title: "DevOps & Tools", tags: ["Docker", "Kubernetes (K8s)", "Kafka", "AWS (EC2/S3)", "Git", "GitHub Actions", "Postman", "Linux", "CI/CD"] },
  { title: "CS Fundamentals", tags: ["DSA", "System Design (LLD/HLD)", "OOP", "OS", "DBMS", "Computer Networks"] }
];

const experiences = [
  {
    year: "May 2026",
    place: "Remote",
    role: "Technical Team Intern",
    company: "Rahul Sir Classes",
    body:
      "Resolved 15+ frontend and backend issues, improving platform stability and UX for 1,000+ active learners. Optimized CSS and JavaScript load times, boosting page speed scores by 25% across student-facing web systems."
  },
  {
    year: "2025",
    place: "Gurugram, India",
    role: "Software Development Intern",
    company: "Exicom Tele-Systems Ltd.",
    body:
      "Designed and delivered a full-stack Employee Management System on Spring Boot + PostgreSQL handling complex CRUD, role-based access control, advanced search with pagination, and a training module. Contributed to modular backend service architecture, database schema design, and production-grade admin workflows."
  },
  {
    year: "2024",
    place: "Remote",
    role: "Open Source Contributor",
    company: "GSSoC 2024",
    body:
      "Merged 12+ PRs across production repositories - contributions spanned Spring Boot and React codebases including API improvements, bug fixes, and performance enhancements."
  },
  {
    year: "2024-Present",
    place: "Pan India",
    role: "Hackathon Competitor",
    company: "National hackathons",
    body:
      "Competed in 10+ national hackathons, reaching semi-finals twice. Shipped full-stack prototypes under 24-48 hour constraints including real-time safety and AI-powered platforms."
  },
  {
    year: "2024",
    place: "Remote",
    role: "Mentor",
    company: "Women Who Code",
    body: "Guided 30+ students in DSA, algorithms, and backend project development best practices."
  }
];

const projects = [
  {
    title: "BakeAura",
    featured: true,
    description:
      "Production-grade local home-bakery marketplace — 'Swiggy for home bakers' — with four roles (Customer, Seller, Influencer, Admin), a short-video Reels discovery feed with weighted ranking, and an influencer referral/commission wallet. Real-world engineering: geofenced orders via Haversine distance, optimistic locking against overselling, idempotent Razorpay payment webhooks, circuit breakers on third-party APIs, and live order tracking over WebSocket/STOMP.",
    tech: ["Java 21", "Spring Boot 3.5", "Spring Security", "JWT", "PostgreSQL", "Redis", "Razorpay", "WebSocket/STOMP", "Resilience4j", "Bucket4j", "Docker", "React 18", "Zustand", "Cloudinary"],
    github: "https://github.com/sneha-860/Bakeaura",
    live: ""
  },
  {
    title: "AuditAI",
    description:
      "Production-ready AI spend audit tool for startup teams. Analyzes AI subscriptions, seats, and API costs to generate deterministic savings recommendations, a spend health score, and shareable audit reports via email.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Claude API", "Zustand", "Resend"],
    github: "https://github.com/sneha-860/AuditAI",
    live: "https://audit-dc0grxzer-sneha-860s-projects.vercel.app/"
  },
  {
    title: "HackExplore",
    description:
      "Hackathon and internship aggregator that scrapes Devfolio, Unstop, DoraHacks, Devpost, and Internshala into a single searchable feed with platform logos, deadlines, durations, and stipends.",
    tech: ["Node.js", "Express", "Puppeteer", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sneha-860/HackExplore",
    live: "https://hack-explore.vercel.app/"
  },
  {
    title: "Lumiere - Luxury Perfume Shop",
    description:
      "Full-stack luxury ecommerce platform with product catalog, advanced filters, cart and wishlist drawers, Stripe Checkout integration, and JWT authentication. Seeded with 13 demo products and deployed on Vercel.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Vite"],
    github: "https://github.com/sneha-860/Shopify_Internship_Project",
    live: ""
  },
  {
    title: "Redis Guardrails - Social Media Backend",
    description:
      "Spring Boot backend for posts, comments, and likes with Redis-powered virality scoring, atomic bot guardrails, and smart notification batching. Handles 200 concurrent requests with zero race conditions.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "JUnit 5"],
    github: "https://github.com/sneha-860/SocialMedia_Backend",
    live: ""
  },
  {
    title: "QuantaraX",
    description:
      "Decentralized high-speed file transfer framework using QUIC protocol, TLS 1.3 end-to-end encryption, Reed-Solomon forward error correction, and NAT traversal relay fallback. Cross-platform Flutter client with Prometheus and Grafana observability.",
    tech: ["Go", "QUIC", "Flutter", "Dart", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/sneha-860/QuantaraX",
    live: ""
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack EMS built with Spring Boot and PostgreSQL featuring complex CRUD operations, role-based access control, advanced search with pagination, and a training module. Delivered during internship at Exicom Tele-Systems.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Spring Security"],
    github: "https://github.com/sneha-860/Employee_management",
    live: ""
  }
];

const achievements = [
  {
    title: "Honours",
    strong: "Reliance Foundation Undergraduate Scholar",
    items: [
      "Selected among top 5,000 from 2,50,000+ applicants nationally through academic merit, aptitude test, and personal statement.",
      "Top 2% national selection signal across a highly competitive undergraduate pool."
    ],
    featured: true
  },
  {
    title: "Hackathons",
    strong: "10+ national hackathon builds",
    items: ["Semi-finalist in 2 national hackathons", "Shipped full-stack and AI-powered prototypes under 24-48 hour constraints"]
  },
  {
    title: "Open Source",
    strong: "12+ pull requests merged",
    items: ["12+ PRs merged in GSSoC 2024 - one of India's largest open source programs", "Contributions in React, Next.js, Spring Boot, and Node.js"]
  },
  {
    title: "Mentorship",
    strong: "30+ students mentored",
    items: ["Mentored 30+ students at Women Who Code in DSA and system design", "Guided backend project development and algorithmic problem-solving fundamentals"]
  }
];

const stats = [
  { value: 9.08, decimals: 2, suffix: "", label: "CGPA" },
  { value: 10, decimals: 0, suffix: "+", label: "Hackathons" },
  { value: 12, decimals: 0, suffix: "+", label: "OSS Pull Requests" },
  { value: 30, decimals: 0, suffix: "+", label: "Students Mentored" }
];

const skillDetails = {
  Languages: "Core programming and query languages used across backend services, scripts, and data-heavy workflows.",
  Backend: "Primary production stack for Java APIs, service boundaries, authentication, persistence, and build tooling.",
  "Secondary Backend": "Additional backend runtime for API prototypes, integrations, and TypeScript-based server work.",
  Frontend: "Frontend foundations used to build responsive product interfaces around backend-heavy systems.",
  Databases: "Relational and NoSQL storage with attention to query paths, indexing, caching, and practical schema design.",
  Testing: "Unit testing and mocking tools for validating Java services and keeping backend logic reliable.",
  "AI/ML": "Applied AI tooling for recommendation, retrieval, NLP, and model-backed product workflows.",
  "DevOps & Tools": "Deployment, cloud, messaging, automation, and development tools used around production systems.",
  "CS Fundamentals": "Computer science foundations that support system design, problem solving, and backend architecture."
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

function Reveal({ children, className = "", delay = 0, as: Component = motion.div }) {
  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}

function CountUp({ value, decimals, suffix }) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1200, bounce: 0 });
  const rounded = useTransform(spring, (latest) => `${latest.toFixed(decimals)}${suffix}`);

  return (
    <motion.strong
      className="stat-value"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => count.set(value)}
    >
      {rounded}
    </motion.strong>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(1);
  const [activeProject, setActiveProject] = useState(0);
  const [activeOtherProject, setActiveOtherProject] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeAchievement, setActiveAchievement] = useState(0);

  const flagship = projects[0];
  const otherProjects = projects.slice(1);

  useEffect(() => {
    const NAV_HEIGHT = 80;
    const DURATION = 900;

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function smoothScroll(targetY) {
      const startY = window.scrollY;
      const diff = targetY - startY;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        window.scrollTo(0, startY + diff * easeOutExpo(progress));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function handleAnchorClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      smoothScroll(top);
    }

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="nav-brand" href="#hero" aria-label="Sneha Kalra home" onClick={() => setMenuOpen(false)}>
            Sneha Kalra
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main">
        <section id="hero" className="hero section">
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow">
                Backend Engineer building distributed systems at scale.</p>
              <h1>I build backend systems that scale.</h1>
              <p className="hero-subline">Java engineer specialising in microservices, distributed architecture, and AI-integrated platforms.</p>
              <motion.div className="hero-signals" aria-label="Backend engineering focus areas" variants={{ visible: { transition: { staggerChildren: 0.06 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {heroSignals.map((signal) => (
                  <motion.span key={signal} variants={fadeUp}>
                    {signal}
                  </motion.span>
                ))}
              </motion.div>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#projects">
                  View My Work
                </a>
                <a className="button button-secondary" href="/assets/resume/Sneha_Kalra.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-visual" delay={0.1}>
              <motion.div className="code-panel" whileHover={{ y: -2 }} transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}>
                <span className="code-scan" aria-hidden="true" />
                <div className="code-panel-header">
                  <span />
                  <span />
                  <span />
                  <p>Developer.java</p>
                </div>
                <pre><code><span className="code-keyword">final</span> <span className="code-type">Developer</span> engineer = <span className="code-type">Developer</span>.builder()
    .name(<span className="code-string">"Sneha Kalra"</span>)
    .stack(<span className="code-type">List</span>.of(
        <span className="code-string">"Java"</span>,
        <span className="code-string">"Spring Boot"</span>,
        <span className="code-string">"Microservices"</span>
    ))
    .focus(<span className="code-string">"Distributed Systems at Scale"</span>)
    .available(<span className="code-boolean">true</span>)
    .build();</code></pre>
              </motion.div>
              <div className="system-map" role="img" aria-label="System topology with API Gateway connected to auth, services, Kafka, PostgreSQL, and Redis">
                <p className="map-label">System Topology</p>
                <span className="data-packet data-packet-1" aria-hidden="true" />
                <span className="data-packet data-packet-2" aria-hidden="true" />
                <span className="data-packet data-packet-3" aria-hidden="true" />
                <span className="data-packet data-packet-4" aria-hidden="true" />
                {["API Gateway", "Auth", "Services", "Kafka", "PostgreSQL", "Redis"].map((node, index) => (
                  <motion.div key={node} className={`map-node map-node-${index + 1} ${index === 0 ? "map-node-primary" : ""}`}>
                    {node}
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section section-muted">
          <div className="container">
            <Reveal className="about-shell">
              <div className="about-main">
                <div className="section-heading">
                  <p className="eyebrow">About</p>
                  <h2>Backend-first engineering with systems depth.</h2>
                </div>
                <p className="about-text">
                  I'm a Java backend engineer pursuing B.Tech in Information Technology at MSIT Delhi with a 9.08 CGPA. I build scalable microservices, distributed systems, and AI-integrated backend workflows with a focus on clean architecture, efficient data modelling, and resilient service design.
                </p>
                <div className="identity-strip" aria-label="Portfolio identity">
                  {["Reliance Foundation Scholar", "Open Source Contributor", "Hackathon Competitor", "Mentor"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <aside className="profile-card" aria-label="Sneha Kalra profile highlight">
                <div className="profile-image-wrap">
                  <Image src="/assets/profilemicro.jpg" width={560} height={672} alt="Sneha Kalra" priority />
                </div>
              </aside>
            </Reveal>

            <Reveal className="stats-grid" aria-label="Profile stats">
              {stats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  <span>{stat.label}</span>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Production backend stack with product-company depth.</h2>
            </Reveal>
            <Reveal className="skills-console">
              <div className="skill-tabs" aria-label="Skill categories">
                {skills.map((skill, index) => (
                  <button
                    className={activeSkill === index ? "is-active" : ""}
                    key={skill.title}
                    type="button"
                    onClick={() => setActiveSkill(index)}
                    onFocus={() => setActiveSkill(index)}
                    onMouseEnter={() => setActiveSkill(index)}
                  >
                    <span>{skill.title}</span>
                    <small>{skill.tags.length}</small>
                  </button>
                ))}
              </div>

              <motion.article
                className="skill-detail-card"
                key={skills[activeSkill].title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="skill-detail-header">
                  <div>
                    <p className="panel-label">Selected stack</p>
                    <h3>{skills[activeSkill].title}</h3>
                  </div>
                  <span>{skills[activeSkill].tags.length} skills</span>
                </div>
                <p className="skill-detail-copy">{skillDetails[skills[activeSkill].title]}</p>
                <motion.div
                  className="skill-tags skill-tags-large"
                  variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
                  initial="hidden"
                  animate="visible"
                >
                  {skills[activeSkill].tags.map((tag) => (
                    <motion.span key={tag} variants={fadeUp}>
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.article>
            </Reveal>

          </div>
         </section>
          <section id="projects" className="section section-muted">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Selected builds across backend systems, AI workflows, and product engineering.</h2>
            </Reveal>

            {/* ── FLAGSHIP: BakeAura ── */}
            <Reveal className="flagship-wrap">
              <motion.article
                className="flagship-card"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flagship-glow" aria-hidden="true" />
                <div className="flagship-top">
                  <div className="flagship-labels">
                    <span className="flagship-pill">★ Flagship Project</span>
                  </div>
                  <span className="flagship-index">01</span>
                </div>
                <div className="flagship-body">
                  <div className="flagship-copy">
                    <h3 className="flagship-title">{flagship.title}</h3>
                    <p className="flagship-desc">{flagship.description}</p>
                    <div className="flagship-highlights">
                      {["Geofenced orders (Haversine)","Optimistic locking","Idempotent Razorpay webhooks","Circuit breakers (Resilience4j)","WebSocket/STOMP live tracking","Redis cache + cart + tokens","Short-video Reels feed","4-role approval system"].map(h => (
                        <span key={h}>{h}</span>
                      ))}
                    </div>
                    <div className="flagship-tech">
                      {flagship.tech.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="flagship-actions">
                      <a className="button button-primary" href={flagship.github} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
                      {flagship.live && <a className="button button-secondary" href={flagship.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                    </div>
                  </div>
                  <div className="flagship-visual" aria-hidden="true">
                    <div className="fv-header"><span /><span /><span /><p>BakeAura Architecture</p></div>
                    <div className="fv-nodes">
                      {[["React 18","Zustand"],["Spring Boot 3.5","Spring Security"],["PostgreSQL","Redis"],["Razorpay","Cloudinary"],["WebSocket","Resilience4j"]].map(([a,b],i) => (
                        <motion.div key={i} className="fv-row"
                          initial={{ opacity: 0, x: 18 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08, duration: 0.42, ease: [0.22,1,0.36,1] }}
                        >
                          <span className="fv-node">{a}</span>
                          <span className="fv-arrow">→</span>
                          <span className="fv-node">{b}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="fv-status">
                      <span className="fv-dot" />
                      <p>Modular monolith · Docker Compose · JWT + Redis auth</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>

            {/* ── OTHER PROJECTS ── */}
            <Reveal className="other-projects-heading">
              <p className="eyebrow" style={{ marginTop: "60px" }}>More Projects</p>
            </Reveal>
            <Reveal className="projects-showcase">
              <div className="project-rail" aria-label="Project list">
                {otherProjects.map((project, index) => (
                  <button
                    className={activeOtherProject === index ? "is-active" : ""}
                    key={project.title}
                    type="button"
                    onClick={() => setActiveOtherProject(index)}
                    onFocus={() => setActiveOtherProject(index)}
                    onMouseEnter={() => setActiveOtherProject(index)}
                  >
                    <span>{String(index + 2).padStart(2, "0")}</span>
                    <strong>{project.title}</strong>
                    <small>{project.tech.length} tools</small>
                  </button>
                ))}
              </div>

              <motion.article
                className="project-detail-card"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="project-preview">
                  <span>{String(activeOtherProject + 2).padStart(2, "0")}</span>
                  <p>{otherProjects[activeOtherProject].live ? "Live build" : "Repository build"}</p>
                  <i aria-hidden="true" />
                  <i aria-hidden="true" />
                  <i aria-hidden="true" />
                </div>
                <motion.div
                  key={otherProjects[activeOtherProject].title}
                  className="project-detail-inner"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="project-detail-header">
                    <div>
                      <p className="panel-label">Selected project</p>
                      <h3>{otherProjects[activeOtherProject].title}</h3>
                    </div>
                    <span>{otherProjects[activeOtherProject].tech.length} tools</span>
                  </div>
                  <p className="project-detail-copy">{otherProjects[activeOtherProject].description}</p>
                  <div className="skill-tags project-tags">
                    {otherProjects[activeOtherProject].tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a className="button button-primary" href={otherProjects[activeOtherProject].github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    {otherProjects[activeOtherProject].live ? (
                      <a className="button button-secondary" href={otherProjects[activeOtherProject].live} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    ) : (
                      <span className="button button-disabled">Repository Only</span>
                    )}
                  </div>
                </motion.div>
              </motion.article>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">Experience</p>
              <h2>Applied engineering across backend, open source, and rapid product delivery.</h2>
            </Reveal>
            <div className="timeline">
              {experiences.map((item, index) => (
                <Reveal
                  as={motion.article}
                  className={`timeline-item ${activeExperience === index ? "is-active" : ""}`}
                  key={`${item.role}-${item.year}`}
                >
                  <div className="timeline-meta">
                    <span>{item.year}</span>
                    <span>{item.place}</span>
                  </div>
                  <button
                    className="timeline-content"
                    type="button"
                    onClick={() => setActiveExperience(index)}
                    onFocus={() => setActiveExperience(index)}
                    onMouseEnter={() => setActiveExperience(index)}
                  >
                    <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                    <motion.p
                      key={`${item.role}-${activeExperience === index}`}
                      initial={{ opacity: 0.72 }}
                      animate={{ opacity: activeExperience === index ? 1 : 0.82 }}
                      transition={{ duration: 0.22 }}
                    >
                      {item.body}
                    </motion.p>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">Achievements</p>
              <h2>Selective proof of consistency, execution, and technical range.</h2>
            </Reveal>
            <Reveal className="achievements-console">
              <div className="achievement-tabs" aria-label="Achievement categories">
                {achievements.map((achievement, index) => (
                  <button
                    className={activeAchievement === index ? "is-active" : ""}
                    key={achievement.title}
                    type="button"
                    onClick={() => setActiveAchievement(index)}
                    onFocus={() => setActiveAchievement(index)}
                    onMouseEnter={() => setActiveAchievement(index)}
                  >
                    <span>{achievement.title}</span>
                    <strong>{achievement.strong}</strong>
                  </button>
                ))}
              </div>

              <motion.article
                className={`achievement-detail-card ${achievements[activeAchievement].featured ? "is-featured" : ""}`}
                key={achievements[activeAchievement].title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="achievement-detail-header">
                  <div>
                    <p className="panel-label">Selected proof</p>
                    <h3>{achievements[activeAchievement].title}</h3>
                  </div>
                  {achievements[activeAchievement].featured ? <span>Top 2%</span> : <span>{String(activeAchievement + 1).padStart(2, "0")}</span>}
                </div>
                <strong>{achievements[activeAchievement].strong}</strong>
                <ul>
                  {achievements[activeAchievement].items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <Reveal className="contact-card">
              <p className="eyebrow">Contact</p>
              <h2>Let's Build Something</h2>
              <p>Open to full-time SDE roles, backend engineering positions, and founding engineer opportunities at high-growth product startups.</p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:snehakalra218@gmail.com">
                  Email Me
                </a>
                <a className="contact-email" href="mailto:snehakalra218@gmail.com">
                  snehakalra218@gmail.com
                </a>
              </div>
              <div className="contact-links" aria-label="Social links">
                <a href="https://github.com/sneha-860" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/sneha-kalra-5b4999281" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/snehakalra74" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Copyright 2026 Sneha Kalra. Java Backend Engineer.</p>
        </div>
      </footer>
    </>
  );
}

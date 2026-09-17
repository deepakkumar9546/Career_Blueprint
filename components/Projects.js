"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "EventNexus",
    description:
      "A microservices-based event ticketing platform with authentication, event management, ticket booking, payments and notifications. Implements a Saga-based purchase workflow with compensation handling for reliable distributed transactions.",
    tech: [
      "Java 21",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Microservices",
      "Redis",
      "Docker Compose",
    ],
    github: "https://github.com/deepakkumar9546/EventNexus",
    live: null,
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
    bg: "rgba(167,139,250,0.05)",
    icon: "ti-calendar-event",
    tag: "Microservices",
  },
  {
    title: "VaultFlow",
    description:
      "A full-stack digital banking application supporting account management and RTGS/NEFT payments. Includes JWT-based authentication, protected APIs, transaction safeguards, scheduled NEFT batch settlement, rollback handling and searchable transaction history.",
    tech: [
      "Java 17",
      "Spring Boot",
      "React",
      "MySQL",
      "Spring Security",
      "JWT",
      "JPA",
      "Hibernate",
    ],
    github: "https://github.com/deepakkumar9546/VaultFlow",
    live: null,
    color: "#60a5fa",
    border: "rgba(96,165,250,0.2)",
    bg: "rgba(96,165,250,0.05)",
    icon: "ti-building-bank",
    tag: "FinTech",
  },
  {
    title: "NetPulse",
    description:
      "A Core Java job scheduling and execution system designed for concurrent processing and reliable task execution. Supports priority-based scheduling, worker pools, retries with exponential backoff, dead-letter handling, job dependencies and restart recovery.",
    tech: [
      "Java 21",
      "ExecutorService",
      "ScheduledExecutorService",
      "BlockingQueue",
      "PriorityBlockingQueue",
      "Concurrency",
      "JUnit 5",
      "Maven",
    ],
    github: "https://github.com/deepakkumar9546/NetPulse",
    live: null,
    color: "#34d399",
    border: "rgba(52,211,153,0.2)",
    bg: "rgba(52,211,153,0.05)",
    icon: "ti-activity",
    tag: "Core Java",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#0f0f1a",
        padding: "100px 0",
      }}
    >
      {/* Load Tabler Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 80px",
        }}
        className="about-container"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div
            variants={fadeUp}
            style={{ marginBottom: "48px" }}
          >
            <p
              style={{
                color: "#a78bfa",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              My Work
            </p>

            <h2
              style={{
                fontSize: "40px",
                fontWeight: 800,
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>

            <p
              style={{
                color: "#8b8bad",
                fontSize: "15px",
                lineHeight: 1.7,
                maxWidth: "650px",
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              A selection of projects showcasing my experience with
              Java, Spring Boot, React, databases, microservices and
              concurrent systems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{
              display: "grid",
             gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                style={{
                  background: project.bg,
                  border: `1px solid ${project.border}`,
                  borderRadius: "16px",
                  padding: "26px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  transition: "all 0.3s",
                  minHeight: "420px",
                }}
              >
                {/* Top gradient line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {/* Project Icon */}
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "11px",
                        background: `${project.color}20`,
                        border: `1px solid ${project.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className={`ti ${project.icon}`}
                        aria-hidden="true"
                        style={{
                          fontSize: "21px",
                          color: project.color,
                        }}
                      />
                    </div>

                    <div>
                      <h3
                        style={{
                          color: "#ffffff",
                          fontSize: "19px",
                          fontWeight: 700,
                          margin: 0,
                        }}
                      >
                        {project.title}
                      </h3>

                      <span
                        style={{
                          display: "inline-block",
                          background: `${project.color}20`,
                          color: project.color,
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "3px 9px",
                          borderRadius: "20px",
                          marginTop: "5px",
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid #2d2d5e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        project.color;
                      e.currentTarget.style.background =
                        `${project.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "#2d2d5e";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                    }}
                  >
                    <i
                      className="ti ti-brand-github"
                      aria-hidden="true"
                      style={{
                        fontSize: "19px",
                        color: "#e6edf3",
                      }}
                    />
                  </a>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "#8b8bad",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, #2d2d5e, transparent)",
                  }}
                />

                {/* Technologies */}
                <div>
                  <p
                    style={{
                      color: "#6b6b8d",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      margin: "0 0 10px",
                    }}
                  >
                    Technologies
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: `${project.color}10`,
                          border: `1px solid ${project.border}`,
                          color: project.color,
                          fontSize: "12px",
                          fontWeight: 500,
                          padding: "5px 11px",
                          borderRadius: "20px",
                          transition: "all 0.2s",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background =
                            `${project.color}30`;
                          e.target.style.color = "#ffffff";
                          e.target.style.borderColor =
                            project.color;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background =
                            `${project.color}10`;
                          e.target.style.color =
                            project.color;
                          e.target.style.borderColor =
                            project.border;
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "4px",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: project.color,
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    View Source Code ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub More Projects */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#6b6b8d",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              Want to explore more of my work?
            </p>

            <a
              href="https://github.com/deepakkumar9546"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                display: "inline-block",
              }}
            >
              View GitHub ↗
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
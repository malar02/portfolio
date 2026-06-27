import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Sign Language Recognition",
    description:
      "Developed a real-time sign language recognition system using Computer Vision and Deep Learning. Utilized MediaPipe for hand landmark detection and TensorFlow for gesture classification to translate sign language into text.",
    tech: [
      "Python",
      "TensorFlow",
      "MediaPipe",
      "OpenCV",
      "Machine Learning",
    ],
    github: "https://github.com/malar02/GestureVision",
    demo: "",
  },
  {
    title: "Violence Detection System",
    description:
      "Designed an AI-powered surveillance system capable of detecting violent activities in real time using Deep Learning, OpenCV, PyTorch, and BLIP image captioning to enhance public safety monitoring.",
    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "BLIP",
      "Deep Learning",
    ],
    github: "https://github.com/malar02/violence-detection-system",
    demo: "",
  },
  {
    title: "Student Performance Analysis",
    description:
      "Analyzed student academic datasets using Python, Pandas, NumPy, and Matplotlib. Performed data preprocessing, visualization, and statistical analysis to identify trends that improve educational outcomes.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Analysis",
    ],
    github: "https://github.com/malar02/student-performance-analysis", // Replace if different
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-cyan-400 text-center uppercase tracking-[4px]">
          My Work
        </p>

        <h2 className="projects-title">
          Featured Projects
        </h2>

        <p className="projects-subtitle">
          AI, Machine Learning and Full Stack Development Projects
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <FaGithub />
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
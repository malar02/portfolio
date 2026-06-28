import "../styles/Skills.css";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "MediaPipe",
      "YOLO",
      "Computer Vision",
      "Deep Learning",
    ],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Machine Learning",
      "Problem Solving",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="skills-subtext">My Expertise</p>

        <h2 className="skills-title">Technical Skills</h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
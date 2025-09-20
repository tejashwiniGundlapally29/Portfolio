import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Angular", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript/TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS / Bootstrap", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Java / Spring Boot", level: 95, category: "backend" },
  { name: "Node.js / Express", level: 80, category: "backend" },
  { name: "GraphQL / REST APIs", level: 85, category: "backend" },
  { name: "Microservices", level: 85, category: "backend" },
  { name: "PostgreSQL / MySQL / MongoDB", level: 80, category: "backend" },

  // Cloud & DevOps
  { name: "AWS", level: 85, category: "cloud" },
  { name: "Azure", level: 80, category: "cloud" },
  { name: "Docker", level: 80, category: "cloud" },
  { name: "CI/CD & GitHub Actions", level: 85, category: "cloud" },
  { name: "Kubernetes", level: 70, category: "cloud" },

  // AI & Automation
  { name: "GPT-4 / Claude", level: 70, category: "AI" },
  { name: "Python Automation", level: 75, category: "AI" },

  // Tools
  { name: "Git/GitHub", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jira / Agile Tools", level: 80, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
];

const categories = ["all", "frontend", "backend", "cloud", "AI", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid with Scroll-triggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
        >
          {filteredSkills.map((skill, key) => (
            <motion.div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              variants={skillVariants}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full origin-left"
                  initial={{ width: 0 }}
                  animate={{ width: skill.level + "%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-1">
                <CountUp start={0} end={skill.level} duration={1.2} suffix="%" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

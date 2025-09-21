import { useState, useEffect } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

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
  const [filteredSkills, setFilteredSkills] = useState(skills);

  // Detect mobile screens
  const isMobile = useMediaQuery({ maxWidth: 640 });

  // Update filtered skills whenever the category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) =>
            isMobile ? (
              // On mobile, render without motion
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <CountUp start={0} end={skill.level} duration={1.2} suffix="%" />
                </div>
              </div>
            ) : (
              <motion.div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: skill.level + "%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                <div className="text-right mt-1">
                  <CountUp start={0} end={skill.level} duration={1.2} suffix="%" />
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

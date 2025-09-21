import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

// Example skills data
const skills = [
  { name: "React", level: 90, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 90, category: "backend" },
  { name: "AWS", level: 80, category: "cloud" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "TensorFlow", level: 70, category: "AI" },
  // add all other skills here
];

const categories = ["all", "frontend", "backend", "cloud", "AI", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  // Detect if screen width is mobile
  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    if (activeCategory === "all") setFilteredSkills(skills);
    else setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 px-4 sm:px-8 md:px-12 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
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
          {filteredSkills.map((skill, key) => {
            const skillContent = (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col justify-between"
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
            );

            // On mobile, render normally without motion
            if (isMobile) return skillContent;

            // On desktop, use motion animation
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: key * 0.1 }}
              >
                {skillContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

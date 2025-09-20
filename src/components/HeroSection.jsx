import profilePic from "@/assets/profile.jpeg";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12"
    >
      {/* Profile photo */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-[300px] md:w-[340px] lg:w-[340px] h-[520px] md:h-[200px] lg:h-[600px] mb-8 lg:mb-0 lg:mr-12 lg:-ml-16"
      >
        <img
          src={profilePic}
          alt="Tejashwini Gundlapally"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Right side content */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg"
      >
        <h1 className="hero-name">
          {"Tejashwini Gundlapally".split("").map((char, index) => (
            <span
              key={index}
              className="animate-letter inline-block"
              style={{ "--i": index }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="hero-paragraph mt-4">
          I build scalable, cloud-powered applications that merge strong backend
          engineering with intuitive front-end design—turning complex ideas into
          seamless digital experiences.
        </p>

        <div className="pt-6">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

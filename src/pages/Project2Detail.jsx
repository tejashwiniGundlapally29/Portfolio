import { PaperBackground } from "../components/PaperBackground";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export const Project2Detail = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const isHeroInView = useInView(sectionRef, { once: true, rootMargin: "-100px" });
  const isContentInView = useInView(contentRef, { once: false, rootMargin: "-100px" });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to section on main page
  const scrollToSection = (id) => {
    navigate("/"); // navigate to main page first
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150); // wait for DOM to render
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <PaperBackground />

      {/* Hero Section */}
      <div
        ref={sectionRef}
        className="relative h-screen bg-center flex flex-col justify-center"
        style={{
          backgroundImage: "url('/projects/project2-bg.png')",
          backgroundSize: "95%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Project Title */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="absolute bottom-10 left-8 text-3xl md:text-5xl font-bold z-10"
        >
          Talking to a Machine: Image Question Answering
        </motion.h1>

        {/* Top Navigation Buttons */}
        <div className="absolute top-6 right-6 flex gap-4 z-20">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-2 rounded-md shadow-md transition ${
                item.name === "Contact"
                  ? "bg-secondary text-white hover:bg-secondary/80"
                  : "bg-primary text-white hover:bg-primary/80"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-start px-6 py-16 space-y-16"
      >
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center space-y-6"
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Project Overview
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-gray-200"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            It started with a question: how can machines understand both what they
            <em> see </em> and what we <em> ask </em> about it? This project built a
            system that takes an image and a related question, then generates an
            answer. By combining <strong>CNNs</strong> for vision and
            <strong> LSTMs</strong> for language, the model was able to connect
            pixels with words.
          </p>
        </motion.div>

        {/* Optional Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/projects/flow2.png"
            alt="CNN + LSTM Architecture"
            className="rounded-xl shadow-lg max-w-3xl w-full"
          />
        </motion.div>

        {/* Purpose & Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl text-center space-y-4"
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Purpose & Approach
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-gray-200"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The project aimed to bridge vision and language. Image features were
            extracted with <strong>VGG16</strong>, while LSTMs processed encoded
            questions. Together, they predicted answers one word at a time,
            learning context through sequence modeling.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl text-center space-y-4"
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Key Features
          </h2>
          <ul
            className="list-disc list-inside text-left text-base md:text-lg leading-relaxed text-gray-200 space-y-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <li>Image feature extraction with VGG16 CNN.</li>
            <li>Language encoding with embeddings and LSTMs.</li>
            <li>Sequence-based word prediction for answers.</li>
            <li>End-to-end pipeline from image + question → answer.</li>
          </ul>
        </motion.div>

        {/* Why LSTMs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl text-center space-y-4"
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why LSTMs?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-gray-200"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Dense networks fail to capture meaning because words depend on their
            neighbors. LSTMs solve this with memory cells and gates, learning
            long-term dependencies and producing more meaningful answers.
          </p>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 mb-12 flex justify-center"
        >
          <a
            href="https://github.com/yourusername/yourproject"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg md:text-xl text-gray-300 hover:text-white transition"
          >
            <FaGithub size={28} /> View on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

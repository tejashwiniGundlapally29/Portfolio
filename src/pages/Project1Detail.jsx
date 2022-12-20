import { PaperBackground } from "../components/PaperBackground";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Projects", href: "projects" }, // no '#' needed, we handle scroll via ID
  { name: "Contact", href: "contact" },
];

export const Project1Detail = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: false, margin: "-100px" });

  const navigate = useNavigate();

  // Scroll to top every time page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    navigate("/"); // go to main page
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150); // wait for main page DOM to render
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <PaperBackground />

      {/* Hero Section */}
      <div
        ref={sectionRef}
        className="relative h-screen bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('/projects/project-bg.png')" }}
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
          className="absolute bottom-10 left-8 text-4xl md:text-6xl font-bold z-10"
        >
          Shopping Assistance for Visually-Impaired
        </motion.h1>

        {/* Top Navigation Buttons */}
        <div className="absolute top-6 right-6 flex gap-4 z-20">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-primary/80 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center space-y-6 font-sans tracking-wide text-gray-100"
        >
          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="mt-12 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            It started with a simple idea: help visually impaired people shop
            more independently. Daily tasks like identifying packaged products
            were frustrating and slow. The goal was to build a system that could
            scan barcodes with a smartphone and instantly provide product
            information through text and speech.
            <br />
            <br />
            The app needed to be easy to use. Point the camera at a barcode, and
            the system would fetch the product details from a database.
            <br />
            <br />
            I’m proud of how the system empowers visually impaired users to shop
            confidently and independently, turning a once challenging task into
            a smooth, everyday experience.
          </motion.p>

          {/* Image before Purpose & Advantages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mt-16 mb-12"
          >
            <img
              src="/projects/flowc.png"
              alt="Shopping Assistance Flow"
              className="rounded-xl shadow-lg max-w-3xl w-full"
            />
          </motion.div>

          {/* Purpose & Modules Sections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto mt-16"
          >
            {/* Purpose & Advantages */}
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Purpose & Advantages
            </h2>
            <ul
              className="list-disc list-inside space-y-3 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <li>Assist visually impaired users in identifying packaged products.</li>
              <li>Save time and reduce stress when shopping.</li>
              <li>Easy to use with most modern smartphones.</li>
              <li>Supports barcode scanning, database retrieval, and audio output.</li>
            </ul>

            {/* Modules & Features */}
            <h2
              className="text-2xl md:text-3xl font-extrabold mt-16 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Modules & Features
            </h2>
            <ul
              className="list-disc list-inside space-y-3 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <li>Barcode Scanning and Pre-processing using Python libraries.</li>
              <li>Database Access for product information retrieval.</li>
              <li>Text-to-Speech conversion for audio output.</li>
              <li>User-friendly interface for visually impaired users.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* GitHub Link at Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 mb-12 flex justify-center"
        >
          <a
            href="https://github.com/tejashwiniGundlapally29/Shopping-assistance-for-visually-imapred.git"
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

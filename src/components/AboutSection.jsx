import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a 💻 Full-Stack Developer & Cloud Engineer with 5+ years of experience, and an AI/Automation Enthusiast 🤖 building intelligent, high-performance applications. I specialize in scalable, secure, and user-centric solutions across finance, enterprise, and e-commerce domains.
            </p>

            <p className="text-muted-foreground italic">
              All things Dev: Full-Stack Development. API & Microservices. Agile Delivery. Yep, I do them all.
            </p>

            <p className="text-muted-foreground">
              Let’s build software that’s not just functional but transformative — applications that scale, perform, and make a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Column - Role Cards */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            {/* Full-Stack Development Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using Java, Spring Boot, React, and Angular.
                  </p>
                </div>
              </div>
            </div>

            {/* API & Microservices Development Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API & Microservices Development</h4>
                  <p className="text-muted-foreground">
                    Designing secure, high-performance REST, GraphQL, and SOAP APIs, and building microservices for scalable applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Agile Project Delivery Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile Project Delivery</h4>
                  <p className="text-muted-foreground">
                    Leading projects from concept to release with Agile, CI/CD, and cross-team collaboration.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

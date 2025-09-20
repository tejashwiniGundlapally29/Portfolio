import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        // Ultra-tiny squares: 0.2–0.5 px
        this.size = Math.random() * 0.3 + 0.2;

        // Very slow vertical speed: 0.02–0.05 px/sec
        this.speedY = Math.random() * 0.03 + 0.02;
      }

      update() {
        this.y += this.speedY * 0.016; // ~60fps
        if (this.y > height) this.y = -this.size;
      }

      draw(isDark) {
        ctx.fillStyle = isDark
          ? "rgba(200,200,200,0.6)"
          : "rgba(50,50,50,0.6)";
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Adjust particle density based on screen size
    const numParticles = Math.floor((width * height) / 20000);

    const particles = Array.from({ length: numParticles }, () => new Particle());

    const animate = () => {
      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark ? "#000" : "#e0e0e0";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(isDark);
      });

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="star-background-canvas" />;
};

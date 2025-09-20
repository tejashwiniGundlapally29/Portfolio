import React, { useRef, useEffect, useState } from "react";

export const FallingDotsBackground = () => {
  const canvasRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Falling blocks setup
    const spacing = 60;
    const blockSpeed = 20;
    let blocks = [];
    const generateBlocks = () => {
      blocks = [];
      const numX = Math.ceil(canvas.width / spacing);
      const numY = Math.ceil(canvas.height / spacing);
      for (let i = 0; i < numX; i++) {
        for (let j = 0; j < numY; j++) {
          blocks.push({ x: i * spacing, y: j * spacing * Math.random() });
        }
      }
    };
    generateBlocks();

    // Cartoon 3D circles setup
    const maxCircles = 2;
    const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6AD5"];
    let circles = [];
    let circleTimer = 0;

    const createCircle = () => {
      if (circles.length >= maxCircles) return;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 14 + Math.random() * 6; // slightly bigger circles
      const color = colors[Math.floor(Math.random() * colors.length)];
      circles.push({ x, y, radius, progress: 0, speed: Math.PI / 3, color });
    };

    let lastTime = performance.now();

    const draw = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      circleTimer += dt;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = isDarkMode ? "#000" : "#f0f0f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw falling blocks
      ctx.fillStyle = isDarkMode ? "rgba(128,128,128,0.3)" : "rgba(50,50,50,0.3)";
      blocks.forEach((block) => {
        block.y += blockSpeed * dt;
        if (block.y > canvas.height) block.y = 0;
        ctx.fillRect(block.x - 3, block.y - 3, 8, 8); // slightly bigger squares
      });

      // Generate new circles
      if (circleTimer > 2) {
        createCircle();
        circleTimer = 0;
      }

      // Draw 3D cartoon concentric circles
      for (let i = circles.length - 1; i >= 0; i--) {
        const c = circles[i];
        c.progress += c.speed * dt;

        // Radial gradient for 3D effect
        const gradient = ctx.createRadialGradient(
          c.x - c.radius * 0.3,
          c.y - c.radius * 0.3,
          c.radius * 0.1,
          c.x,
          c.y,
          c.radius
        );
        gradient.addColorStop(0, "rgba(255,255,255,0.8)"); // highlight
        gradient.addColorStop(0.5, c.color);
        gradient.addColorStop(1, "rgba(0,0,0,0.1)"); // outer soft shadow

        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.min(c.progress, 2 * Math.PI));
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 14; // thick border
        ctx.shadowColor = c.color;
        ctx.shadowBlur = 15; // soft glowing edge
        ctx.stroke();

        if (c.progress >= 2 * Math.PI) {
          circles.splice(i, 1); // vanish after full circle
        }
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
    window.addEventListener("resize", generateBlocks);
    return () => window.removeEventListener("resize", resize);
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

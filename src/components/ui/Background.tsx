"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.fillStyle = "#ffffff"; // Base background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create moving blobs
      const w = canvas.width;
      const h = canvas.height;
      
      // Blob 1: Violet/Primary
      const x1 = w * 0.2 + Math.sin(t * 0.002) * w * 0.1;
      const y1 = h * 0.2 + Math.cos(t * 0.003) * h * 0.1;
      const r1 = Math.min(w, h) * 0.4;
      
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1);
      g1.addColorStop(0, "rgba(139, 92, 246, 0.08)"); // Primary
      g1.addColorStop(1, "rgba(139, 92, 246, 0)");
      
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.arc(x1, y1, r1, 0, Math.PI * 2);
      ctx.fill();

      // Blob 2: Orange/Accent
      const x2 = w * 0.8 + Math.cos(t * 0.002) * w * 0.1;
      const y2 = h * 0.8 + Math.sin(t * 0.0025) * h * 0.1;
      const r2 = Math.min(w, h) * 0.5;
      
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, r2);
      g2.addColorStop(0, "rgba(249, 115, 22, 0.06)"); // Accent
      g2.addColorStop(1, "rgba(249, 115, 22, 0)");

      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(x2, y2, r2, 0, Math.PI * 2);
      ctx.fill();

      // Blob 3: Blue/Secondary
      const x3 = w * 0.5 + Math.sin(t * 0.004) * w * 0.15;
      const y3 = h * 0.5 + Math.cos(t * 0.002) * h * 0.15;
      const r3 = Math.min(w, h) * 0.6;

      const g3 = ctx.createRadialGradient(x3, y3, 0, x3, y3, r3);
      g3.addColorStop(0, "rgba(56, 189, 248, 0.05)"); // Sky blue
      g3.addColorStop(1, "rgba(56, 189, 248, 0)");

      ctx.fillStyle = g3;
      ctx.beginPath();
      ctx.arc(x3, y3, r3, 0, Math.PI * 2);
      ctx.fill();

      // Subtle Noise Overlay (simulated with random dots)
      // Only draw sparse noise to avoid performance hit
      ctx.fillStyle = "rgba(0,0,0,0.015)";
      for (let i = 0; i < 100; i++) {
        const nx = Math.random() * w;
        const ny = Math.random() * h;
        ctx.fillRect(nx, ny, 1, 1);
      }

      t++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-50 w-full h-full pointer-events-none"
    />
  );
}


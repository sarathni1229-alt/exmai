"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Content types with different colors
const contentTypesRow1 = [
  { label: "Summaries & Takeaways", color: "bg-amber-200 text-amber-900" },
  { label: "Perfectly Accurate Transcript", color: "bg-slate-200 text-slate-800" },
  { label: "Timestamped Overview & Shownotes", color: "bg-blue-200 text-blue-900" },
  { label: "Long Format Articles", color: "bg-amber-200 text-amber-900" },
  { label: "Email Newsletters", color: "bg-slate-200 text-slate-800" },
  { label: "LinkedIn Posts", color: "bg-slate-800 text-white" },
  { label: "Interactive ChatGPT Instances", color: "bg-amber-200 text-amber-900" },
  { label: "Blog Posts", color: "bg-rose-200 text-rose-900" },
];

const contentTypesRow2 = [
  { label: "Social Media Carousels", color: "bg-blue-200 text-blue-900" },
  { label: "Tweets & Longer Threads", color: "bg-blue-300 text-blue-900" },
  { label: "Ready To Use Quotes & Highlights", color: "bg-slate-200 text-slate-800" },
  { label: "Video Scripts", color: "bg-amber-200 text-amber-900" },
  { label: "Email Templates & Sequences", color: "bg-blue-200 text-blue-900" },
  { label: "Youtube Descriptions", color: "bg-slate-800 text-white" },
  { label: "Client Follow Ups", color: "bg-slate-200 text-slate-800" },
  { label: "Lead Magnets", color: "bg-rose-200 text-rose-900" },
];

function GSAPMarqueeRow({ 
  items, 
  direction = "left",
  speed = 50 
}: { 
  items: typeof contentTypesRow1;
  direction?: "left" | "right";
  speed?: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const contentWidth = content.offsetWidth / 2;
    
    // GSAP infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    
    if (direction === "left") {
      gsap.set(content, { x: 0 });
      tl.to(content, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
      });
    } else {
      gsap.set(content, { x: -contentWidth });
      tl.to(content, {
        x: 0,
        duration: speed,
        ease: "none",
      });
    }

    // Pause on hover
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.play();
    
    rowRef.current.addEventListener("mouseenter", handleMouseEnter);
    rowRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill();
      rowRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      rowRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed]);

  // Quadruple items for seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div ref={rowRef} className="relative overflow-hidden py-1 cursor-pointer">
      <div ref={contentRef} className="flex gap-3 whitespace-nowrap w-fit">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className={`
              inline-flex items-center px-4 py-2 rounded-lg
              font-medium text-xs sm:text-sm
              ${item.color}
              transition-all duration-300
              hover:scale-105 hover:shadow-md
            `}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ContentMarquee() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP text reveal animation
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { 
          opacity: 0, 
          y: 30,
          rotationX: -40,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-8 lg:py-10 bg-slate-100/80 overflow-hidden">
      <div className="text-center mb-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2"
        >
          Exemplary AI
        </motion.p>
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2"
          style={{ 
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
            perspective: "1000px",
          }}
        >
          <span className="word inline-block">Agentic</span>{" "}
          <span className="word inline-block">AI</span>{" "}
          <span className="word inline-block">for</span>{" "}
          <span className="word inline-block text-primary">Endless</span>{" "}
          <span className="word inline-block text-primary">Content</span>{" "}
          <span className="word inline-block text-primary">Possibilities</span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto"
        >
          Unleash the power of autonomous agents to turn one recording into infinite assets.
        </motion.p>
      </div>

      {/* GSAP-powered scrolling rows */}
      <div className="space-y-2">
        <GSAPMarqueeRow items={contentTypesRow1} direction="left" speed={40} />
        <GSAPMarqueeRow items={contentTypesRow2} direction="right" speed={45} />
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-6"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-lg text-sm"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}

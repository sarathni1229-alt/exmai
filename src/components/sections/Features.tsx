"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Placeholder features - easy to update later
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Agentic Transcription",
    description: "Highly accurate transcription powered by agentic AI. Supports 50+ languages with speaker detection and timestamps.",
    color: "text-violet-600",
    bgColor: "bg-violet-100",
    borderColor: "group-hover:border-violet-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Agentic Clip Detection",
    description: "Agents automatically identify the most engaging moments in your content. Get viral-worthy clips without manual scrubbing.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "group-hover:border-orange-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Agentic Generation",
    description: "Transform transcripts into blog posts, show notes, newsletters, social threads, and more. Your voice, agent-enhanced.",
    color: "text-sky-600",
    bgColor: "bg-sky-100",
    borderColor: "group-hover:border-sky-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Agentic Export",
    description: "Export content optimized for every platform. Native formats for YouTube, TikTok, LinkedIn, Twitter, and your blog.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "group-hover:border-emerald-300",
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden bg-muted/30">
      {/* Animated background shapes */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
      />

      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 rounded-full bg-white text-primary text-sm font-medium mb-4 shadow-sm"
          >
            Powerful Features
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scale Your Content
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            From transcription to distribution — our AI handles every step of turning your 
            long-form content into dozens of platform-ready pieces.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div
                className={`
                  h-full p-6 lg:p-8 rounded-2xl
                  bg-white border border-border/50 ${feature.borderColor}
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                `}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`
                    w-12 h-12 rounded-xl ${feature.bgColor} ${feature.color}
                    flex items-center justify-center mb-5
                    group-hover:scale-110 transition-transform duration-300
                  `}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl"
                />
              </div>

              {/* Floating number badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light text-white text-sm font-bold flex items-center justify-center shadow-lg"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            And that&apos;s just the beginning...
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Explore all features
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}


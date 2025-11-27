"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { Container } from "@/components/ui";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const steps = [
  {
    number: "01",
    title: "Upload Your Content",
    description: "Drop in any video, podcast, or webinar recording. Our agents accept files up to 4 hours long.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.3)",
    detail: "MP4, MOV, MP3, WAV, YouTube",
  },
  {
    number: "02",
    title: "AI Agents Take Over",
    description: "Our autonomous agents transcribe, analyze, and identify the best moments — all without any input from you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
    detail: "Zero manual work",
  },
  {
    number: "03",
    title: "Content Generated",
    description: "Receive blog posts, social threads, video clips, newsletters, and quotes — all in your brand voice.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    color: "from-sky-500 to-blue-600",
    glowColor: "rgba(14, 165, 233, 0.3)",
    detail: "100+ pieces per video",
  },
  {
    number: "04",
    title: "Review & Publish",
    description: "Quick review, one-click edits if needed, then export or auto-publish to all your platforms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    color: "from-emerald-500 to-green-600",
    glowColor: "rgba(16, 185, 129, 0.3)",
    detail: "Direct platform integrations",
  },
];

// Animated floating particles component
function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      isSquare: Math.random() > 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.isSquare ? 'rounded-sm' : 'rounded-full'}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `linear-gradient(135deg, 
              rgba(139, 92, 246, ${particle.opacity}) 0%, 
              rgba(249, 115, 22, ${particle.opacity}) 50%,
              rgba(14, 165, 233, ${particle.opacity}) 100%)`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Grid dots background
function GridDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Animated scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Progress line animation
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        {/* Grid dots */}
        <GridDots />
        
        {/* Floating particles */}
        <FloatingParticles />
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/80 backdrop-blur-sm text-primary text-sm font-medium mb-4 border border-primary/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Agentic Workflow
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            You Upload.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agents Execute.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Our Agentic AI works autonomously — no prompting, no babysitting. 
            Just upload and let the endless possibilities unfold.
          </motion.p>
        </motion.div>

        {/* Steps - Horizontal Flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border/50 -translate-y-1/2">
            <motion.div
              style={{ width: lineHeight }}
              className="h-full bg-gradient-to-r from-violet-500 via-orange-400 to-emerald-500 origin-left"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative group"
              >
                {/* Step card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-6 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/50 h-full"
                  style={{
                    boxShadow: `0 0 40px ${step.glowColor}`,
                  }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Step number indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {step.icon}
                    </motion.div>
                    <span
                      className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20`}
                      style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Detail badge */}
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-medium shadow-sm`}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {step.detail}
                  </span>

                  {/* Floating dots decoration */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br opacity-60"
                    style={{ background: `linear-gradient(135deg, ${step.glowColor}, transparent)` }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 rounded-sm bg-gradient-to-br opacity-40"
                    style={{ background: `linear-gradient(135deg, ${step.glowColor}, transparent)` }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                  />
                </motion.div>

                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-muted-foreground/30"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-background/40 backdrop-blur-xl border border-border/30"
        >
          {[
            { value: "< 5 min", label: "Average processing time" },
            { value: "100+", label: "Content pieces generated" },
            { value: "0", label: "Manual steps required" },
            { value: "120+", label: "Languages supported" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center p-4 rounded-xl hover:bg-muted/30 transition-colors"
            >
              <div
                className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}


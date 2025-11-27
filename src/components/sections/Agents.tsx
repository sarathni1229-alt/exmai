"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { Container, Button } from "@/components/ui";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Agent workflow pipeline
const agentPipeline = [
  {
    step: 1,
    agent: "Ingestion Agent",
    icon: "📥",
    action: "Receives & processes",
    inputs: ["Video files", "Audio files", "YouTube links", "Zoom recordings"],
    color: "violet",
  },
  {
    step: 2,
    agent: "Transcription Agent", 
    icon: "🎙️",
    action: "Transcribes & analyzes",
    inputs: ["Speaker detection", "Timestamps", "Filler removal", "120+ languages"],
    color: "blue",
  },
  {
    step: 3,
    agent: "Intelligence Agent",
    icon: "🧠",
    action: "Understands & extracts",
    inputs: ["Key moments", "Topics & themes", "Quotes & highlights", "Sentiment"],
    color: "purple",
  },
  {
    step: 4,
    agent: "Creation Agent",
    icon: "✨",
    action: "Generates & formats",
    inputs: ["Blog posts", "Social threads", "Video clips", "Newsletters"],
    color: "orange",
  },
];

const colorClasses = {
  violet: {
    bg: "bg-violet-500",
    light: "bg-violet-100",
    text: "text-violet-600",
    border: "border-violet-200",
    glow: "shadow-violet-500/20",
  },
  blue: {
    bg: "bg-blue-500",
    light: "bg-blue-100", 
    text: "text-blue-600",
    border: "border-blue-200",
    glow: "shadow-blue-500/20",
  },
  purple: {
    bg: "bg-purple-500",
    light: "bg-purple-100",
    text: "text-purple-600", 
    border: "border-purple-200",
    glow: "shadow-purple-500/20",
  },
  orange: {
    bg: "bg-orange-500",
    light: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
    glow: "shadow-orange-500/20",
  },
};

export function Agents() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-violet-100/50 via-transparent to-orange-100/50 rounded-full blur-3xl -z-10" />

      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-orange-100 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-foreground">Autonomous Agent Pipeline</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Four Agents.{" "}
            <span className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent">
              Endless Possibilities.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A seamless pipeline of specialized Agentic AI agents that work together 
            to transform your content — automatically.
          </motion.p>
        </motion.div>

        {/* Agent Pipeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full">
            <motion.div
              style={{ scaleX: lineProgress }}
              className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-orange-500 rounded-full origin-left"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative">
            {agentPipeline.map((agent, index) => {
              const colors = colorClasses[agent.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={agent.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  {/* Step indicator on line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                    className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${colors.bg} text-white flex items-center justify-center text-xl z-10 shadow-lg ${colors.glow}`}
                  >
                    {agent.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-10 p-6 rounded-2xl bg-white border ${colors.border} shadow-sm hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="text-center mb-4">
                      <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>
                        Step {agent.step}
                      </span>
                      <h3 
                        className="text-lg font-bold mt-1"
                        style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                      >
                        {agent.agent}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{agent.action}</p>
                    </div>

                    <div className="space-y-2">
                      {agent.inputs.map((input, i) => (
                        <motion.div
                          key={input}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.light}`}
                        >
                          <svg className={`w-3.5 h-3.5 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-xs font-medium ${colors.text}`}>{input}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Arrow connector */}
                  {index < agentPipeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                      className="absolute -right-4 top-6 z-20"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Agent Pipeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {agentPipeline.map((agent, index) => {
            const colors = colorClasses[agent.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={agent.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-16"
              >
                {/* Vertical line */}
                {index < agentPipeline.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15 }}
                      className={`w-full h-full ${colors.bg} origin-top`}
                    />
                  </div>
                )}

                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`absolute left-0 top-0 w-10 h-10 rounded-full ${colors.bg} text-white flex items-center justify-center text-lg shadow-lg ${colors.glow}`}
                >
                  {agent.icon}
                </motion.div>

                {/* Content */}
                <div className={`p-5 rounded-xl bg-white border ${colors.border} shadow-sm`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>
                      Step {agent.step}
                    </span>
                  </div>
                  <h3 
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {agent.agent}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{agent.action}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {agent.inputs.map((input) => (
                      <span 
                        key={input}
                        className={`px-2 py-1 rounded-md ${colors.light} ${colors.text} text-xs font-medium`}
                      >
                        {input}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Output showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 relative"
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Output Ready
            </motion.div>
            <h3 
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              What comes out the other end
            </h3>
          </div>

          {/* Output cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "📝", label: "Blog Posts" },
              { icon: "🐦", label: "Tweets" },
              { icon: "💼", label: "LinkedIn" },
              { icon: "🎬", label: "Clips" },
              { icon: "📧", label: "Emails" },
              { icon: "💬", label: "Quotes" },
            ].map((output, i) => (
              <motion.div
                key={output.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-4 rounded-xl bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300 text-center cursor-pointer group"
              >
                <motion.span 
                  className="text-3xl block mb-2"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {output.icon}
                </motion.span>
                <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                  {output.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            All of this happens automatically.{" "}
            <span className="font-semibold text-foreground">No prompts required.</span>
          </p>
          <Button size="lg">
            Start Your Agent Pipeline
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

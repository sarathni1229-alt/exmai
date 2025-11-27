"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { Container, Button } from "@/components/ui";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Feature 1: Transcription
function TranscriptionFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const transcriptLines = [
    { speaker: "Host", time: "00:12", text: "Welcome back to the show! Today we're diving into AI content creation..." },
    { speaker: "Guest", time: "00:24", text: "Thanks for having me. I've been working in this space for over 5 years..." },
    { speaker: "Host", time: "00:45", text: "That's incredible. What's the biggest change you've seen?" },
    { speaker: "Guest", time: "01:02", text: "Automation. The ability to repurpose content at scale has completely transformed..." },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-white" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
              Agentic Transcription
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Transcripts That{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Actually Get It Right
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Industry-leading accuracy powered by agentic AI. Our agents transcribe your content 
              with speaker detection, timestamps, and automatic filler word removal — in 50+ languages.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
              {[
                "99%+ accuracy with agentic verification",
                "Speaker diarization — know who said what",
                "Automatic filler word removal (um, uh, like)",
                "120+ languages with auto-detection",
                "Timestamps for easy navigation",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Button size="lg">
                Try Transcription Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
            >
              {/* Header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">transcript.txt</span>
              </div>

              {/* Transcript content */}
              <div className="p-6 space-y-4">
                {transcriptLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-20">
                      <span className={`
                        inline-block px-2 py-1 rounded text-xs font-medium
                        ${line.speaker === "Host" ? "bg-violet-100 text-violet-700" : "bg-orange-100 text-orange-700"}
                      `}>
                        {line.speaker}
                      </span>
                      <span className="block text-xs text-muted-foreground mt-1">{line.time}</span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{line.text}</p>
                  </motion.div>
                ))}
                
                {/* Typing indicator */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                  Transcribing...
                </motion.div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white shadow-lg border border-border/50"
            >
              <span className="text-2xl font-bold text-violet-600">99%</span>
              <span className="text-xs text-muted-foreground block">Accuracy</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white shadow-lg border border-border/50"
            >
              <span className="text-2xl font-bold text-orange-600">50+</span>
              <span className="text-xs text-muted-foreground block">Languages</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Feature 2: Magic Chat
function MagicChatFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const chatMessages = [
    { role: "user", text: "What were the 3 main points discussed in this episode?" },
    { role: "ai", text: "Based on the transcript, the three main points were:\n\n1. The importance of content repurposing for scaling reach\n2. How Agentic AI is transforming the creator economy\n3. Tips for maintaining authenticity while automating" },
    { role: "user", text: "Create a Twitter thread from point #2" },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            style={{ y }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span className="text-white font-semibold">Agentic Chat</span>
                </div>
                <span className="text-white/80 text-sm">AI Assistant</span>
              </div>

              {/* Chat content */}
              <div className="p-4 space-y-4 min-h-[300px]">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`
                      max-w-[85%] px-4 py-3 rounded-2xl text-sm
                      ${msg.role === "user" 
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-tr-sm" 
                        : "bg-gray-100 text-foreground rounded-tl-sm"
                      }
                    `}>
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* AI typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm">
                    <div className="flex items-center gap-2">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 rounded-full bg-orange-400"
                      />
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-orange-400"
                      />
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 rounded-full bg-orange-400"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input bar */}
              <div className="px-4 py-3 border-t border-border/50">
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2">
                  <input
                    type="text"
                    placeholder="Ask anything about your content..."
                    className="flex-1 bg-transparent text-sm outline-none"
                    disabled
                  />
                  <button className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating suggestions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 top-1/3 space-y-2"
            >
              {["Summarize", "Key quotes", "Action items"].map((suggestion, i) => (
                <motion.div
                  key={suggestion}
                  whileHover={{ scale: 1.05, x: -5 }}
                  className="px-3 py-1.5 bg-white rounded-lg shadow-md border border-border/50 text-xs font-medium text-muted-foreground cursor-pointer hover:text-orange-600 transition-colors"
                >
                  {suggestion}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6"
            >
              <span className="text-lg">✨</span>
              Agentic Chat
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Chat With Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Content
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Ask questions, extract insights, and generate new content — all through a simple chat interface. 
              Our agents understand context and deliver exactly what you need.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
              {[
                "Ask questions about any part of your content",
                "Extract key quotes and highlights instantly",
                "Generate social posts, summaries, and more",
                "Get action items and takeaways in seconds",
                "Works across all your uploaded content",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 shadow-orange-500/25 hover:shadow-orange-500/30">
                Start Chatting
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Feature 3: Content Assets
function ContentAssetsFeature() {
  const contentAssets = [
    { icon: "📝", label: "Blog Posts", desc: "SEO-optimized articles" },
    { icon: "🐦", label: "Twitter Threads", desc: "Viral-ready threads" },
    { icon: "💼", label: "LinkedIn Posts", desc: "Professional content" },
    { icon: "📧", label: "Newsletters", desc: "Email-ready content" },
    { icon: "🎬", label: "Video Clips", desc: "Highlight reels" },
    { icon: "💬", label: "Quotes", desc: "Shareable graphics" },
    { icon: "📋", label: "Show Notes", desc: "Episode summaries" },
    { icon: "📱", label: "Reels & Shorts", desc: "Vertical videos" },
    { icon: "🎯", label: "Carousels", desc: "Slide content" },
    { icon: "📑", label: "Summaries", desc: "Key takeaways" },
    { icon: "✅", label: "Action Items", desc: "To-do lists" },
    { icon: "🔖", label: "Timestamps", desc: "Chapter markers" },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-orange-100 text-foreground text-sm font-medium mb-6"
          >
            <span className="text-lg">🎁</span>
            Content Assets
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            One Upload,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Endless Possibilities
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Our AI agents automatically generate a complete content library from every video. 
            Blog posts, social content, newsletters, clips — all ready to publish.
          </motion.p>
        </motion.div>

        {/* Content asset grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {contentAssets.map((asset, i) => (
            <motion.div
              key={asset.label}
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative p-5 rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                className="text-3xl mb-3 block"
              >
                {asset.icon}
              </motion.span>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {asset.label}
              </h3>
              <p className="text-sm text-muted-foreground">{asset.desc}</p>

              {/* Hover arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute top-5 right-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground mb-6">
            And we&apos;re adding new content types every month
          </p>
          <Button size="lg">
            See All Content Types
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

// Main export combining all deep features
export function DeepFeatures() {
  return (
    <>
      <TranscriptionFeature />
      <MagicChatFeature />
      <ContentAssetsFeature />
    </>
  );
}


"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button, Container } from "@/components/ui";
import { useState, useEffect, useRef } from "react";

// ============================================
// HERO VERSION SELECTOR
// ============================================

// ============================================
// VERSION 1: Classic Stagger Animation
// Clean fade-up with staggered children
// ============================================
function HeroVersion1() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const contentTypes = [
    { label: "Blog Post", icon: "📝", color: "bg-purple-100 text-purple-700" },
    { label: "Tweet Thread", icon: "🐦", color: "bg-blue-100 text-blue-700" },
    { label: "LinkedIn", icon: "💼", color: "bg-sky-100 text-sky-700" },
    { label: "Short Clips", icon: "🎬", color: "bg-orange-100 text-orange-700" },
    { label: "Newsletter", icon: "✉️", color: "bg-green-100 text-green-700" },
    { label: "Quotes", icon: "💬", color: "bg-pink-100 text-pink-700" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 115, 22, 0.08) 0%, transparent 60%)",
        }}
      />

      <Container className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary font-medium text-sm border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                AI-Powered Content Repurposing
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              One Video.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                100 Pieces
              </span>{" "}
              of Content.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
             Your autonomous AI agent consumes your video and produces long-form, short-form, and social-ready content tailored for every channel — consistently, on-brand, and fast.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg">
                Get Started for Free
                <span className="ml-2">→</span>
              </Button>
              <Button variant="secondary" size="lg">
                See How It Works
              </Button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground">
              ✓ No credit card required • Loved by 2,000+ creators
            </motion.p>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Central Icon */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-2xl shadow-primary/30 flex items-center justify-center"
            >
              <span className="text-5xl sm:text-6xl">🎬</span>
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-ping" style={{ animationDuration: "2s" }} />
            </motion.div>

            {/* Orbiting Cards */}
            {contentTypes.map((content, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={content.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
                  className="absolute"
                >
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 2 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    className="px-3 py-2 rounded-xl shadow-lg bg-white/90 backdrop-blur-sm border border-white/50 flex items-center gap-2"
                  >
                    <span className={`w-8 h-8 rounded-lg ${content.color} flex items-center justify-center text-sm`}>
                      {content.icon}
                    </span>
                    <span className="font-medium text-sm text-gray-700 hidden sm:inline">{content.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// VERSION 2: Video Demo Version
// Left content, right shows product video
// ============================================
function HeroVersion2() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
      />

      <Container className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary font-medium text-sm border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                AI-Powered Content Repurposing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              One Video.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                100 Pieces
              </span>{" "}
              of Content.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Your autonomous AI agent consumes your video and produces long-form, short-form, and social-ready content tailored for every channel — consistently, on-brand, and fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button size="lg">
                Get Started for Free →
              </Button>
              <Button variant="secondary" size="lg">
                See How It Works
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-muted-foreground"
            >
              ✓ No credit card required • Loved by 2,000+ creators
            </motion.p>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Video container with styling */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50 bg-background">
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-accent/50 -z-10" />
              
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                <source src="/upload_your_sources.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// VERSION 3: Dramatic Scale + Blur Entry
// Everything starts blurred and scales in
// ============================================
function HeroVersion3() {
  const contentTypes = [
    { label: "Blog Post", icon: "📝", color: "bg-purple-100 text-purple-700" },
    { label: "Tweet Thread", icon: "🐦", color: "bg-blue-100 text-blue-700" },
    { label: "LinkedIn", icon: "💼", color: "bg-sky-100 text-sky-700" },
    { label: "Short Clips", icon: "🎬", color: "bg-orange-100 text-orange-700" },
    { label: "Newsletter", icon: "✉️", color: "bg-green-100 text-green-700" },
    { label: "Quotes", icon: "💬", color: "bg-pink-100 text-pink-700" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.2) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(249, 115, 22, 0.1) 0%, transparent 60%)",
        }}
      />

      <Container className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text with scale effect */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary font-medium text-sm border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                AI-Powered Content Repurposing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              One Video.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                100 Pieces
              </span>{" "}
              of Content.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Your autonomous AI agent consumes your video and produces long-form, short-form, and social-ready content tailored for every channel — consistently, on-brand, and fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg">
                  Get Started for Free
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" size="lg">
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-muted-foreground"
            >
              ✓ No credit card required • Loved by 2,000+ creators
            </motion.p>
          </div>

          {/* Right: Visual with dramatic entry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Central Icon with pulse */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 25px 50px -12px rgba(139, 92, 246, 0.3)",
                  "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
                  "0 25px 50px -12px rgba(139, 92, 246, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center"
            >
              <span className="text-5xl sm:text-6xl">🎬</span>
            </motion.div>

            {/* Exploding cards effect */}
            {contentTypes.map((content, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={content.label}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, x, y, scale: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="absolute cursor-pointer"
                >
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 2.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    className="px-3 py-2 rounded-xl shadow-lg bg-white/95 backdrop-blur-sm border border-white/50 flex items-center gap-2"
                  >
                    <span className={`w-8 h-8 rounded-lg ${content.color} flex items-center justify-center text-sm`}>
                      {content.icon}
                    </span>
                    <span className="font-medium text-sm text-gray-700 hidden sm:inline">{content.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// VERSION 4: Chat Interface Simulation
// Interactive Chat UI on the Right
// ============================================
function HeroVersion4() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 2000); // Transitions every 2s

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <Container className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm shadow-sm text-primary font-medium text-sm border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                AI Agent Active
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Agentic AI.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Endless Possibilities.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Upload a file and let our autonomous agents analyze, summarize, and repurpose your content directly in a chat interface. It&apos;s like having a full creative team in your pocket.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="shadow-lg shadow-primary/20">
                Start Chatting Free →
              </Button>
              <Button variant="secondary" size="lg" className="bg-white hover:bg-white/80 border border-border">
                View Demo
              </Button>
            </motion.div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i*100} bg-gradient-to-br from-gray-100 to-gray-300`} />
                  ))}
               </div>
               <p>Trusted by 10,000+ creators</p>
            </div>
          </motion.div>

          {/* Right: Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden min-h-[500px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border/50 bg-gray-50/50 backdrop-blur-sm flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold">
                       EA
                    </div>
                    <div>
                       <h3 className="font-semibold text-sm">Exemplary Agent</h3>
                       <p className="text-xs text-green-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> Online
                       </p>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                 </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-6 space-y-6 overflow-hidden bg-gray-50/30">
                <AnimatePresence>
                  {step >= 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-end"
                    >
                      <div className="bg-primary text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-md max-w-[80%]">
                        <p className="text-sm">Hi! Can you analyze this podcast episode for me?</p>
                      </div>
                    </motion.div>
                  )}

                  {step >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-end"
                    >
                      <div className="bg-primary/10 border border-primary/20 text-foreground px-4 py-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%] flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          🎧
                        </div>
                        <div className="text-left">
                           <p className="text-xs font-semibold">podcast_ep_01.mp3</p>
                           <p className="text-[10px] text-muted-foreground">15.4 MB • Uploaded</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white border border-border px-4 py-3 rounded-2xl rounded-tl-none shadow-md max-w-[80%]">
                        <div className="flex space-x-2 items-center h-6">
                           <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-primary rounded-full" />
                           <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 bg-primary rounded-full" />
                           <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 bg-primary rounded-full" />
                           <span className="text-xs text-muted-foreground ml-2">Analyzing audio content...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-start w-full"
                    >
                      <div className="bg-white border border-border p-4 rounded-2xl rounded-tl-none shadow-md w-full max-w-[90%] space-y-3">
                        <p className="text-sm font-medium mb-2">I found 3 viral clips in your audio!</p>
                        
                        <div className="grid gap-3">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-primary/20">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-lg">🔥</div>
                            <div>
                              <p className="text-xs font-bold text-gray-800">The Future of AI</p>
                              <p className="text-[10px] text-gray-500">00:45 - 01:20 • High Engagement</p>
                            </div>
                            <Button size="icon" variant="ghost" className="ml-auto h-8 w-8">↓</Button>
                          </div>

                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-primary/20">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-lg">💡</div>
                            <div>
                              <p className="text-xs font-bold text-gray-800">Key Insight on Growth</p>
                              <p className="text-[10px] text-gray-500">12:30 - 13:15 • Actionable Tip</p>
                            </div>
                            <Button size="icon" variant="ghost" className="ml-auto h-8 w-8">↓</Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-border/50">
                 <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
                       <span className="text-xs text-gray-500">+</span>
                    </div>
                    <div className="flex-1 text-sm text-gray-400">Ask about your content...</div>
                    <div className="text-primary cursor-pointer">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:block"
            >
               <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                     <p className="text-xs font-bold">Efficiency Boost</p>
                     <p className="text-xs text-green-600 font-medium">+300% Reach</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// VERSION 5: Agentic Constellation
// Futuristic, networked, autonomous feel
// ============================================
function HeroVersion5() {
  const agents = [
    { id: 1, label: "Transcriber", icon: "🎙️", delay: 0 },
    { id: 2, label: "Summarizer", icon: "📝", delay: 0.5 },
    { id: 3, label: "Clip Maker", icon: "🎬", delay: 1.0 },
    { id: 4, label: "Social Poster", icon: "🐦", delay: 1.5 },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 bg-gradient-to-br from-slate-50 to-white">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" 
         style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <Container className="py-12 lg:py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Agentic Workflow Active
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-slate-900"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Deploy Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 animate-gradient-x">
              Autonomous Creative Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Stop managing prompts. Start managing outcomes. Our specialized AI agents collaborate to turn your raw video into a complete content strategy.
          </motion.p>

          {/* Interactive Agent Visualization */}
          <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center mb-12">
            {/* Core Node */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative z-20 w-24 h-24 rounded-3xl bg-slate-900 shadow-2xl flex items-center justify-center text-4xl"
            >
              <div className="absolute inset-0 rounded-3xl bg-violet-500/20 animate-pulse" />
              📁
            </motion.div>

            {/* Orbiting Agents */}
            {agents.map((agent, i) => {
              const initialRotation = i * (360 / agents.length);
              
              return (
                <motion.div
                  key={agent.id}
                  className="absolute z-10"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear",
                  }}
                  style={{
                    width: 0,
                    height: 0,
                    rotate: initialRotation 
                  }}
                >
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 rounded-2xl bg-white shadow-xl border border-slate-200 flex flex-col items-center justify-center gap-1"
                    style={{ 
                      x: 140, 
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ 
                      duration: 40, 
                      repeat: Infinity, 
                      ease: "linear",
                    }}
                  >
                    <span className="text-xl">{agent.icon}</span>
                    <span className="text-[10px] font-bold text-slate-600">{agent.label}</span>
                    
                    {/* Beam to center */}
                    <div className="absolute top-1/2 right-full w-[140px] h-[1px] bg-gradient-to-r from-transparent to-violet-200 origin-right -z-10 opacity-0 lg:opacity-100" />
                  </motion.div>
                </motion.div>
              )
            })}
             
             {/* Floating output cards emanating from center */}
             {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute z-0 w-12 h-16 bg-white rounded-lg shadow-sm border border-slate-100"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0.2, 1, 0.8],
                    x: [0, (Math.random() - 0.5) * 400],
                    y: [0, (Math.random() - 0.5) * 300]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeOut"
                  }}
                />
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10">
              Deploy Agents
            </Button>
            <Button variant="secondary" size="lg" className="bg-white border-slate-200 hover:bg-slate-50">
              View Architecture
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// VERSION 6: The Neural Network
// Abstract, connected node graph pulsing
// ============================================
function HeroVersion6() {
  const nodes = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 bg-slate-950 text-white">
      {/* Dark background for contrast */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />
      </div>

      <Container className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Neural Processing Active
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Intelligence that <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                Scales Infinite.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-slate-400 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Harness the power of a dedicated neural network designed solely for content repurposing. It learns your style and multiplies your output.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-200">
                Start Neural Engine
              </Button>
            </motion.div>
          </div>

          {/* Right: Neural Graph Visualization */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Central Hub */}
            <motion.div
              className="relative w-20 h-20 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center z-20 backdrop-blur-md"
              animate={{ 
                boxShadow: ["0 0 20px rgba(139, 92, 246, 0.2)", "0 0 50px rgba(139, 92, 246, 0.5)", "0 0 20px rgba(139, 92, 246, 0.2)"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-8 h-8 bg-white rounded-full" />
            </motion.div>

            {/* Satellite Nodes */}
            {nodes.map((_, i) => {
              const angle = (i / nodes.length) * Math.PI * 2;
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Connection Line */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="rgba(139, 92, 246, 0.2)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                    {/* Pulse Packet */}
                    <motion.circle
                      r="3"
                      fill="#a78bfa"
                      animate={{
                        cx: ["50%", `calc(50% + ${x}px)`],
                        cy: ["50%", `calc(50% + ${y}px)`],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear"
                      }}
                    />
                  </svg>

                  {/* Node */}
                  <motion.div
                    className="absolute w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center z-10"
                    style={{ x, y }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  >
                    <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-cyan-400" : "bg-fuchsia-400"} animate-pulse`} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// VERSION 7: The Content Stream
// Vertical parallax infinite scroll
// ============================================
function HeroVersion7() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 bg-slate-50">
      <Container className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Sticky Content */}
          <div className="z-10">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Your Endless <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Content Stream
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Turn one video into a never-ending waterfall of high-performing assets. It's not just repurposing; it's abundance.
            </motion.p>
            
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 shadow-xl">
                Start the Stream
              </Button>
            </div>
          </div>

          {/* Right: Infinite Scroll Columns */}
          <div className="relative h-[600px] overflow-hidden -my-20 mask-gradient-y">
            {/* Overlay Gradient for fade effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 z-20 pointer-events-none" />
            
            <div className="grid grid-cols-2 gap-6 rotate-[-5deg] scale-110 opacity-90">
              {/* Column 1 - Down */}
              <div className="flex flex-col gap-6 animate-scroll-y-fast">
                {[1, 2, 3, 4, 5, 1, 2, 3].map((i) => (
                  <div key={`c1-${i}`} className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">🐦</div>
                      <div className="h-2 w-20 bg-slate-100 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded-full" />
                      <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 - Up (slower) */}
              <div className="flex flex-col gap-6 animate-scroll-y-reverse">
                {[1, 2, 3, 4, 5, 1, 2, 3].map((i) => (
                  <div key={`c2-${i}`} className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">📸</div>
                      <div className="h-2 w-20 bg-slate-100 rounded-full" />
                    </div>
                    <div className="aspect-video w-full bg-slate-100 rounded-lg mb-2" />
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx global>{`
        .mask-gradient-y {
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }
        @keyframes scroll-y {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-y-reverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-y-fast {
          animation: scroll-y 20s linear infinite;
        }
        .animate-scroll-y-reverse {
          animation: scroll-y-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

// ============================================
// VERSION 8: Lovable / Agentic Creator
// Clean, minimalist, prompt-centric
// ============================================
function HeroVersion8() {
  const [text, setText] = useState("");
  const fullText = "Turn this video into a viral LinkedIn post and a Twitter thread...";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          currentIndex = 0;
          setText("");
        }, 3000);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 bg-[#fdfdfd] overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-[120px] -z-10" />

       <Container className="flex flex-col items-center text-center max-w-5xl relative z-10 px-4">
          {/* Badge */}
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-8"
          >
             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                NEW: AGENTIC WORKFLOWS
             </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-slate-900 mb-6"
            style={{ letterSpacing: "-0.04em", lineHeight: 0.95 }}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            Build something <br />
            <span className="text-slate-400">Exemplary.</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-slate-500 mb-12 max-w-xl mx-auto font-medium"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
          >
            Create clips, blogs, and social posts just by describing them.
          </motion.p>

          {/* Input Box - Lovable Style */}
          <motion.div
            className="w-full max-w-2xl mx-auto"
             initial={{ opacity: 0, scale: 0.95, y: 10 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.5 }}
          >
             <div className="relative group rounded-2xl bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-200/60 transition-all hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] ring-4 ring-transparent hover:ring-slate-50">
                <div className="p-4 min-h-[140px] flex flex-col">
                   <div className="flex-1 text-lg text-slate-800 font-medium placeholder:text-slate-300 bg-transparent outline-none resize-none font-sans leading-relaxed">
                      {text}
                      <span className="inline-block w-[2px] h-5 bg-blue-500 ml-0.5 align-middle animate-pulse" />
                   </div>
                   
                   <div className="mt-4 flex justify-between items-center pt-2 border-t border-slate-50">
                      <div className="flex gap-1">
                         <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50 group/icon">
                            <span className="sr-only">Attach</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/icon:stroke-blue-500"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                         </button>
                      </div>
                      <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-95 flex items-center gap-2">
                         Generate
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      </button>
                   </div>
                </div>
             </div>
             
             {/* Suggestions / Chips */}
             <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { icon: "🎥", label: "Viral Clips" }, 
                  { icon: "📝", label: "Blog Post" }, 
                  { icon: "💼", label: "LinkedIn" }, 
                  { icon: "⚡", label: "Summary" }
                ].map((item, i) => (
                   <motion.button
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      whileHover={{ y: -2 }}
                      className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all flex items-center gap-2"
                   >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                   </motion.button>
                ))}
             </div>
          </motion.div>
       </Container>
    </section>
  );
}

// ============================================
// HERO EXPORT - Uses version prop to switch
// ============================================
export function Hero({ version = 4 }: { version?: number }) {
  switch (version) {
    case 1:
      return <HeroVersion1 />;
    case 2:
      return <HeroVersion2 />;
    case 3:
      return <HeroVersion3 />;
    case 4:
      return <HeroVersion4 />;
    case 5:
      return <HeroVersion5 />;
    case 6:
      return <HeroVersion6 />;
    case 7:
      return <HeroVersion7 />;
    case 8:
      return <HeroVersion8 />;
    default:
      return <HeroVersion8 />;
  }
}

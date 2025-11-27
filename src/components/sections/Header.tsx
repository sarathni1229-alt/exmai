"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button, Container } from "@/components/ui";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Agents", href: "#agents" },
  { label: "Pricing", href: "#pricing" },
];

interface HeaderProps {
  currentVersion?: number;
  onVersionChange?: (version: number) => void;
}

export function Header({ currentVersion, onVersionChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-xl">
                <Image
                  src="/exemplaryai_logo.webp"
                  alt="Exemplary AI"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className="text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_100%] group-hover:animate-shimmer"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                Exemplary AI
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Version Switcher (Only visible if props are provided) */}
            {onVersionChange && currentVersion && (
              <div className="hidden xl:flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border/50 mx-4">
                <span className="text-[10px] uppercase font-bold text-muted-foreground px-2">Ver:</span>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
                  <button
                    key={v}
                    onClick={() => onVersionChange(v)}
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs font-medium transition-all ${
                      currentVersion === v
                        ? "bg-white text-primary shadow-sm ring-1 ring-border"
                        : "text-muted-foreground hover:bg-white/50 hover:text-foreground"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            )}

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                href="/login"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </motion.a>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm">
                  Get Started
                  <span className="ml-1.5">→</span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-foreground rounded-full origin-left transition-colors"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="w-full h-0.5 bg-foreground rounded-full transition-colors"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-foreground rounded-full origin-left transition-colors"
                />
              </div>
            </motion.button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-xl">
              <Container>
                <div className="py-6 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  
                  {/* Mobile Version Switcher */}
                  {onVersionChange && currentVersion && (
                     <div className="px-4 py-3 border-t border-b border-border/50 my-2">
                        <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Switch Hero Version</p>
                        <div className="flex gap-2 flex-wrap">
                           {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
                           <button
                              key={v}
                              onClick={() => {
                                 onVersionChange(v);
                                 // Optional: Don't close menu to allow quick switching
                              }}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                                 currentVersion === v
                                 ? "bg-primary text-white shadow-md"
                                 : "bg-muted text-muted-foreground hover:bg-muted/80"
                              }`}
                           >
                              {v}
                           </button>
                           ))}
                        </div>
                     </div>
                  )}

                  <div className="pt-4 mt-4 space-y-3">
                    <a
                      href="/login"
                      className="flex items-center justify-center px-4 py-3 rounded-xl text-muted-foreground font-medium hover:bg-muted transition-colors"
                    >
                      Sign In
                    </a>
                    <Button className="w-full" size="lg">
                      Get Started
                      <span className="ml-1.5">→</span>
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

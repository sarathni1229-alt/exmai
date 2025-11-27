"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

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

const audiences = [
  {
    icon: "🎙️",
    title: "Podcasters",
    pain: "I spend 4 hours editing each episode, then another 4 turning it into clips and posts.",
    benefit: "Automated show notes, audiograms, quotes, and social posts from every episode.",
    gradient: "from-violet-500/10 to-purple-500/10",
    borderColor: "border-violet-200",
    iconBg: "bg-violet-100",
  },
  {
    icon: "📈",
    title: "Marketers",
    pain: "Our webinars get great attendance, but the content dies right after the live event.",
    benefit: "Turn one webinar into weeks of blog posts, email sequences, and social content.",
    gradient: "from-orange-500/10 to-amber-500/10",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    icon: "🎥",
    title: "Content Creators",
    pain: "I know I should be on every platform, but who has time to create for each one?",
    benefit: "One video becomes native content optimized for YouTube, TikTok, LinkedIn, and more.",
    gradient: "from-sky-500/10 to-blue-500/10",
    borderColor: "border-sky-200",
    iconBg: "bg-sky-100",
  },
];

export function BuiltFor() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 60%)",
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          {/* Section Tag */}
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 rounded-full bg-muted text-primary text-sm font-medium mb-4"
          >
            Agentic Power for Every Creator
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            You Create.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agents Multiply.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Stop spending hours repurposing. Our Agentic AI handles the tedious work so you can focus on 
            what you do best — creating.
          </motion.p>
        </motion.div>

        {/* Audience Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {audiences.map((audience) => (
            <motion.div
              key={audience.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`
                relative p-6 lg:p-8 rounded-2xl border ${audience.borderColor}
                bg-gradient-to-br ${audience.gradient}
                backdrop-blur-sm
                transition-shadow duration-300
                hover:shadow-xl hover:shadow-primary/5
              `}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className={`
                  w-14 h-14 rounded-xl ${audience.iconBg}
                  flex items-center justify-center text-2xl mb-5
                `}
              >
                {audience.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                {audience.title}
              </h3>

              {/* Pain Point */}
              <p className="text-muted-foreground text-sm mb-4 italic">
                &ldquo;{audience.pain}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />

              {/* Benefit */}
              <p className="text-foreground font-medium text-sm leading-relaxed">
                {audience.benefit}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom social proof hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Join{" "}
            <span className="font-semibold text-foreground">2,000+ creators</span>{" "}
            already saving 10+ hours every week
          </p>
          
          {/* Avatar stack placeholder */}
          <div className="flex items-center justify-center mt-4 -space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-medium text-primary"
                style={{
                  background: `linear-gradient(135deg, hsl(${260 + i * 20}, 70%, 95%) 0%, hsl(${30 + i * 10}, 90%, 95%) 100%)`,
                }}
              >
                {["JD", "MK", "AS", "TR", "LP"][i]}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="w-10 h-10 rounded-full border-2 border-white bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground"
            >
              +2k
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


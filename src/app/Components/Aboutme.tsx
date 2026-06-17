"use client";

import { Avatar } from "@/components/ui/avatar";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Code, Zap, Palette, Users, TrendingUp, Heart } from "lucide-react";

export default function AboutMeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const skills = [
    { icon: Code, title: "Full-Stack Development", description: "React, Next.js, Node.js, TypeScript" },
    { icon: Zap, title: "AI Integration", description: "OpenAI, Gemini, Custom LLMs, ML Models" },
    { icon: Palette, title: "UI/UX Design", description: "Modern interfaces, responsive design, animations" },
    { icon: Users, title: "Team Collaboration", description: "Git, Agile, Code reviews, Mentoring" },
    { icon: TrendingUp, title: "Performance", description: "Optimization, SEO, Analytics, Monitoring" },
    { icon: Heart, title: "Passion", description: "Clean code, best practices, continuous learning" },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold gradient-text mb-6"
            style={{ y, opacity }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a passionate full-stack developer who transforms ideas into powerful digital experiences. 
            With expertise in modern web technologies and AI integration, I create solutions that not only 
            meet technical requirements but exceed user expectations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Personal Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-3xl animated-gradient opacity-20 blur-xl scale-110"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative">
                <Avatar className="w-80 h-80 mx-auto shadow-2xl border-4 border-primary/20 glass">
                  <Image 
                    src="/img1.jpg" 
                    alt="About Sabter" 
                    width={320} 
                    height={320}
                    className="object-cover rounded-3xl"
                  />
                </Avatar>
                
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium glass"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Full-Stack
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium glass"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  AI Builder
                </motion.div>
              </div>
            </div>

            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-foreground">Sabter Iqbal</h3>
              <p className="text-muted-foreground">Full-Stack Developer — AI Apps & E-commerce</p>
              <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                <span>📍 Remote</span>
                <span>💼 Available for hire</span>
                <span>🚀 3+ years experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="group p-6 rounded-2xl glass hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover-lift animated-gradient text-white"
            >
              Let's Work Together
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const socialLinks = [
    { icon: Github, href: site.github, label: "GitHub" },
    { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 animated-gradient opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Text Content */}
          <motion.div 
            className="flex-1 flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.div
                className="text-reveal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1
                  aria-label={site.name}
                  className="text-5xl lg:text-7xl font-bold text-foreground"
                >
                  <span aria-hidden="true">
                    {site.name.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                </h1>
              </motion.div>

              <motion.h2 
                className="text-2xl lg:text-4xl font-semibold gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Full-Stack Developer — AI Apps & E-commerce
              </motion.h2>

              <motion.p 
                className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                I build AI-powered applications and e-commerce platforms with Next.js —
                including live stores and AI tools serving real customers in Pakistan and the Gulf.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="group hover-lift animated-gradient text-white border-0"
                asChild
              >
                <a href="/Sabter_Iqbal_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift group"
                asChild
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Let's Connect
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full glass hover-lift group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full animated-gradient opacity-20 blur-xl scale-110" />
                <Avatar className="w-48 h-48 lg:w-64 lg:h-64 shadow-2xl border-4 border-primary/20 glass relative z-10">
                  <Image 
                    src="/img2.jpg" 
                    alt="Sabter Iqbal" 
                    width={256} 
                    height={256} 
                    className="object-cover rounded-full"
                  />
                </Avatar>
                
                {/* Floating elements around avatar */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

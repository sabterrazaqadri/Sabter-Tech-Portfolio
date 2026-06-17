"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const skills = [
  {
    name: "Next.js",
    icon: "/skills/nextjs.svg",
    category: "Full-Stack",
    description: "App Router, server components, and full-stack apps — used in every project below"
  },
  {
    name: "React",
    icon: "/skills/react.svg",
    category: "Frontend",
    description: "Hooks, context, and performance-focused component architecture"
  },
  {
    name: "TypeScript",
    icon: "/skills/typescript.svg",
    category: "Language",
    description: "Type-safe development across all my production projects"
  },
  {
    name: "OpenAI SDK",
    icon: "/skills/openai.svg",
    category: "AI/ML",
    description: "Powers Digital Mufti and MakeAPP-AI — chat, RAG, and agent workflows"
  },
  {
    name: "Gemini API",
    icon: "/skills/gemini.svg",
    category: "AI/ML",
    description: "Multi-model AI integration alongside OpenAI in production apps"
  },
  {
    name: "Python",
    icon: "/skills/python.svg",
    category: "Backend",
    description: "Backend services and AI tooling with FastAPI and Chainlit"
  },
  {
    name: "Node.js",
    icon: "/skills/nodejs.svg",
    category: "Backend",
    description: "Server-side JavaScript behind my e-commerce checkout flows"
  },
  {
    name: "Tailwind",
    icon: "/skills/tailwind.svg",
    category: "Styling",
    description: "Every UI on this site and my projects is built with Tailwind"
  },
  {
    name: "Sanity",
    icon: "/skills/sanity.svg",
    category: "CMS",
    description: "Headless CMS powering Apni Dukan and the Naat Collection admin panel"
  },
  {
    name: "Vercel",
    icon: "/skills/vercel.svg",
    category: "Deployment",
    description: "Deployment and hosting for all my live projects"
  },
];

const categories = ["All", ...new Set(skills.map((s) => s.category))];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-secondary/5" />
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
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
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every skill here is proven by a shipped project — hover any card to see
            where I've used it in production.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <TooltipProvider>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="group p-6 hover-lift cursor-pointer glass border-0 hover:border-primary/20 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex flex-col items-center text-center space-y-4">
                          {/* Skill Icon */}
                          <motion.div
                            className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={60}
                              height={60}
                              className="transition-transform duration-300 group-hover:scale-110"
                            />
                          </motion.div>

                          {/* Skill Info */}
                          <div className="space-y-2">
                            <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                              {skill.category}
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center p-6 rounded-2xl glass">
            <h3 className="text-3xl font-bold gradient-text mb-2">8</h3>
            <p className="text-muted-foreground">Deployed Projects</p>
          </div>
          <div className="text-center p-6 rounded-2xl glass">
            <h3 className="text-3xl font-bold gradient-text mb-2">3</h3>
            <p className="text-muted-foreground">Live E-commerce Stores</p>
          </div>
          <div className="text-center p-6 rounded-2xl glass">
            <h3 className="text-3xl font-bold gradient-text mb-2">3+</h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

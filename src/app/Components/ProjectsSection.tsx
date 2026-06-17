"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

const projects = [
  {
    title: "Golden Orchard — Perfume E-commerce Store",
    description:
      "Live e-commerce store for luxury perfumes on its own domain, with real-time inventory, WhatsApp ordering, and a full checkout flow. Built and maintained for a real client.",
    tech: ["Next.js", "Node.js", "WhatsApp API", "Tailwind"],
    github: "https://github.com/sabterrazaqadri/Golden-Orchard-Perfumes",
    demo: "https://www.goldenorchard.co/",
    category: "E-commerce",
    highlight: "Live store with real customers",
  },
  {
    title: "MakeAPP-AI — AI Website Generator",
    description:
      "AI-powered website generator that turns a user prompt into a working custom site, built on Claude Code and the OpenAI API with MongoDB persistence.",
    tech: ["Claude Code", "OpenAI API", "MongoDB", "Next.js"],
    github: "https://github.com/sabterrazaqadri/MakeAPP-AI",
    demo: "https://makeappai.vercel.app/",
    category: "AI/ML",
    highlight: "End-to-end AI product",
  },
  {
    title: "Physical AI Textbook with RAG Chatbot",
    description:
      "A digital textbook on Physical AI and humanoids built with Docusaurus, featuring an embedded RAG chatbot that answers questions grounded in the book's content.",
    tech: ["Docusaurus", "RAG", "ChatKit", "AI"],
    github:
      "https://github.com/sabterrazaqadri/GIAIC-Q4-Hackathons/tree/main/Step-1-physical-ai-humanoid-textbook/docusaurus",
    demo: "https://physical-ai-humanoid-textbook-mu.vercel.app/",
    category: "AI/ML",
    highlight: "Retrieval-augmented generation",
  },
  {
    title: "Apni Dukan",
    description:
      "E-commerce platform for general, herbal, and cosmetic products across Pakistan, with content fully managed through Sanity CMS.",
    tech: ["Next.js", "Sanity", "TypeScript", "Tailwind"],
    github: "https://github.com/sabterrazaqadri/ApniDukan.com",
    demo: "https://apni-dukan-com.vercel.app/",
    category: "E-commerce",
    highlight: "Headless CMS architecture",
  },
  {
    title: "Digital Mufti",
    description:
      "AI app for Islamic question answering using the OpenAI SDK and Gemini API, also available as an Android app.",
    tech: ["OpenAI SDK", "Gemini API", "Chainlit"],
    github: "https://github.com/sabterrazaqadri/Digital-Mufti",
    demo: "https://digitalmufti.vercel.app/",
    category: "AI/ML",
    highlight: "Multi-model AI integration",
  },
  {
    title: "Naat Collection with Admin Panel",
    description:
      "Islamic Naat lyrics portal with a full admin panel powered by Sanity CMS — all content is dynamic and editor-controlled.",
    tech: ["Next.js", "Sanity", "Tailwind", "Node.js"],
    github: "https://github.com/sabterrazaqadri/Naat-Collection-2.0",
    demo: "https://naat-collection-2-0.vercel.app/",
    category: "Content",
    highlight: "Custom admin workflow",
  },
  {
    title: "UAE Gaming PC Store",
    description:
      "E-commerce site for gaming PCs in the UAE with real-time inventory, product filtering, and secure checkout backed by NeonDB.",
    tech: ["Next.js", "Node.js", "NeonDB", "Tailwind"],
    github: "https://github.com/sabterrazaqadri/Gaming-PC-Store",
    demo: "https://gaming-pc-store.vercel.app/",
    category: "E-commerce",
    highlight: "Postgres-backed inventory",
  },
  {
    title: "Zakat Calculator",
    description:
      "Zakat calculator that pulls live gold rates from an external API to compute accurate obligations.",
    tech: ["Gold Rate API", "Next.js", "Tailwind"],
    github: "https://github.com/sabterrazaqadri/zakat-calculator",
    demo: "https://zakat-calculator-nine.vercel.app/",
    category: "Utility",
    highlight: "Live external API data",
  },
  {
    title: "Fragrances by Haram — Perfume Store",
    description:
      "A modern, fully responsive e-commerce storefront for a perfume brand, featuring an elegant product catalogue, detailed fragrance pages, and a smooth browsing-to-order experience. Built and delivered for a real client.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/sabterrazaqadri/Fragrance-By-Haram",
    demo: "https://fragrances-by-haram.vercel.app/",
    category: "E-commerce",
    highlight: "Client perfume brand store",
  },
  {
    title: "Dr Fumigation — Pest Control Services",
    description:
      "A professional business website for a pest control and fumigation company, with service listings, clear calls-to-action, and an inquiry flow designed to convert visitors into booked appointments.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/sabterrazaqadri/dr-Fumigation",
    demo: "https://dr-fumigation.vercel.app/",
    category: "Business",
    highlight: "Service-based lead generation",
  },
  {
    title: "Nabiha Fatima Baking Studio",
    description:
      "A warm, brand-focused website for a home baking studio, showcasing cakes and bakes through a curated gallery and menu with an easy ordering inquiry — crafted to reflect the studio's personality.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/sabterrazaqadri/Nabiha-Fatima-Baking-Studio",
    demo: "https://nabiha-fatima-baking-studio.vercel.app/",
    category: "Business",
    highlight: "Branded studio showcase",
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every project below is deployed and live — from e-commerce stores serving
            real customers to AI products built end to end.
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

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
            >
              <Card className="group h-full glass border-0 hover:border-primary/20 transition-all duration-500 hover-lift overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium glass whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-primary mb-4">
                    {project.highlight}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn hover-lift"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 group/btn animated-gradient text-white border-0"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`${site.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover-lift animated-gradient text-white"
            >
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

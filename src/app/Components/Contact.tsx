"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, MessageCircle, Phone, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { site } from "@/lib/site";

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: site.email,
      href: `mailto:${site.email}`,
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: MessageCircle,
      title: "LinkedIn",
      description: "Connect professionally",
      href: site.linkedin,
      color: "from-blue-600 to-blue-700",
      delay: 0.2
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my projects",
      href: site.github,
      color: "from-gray-700 to-gray-900",
      delay: 0.3
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Quick chat available",
      href: site.whatsapp,
      color: "from-green-500 to-green-600",
      delay: 0.4
    }
  ];

  const stats = [
    { number: "50+", label: "Deployed Projects" },
    { number: "10+", label: "Live E-commerce Stores" },
    { number: "3+", label: "Years Experience" },
    { number: "<24h", label: "Response Time" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-secondary/5" />
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1.5, 1, 1.5], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
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
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to bring your ideas to life? Whether you have a project in mind or just want to connect, 
            I'm here to help you achieve your goals with cutting-edge technology and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl glass hover-lift"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              onHoverStart={() => setHoveredCard(method.title)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${method.color})` }}
              />
              <motion.a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 rounded-2xl glass border-0 hover:border-primary/20 transition-all duration-500 hover-lift h-full group"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${method.color} text-white`}
                    animate={{ 
                      scale: hoveredCard === method.title ? 1.1 : 1,
                      rotate: hoveredCard === method.title ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <method.icon className="h-8 w-8" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>

                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: hoveredCard === method.title ? 5 : 0 }}
                  >
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground">
              Let's discuss your ideas and turn them into reality. I'm excited to work with you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group animated-gradient text-white border-0 hover-lift"
                asChild
              >
                <Link href="/contact">
                  <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Start a Project
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group hover-lift"
                asChild
              >
                <a href="/Sabter_Iqbal_Resume.pdf" download>
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

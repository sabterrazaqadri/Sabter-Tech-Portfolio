"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ArrowUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: site.github, label: "GitHub" },
    { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/95 border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold gradient-text mb-4">SabterTech</h3>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Transforming ideas into powerful digital experiences. Specializing in modern web development, 
                AI integration, and innovative solutions that drive business growth.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-full glass hover-lift group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Mail className="h-4 w-4" />
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {site.email}
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Available for hire</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Made By Sabter Iqbal</span>
            {/* <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500" />
            </motion.div> */}
            {/* <span>and Next.js</span> */}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="hover-lift"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 
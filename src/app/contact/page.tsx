"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Form submission failed with status ${res.status}`);
      }

      reset();
      setStatus("sent");
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 323 2714932",
      href: `tel:${site.phone}`,
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      href: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1.4, 1, 1.4], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold gradient-text mb-6"
            style={{ y, opacity }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to start your next project? Let's discuss your ideas and turn them into reality. 
            I'm here to help you achieve your goals with cutting-edge technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass p-8 rounded-3xl border-0">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input 
                      placeholder="Your Name" 
                      {...register("name")}
                      className={`transition-all duration-300 ${
                        isFocused === "name" ? "border-primary ring-2 ring-primary/20" : ""
                      }`}
                      onFocus={() => setIsFocused("name")}
                      onBlur={() => setIsFocused(null)}
                    />
                    {errors.name && (
                      <motion.p 
                        className="text-red-500 text-sm flex items-center gap-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Input 
                      placeholder="Your Email" 
                      type="email" 
                      {...register("email")}
                      className={`transition-all duration-300 ${
                        isFocused === "email" ? "border-primary ring-2 ring-primary/20" : ""
                      }`}
                      onFocus={() => setIsFocused("email")}
                      onBlur={() => setIsFocused(null)}
                    />
                    {errors.email && (
                      <motion.p 
                        className="text-red-500 text-sm flex items-center gap-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="h-4 w-4" />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Input 
                    placeholder="Subject" 
                    {...register("subject")}
                    className={`transition-all duration-300 ${
                      isFocused === "subject" ? "border-primary ring-2 ring-primary/20" : ""
                    }`}
                    onFocus={() => setIsFocused("subject")}
                    onBlur={() => setIsFocused(null)}
                  />
                  {errors.subject && (
                    <motion.p 
                      className="text-red-500 text-sm flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.subject.message}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6} 
                    {...register("message")}
                    className={`transition-all duration-300 resize-none ${
                      isFocused === "message" ? "border-primary ring-2 ring-primary/20" : ""
                    }`}
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused(null)}
                  />
                  {errors.message && (
                    <motion.p 
                      className="text-red-500 text-sm flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group animated-gradient text-white border-0 hover-lift"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                      </motion.div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>

                {status === "sent" && (
                  <motion.div
                    className="flex items-center gap-2 text-green-600 p-4 rounded-lg bg-green-50 dark:bg-green-900/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="flex items-center gap-2 text-red-600 p-4 rounded-lg bg-red-50 dark:bg-red-900/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <AlertCircle className="h-5 w-5" />
                    <span>
                      Something went wrong sending your message. Please email me
                      directly at {site.email}.
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ready to collaborate? Here are the best ways to reach me. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="group block p-6 rounded-2xl glass border-0 hover:border-primary/20 transition-all duration-500 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="h-6 w-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="p-6 rounded-2xl glass border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="font-semibold text-foreground mb-4">What to expect</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Quick response within 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free consultation and project discussion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Detailed project proposal and timeline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Zap, Coins } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const benefits = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere. We provide a generous stipend to set up your ideal home office.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Top-tier health, dental, and vision coverage for you and your dependents.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Annual budget for conferences, courses, and books to fuel your growth.",
  },
  {
    icon: Coins,
    title: "Equity & Ownership",
    description: "We want you to own a piece of what you build. Competitive equity packages.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Why Work With Us" 
          subtitle="We take care of our people so they can focus on doing their best work."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

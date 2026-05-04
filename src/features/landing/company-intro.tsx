"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

const stats = [
  { label: "Team Members", value: "150+" },
  { label: "Global Offices", value: "4" },
  { label: "Projects Shipped", value: "2M+" },
  { label: "Funding Raised", value: "$40M" },
];

export function CompanyIntro() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Mission-Driven Innovation" 
              subtitle="We're not just building products; we're redefining how people interact with technology."
            />
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Websfry Solutions, we believe that the best products are built by diverse teams 
              who are empowered to take risks. Our culture is rooted in <strong className="text-foreground">transparency</strong>, 
              <strong className="text-foreground"> autonomy</strong>, and a relentless pursuit of <strong className="text-foreground">excellence</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're an engineer scaling infrastructure, a designer crafting intuitive interfaces, 
              or a marketer reaching millions, your work here will have a tangible impact from day one.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-border/50 text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

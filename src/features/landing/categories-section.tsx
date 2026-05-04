"use client";

import { motion } from "framer-motion";
import { useCategories } from "@/hooks/use-jobs";
import { Code, PenTool, Megaphone, Target, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Skeleton } from "@/components/ui/skeleton";

const categoryIcons: Record<string, React.ElementType> = {
  Engineering: Code,
  Design: PenTool,
  Marketing: Megaphone,
  Product: Target,
  Operations: Briefcase,
};

export function CategoriesSection() {
  const { data: categories, isLoading } = useCategories();

  // Filter out 'All' for this section
  const displayCategories = categories?.filter((c) => c !== "All") || [];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Explore by Department" 
          centered
        />

        {isLoading ? (
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-16 w-40 rounded-full" />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
            {displayCategories.map((category, index) => {
              const Icon = categoryIcons[category] || Briefcase;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-full bg-background border border-border/50 hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium text-foreground">{category}</span>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

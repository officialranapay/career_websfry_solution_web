"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useFeaturedJobs } from "@/hooks/use-jobs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export function JobsPreview() {
  const { data: jobs, isLoading } = useFeaturedJobs();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading 
            title="Featured Roles" 
            subtitle="Discover opportunities where you can make an immediate impact."
            className="mb-0"
          />
          <Link href={ROUTES.JOBS} className={buttonVariants({ variant: "ghost", className: "hidden md:flex mt-4 group" })}>
            View All Roles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs?.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
  href={`${ROUTES.JOBS}/${job.title
    .toLowerCase()
    .replace(/\s+/g, "-")}-${job.id}`}
  className="block h-full group"
>
                  <div className="h-full p-6 rounded-2xl bg-card border border-border/50 group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:group-hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {job.department}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-medium">
                        {new Date(job.postedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold font-heading mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                      <span className="font-medium">{job.salary}</span>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
          <Link href={ROUTES.JOBS} className={buttonVariants({ variant: "outline", size: "lg", className: "w-full rounded-full group" })}>
            View All Roles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

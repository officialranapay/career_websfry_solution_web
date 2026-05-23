"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useJob } from "@/hooks/use-jobs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/lib/constants";
import { MapPin, Briefcase, Clock, ChevronLeft, Calendar, Share2, CheckCircle2 } from "lucide-react";

export function JobDetail({ id }: { id: string }) {
  const { data: job, isLoading, isError } = useJob(id);

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-24 bg-muted rounded"></div>
        <div className="space-y-4">
          <div className="h-12 w-3/4 bg-muted rounded"></div>
          <div className="flex gap-4">
            <div className="h-6 w-20 bg-muted rounded"></div>
            <div className="h-6 w-20 bg-muted rounded"></div>
            <div className="h-6 w-20 bg-muted rounded"></div>
          </div>
        </div>
        <div className="space-y-4 mt-12">
          <div className="h-8 w-40 bg-muted rounded"></div>
          <div className="h-32 w-full bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (isError || !job) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <p className="text-muted-foreground mb-8">The role you're looking for doesn't exist or has been closed.</p>
        <Link href={ROUTES.JOBS} className={buttonVariants({ variant: "default" })}>View All Open Roles</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb & Header Actions */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <Link 
          href={ROUTES.JOBS}
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to roles
        </Link>
        {/* <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
          <Share2 className="h-4 w-4" />
        </Button> */}

        <Button
  variant="ghost"
  size="icon"
  className="rounded-full text-muted-foreground hover:text-foreground"
  onClick={async () => {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  }}
>
  <Share2 className="h-4 w-4" />
</Button>
      </motion.div>

      {/* Job Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 pb-12 border-b border-border"
      >
        <Badge variant="secondary" className="bg-primary/10 text-primary mb-6 hover:bg-primary/20 text-sm py-1 px-3">
          {job.department}
        </Badge>
        
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">
          {job.title}
        </h1>

        <div className="flex flex-wrap gap-y-4 gap-x-8 text-muted-foreground font-medium mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </motion.div>

      {/* Job Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-12 text-lg text-muted-foreground leading-relaxed"
      >
        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">About the Role</h2>
          {/* <p>{job.description}</p> */}
          <p>     <div
  className="
    text-muted-foreground
    text-sm
    mb-6
    flex-grow

    [&_ul]:list-disc
    [&_ul]:pl-5

    [&_ol]:list-decimal
    [&_ol]:pl-5

    [&_strong]:font-semibold
    [&_em]:italic

    [&_div]:mb-1
    [&_p]:mb-1
  "
  dangerouslySetInnerHTML={{
    __html: job.description,
  }}
/></p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">What We're Looking For</h2>
          <ul className="space-y-3">
            {job.requirements.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm py-1.5 px-3 bg-muted/30">
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 pt-12 border-t border-border flex flex-col items-center text-center pb-12"
      >
        <h3 className="text-3xl font-heading font-bold mb-4">Ready to make an impact?</h3>
        <p className="text-muted-foreground mb-8 max-w-lg">
          We're excited to learn more about you. Submit your application below and we'll be in touch soon.
        </p>
        <Link href={`${ROUTES.JOBS}/${job.id}/apply`} className={buttonVariants({ size: "lg", className: "rounded-full px-12 h-14 text-lg" })}>Apply for this role</Link>
      </motion.div>
    </div>
  );
}

import Link from "next/link";
import { Job } from "@/types";
import { ROUTES } from "@/lib/constants";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link href={`${ROUTES.JOBS}/${job.id}`} className="block group h-full">
      <div className="h-full p-6 rounded-2xl bg-card border border-border/50 group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:group-hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-all flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {job.department}
          </Badge>
          <span className="text-xs text-muted-foreground font-medium">
            {new Date(job.postedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        <h3 className="text-xl font-semibold font-heading mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {job.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
          {job.description}
        </p>
        
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
          <div className="flex gap-2 flex-wrap max-w-[70%]">
            {job.skills.slice(0, 2).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs font-normal bg-muted/50">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 2 && (
              <Badge variant="outline" className="text-xs font-normal bg-muted/50">
                +{job.skills.length - 2}
              </Badge>
            )}
          </div>
          <div className="w-8 h-8 rounded-full bg-muted flex flex-shrink-0 items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

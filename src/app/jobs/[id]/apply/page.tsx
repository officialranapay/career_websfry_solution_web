import { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/shared/page-transition";
import { ApplyForm } from "@/features/application/apply-form";
import { ChevronLeft } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { jobsService } from "@/services/jobs";

export const metadata: Metadata = {
  title: "Apply for Role | Websfry Solutions",
  description: "Submit your application to join Websfry Solutions.",
};

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  


  // console.log("this is job page")
  // In a real app we'd fetch this Server-Side, but for this mock we'll use our service directly
  // Actually, because it's a mock that returns a Promise, we can just await it
  const job = await jobsService.getJobById(resolvedParams.id).catch(() => null);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <p className="text-muted-foreground mb-8">The role you're trying to apply for does not exist.</p>
        <Link href={ROUTES.JOBS} className="text-primary hover:underline">
          Return to open roles
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-12">
        <Link 
          href={`${ROUTES.JOBS}/${job.id}`}
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to job details
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-3">
            Apply for <span className="text-primary">{job.title}</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            {job.department} • {job.location} • {job.type}
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm">
          <ApplyForm jobId={job.id} jobTitle={job.title} />
        </div>
      </div>
    </PageTransition>
  );
}

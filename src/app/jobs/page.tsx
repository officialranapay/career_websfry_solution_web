import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { JobList } from "@/features/jobs/job-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Roles | Websfry Solutions",
  description: "Explore all open career opportunities at Websfry Solutions.",
};

export default function JobsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
            Find Your Next <span className="text-gradient">Adventure</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our open roles and find where you can make your mark. We're always looking for passionate people to join our team.
          </p>
        </div>

        <JobList />
      </div>
    </PageTransition>
  );
}

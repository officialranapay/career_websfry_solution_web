import { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { AppliedJobsList } from "@/features/application/applied-jobs-list";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Applied Jobs | Websfry Solutions",
  description: "Track the status of your applications.",
};

export default function AppliedJobsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Your Applications" 
            subtitle="Track the status of roles you've applied for."
            className="mb-10"
          />
          
          <AppliedJobsList />
        </div>
      </div>
    </PageTransition>
  );
}

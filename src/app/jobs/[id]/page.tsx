import { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { JobDetail } from "@/features/jobs/job-detail";

export const metadata: Metadata = {
  title: "Job Details | Websfry Solutions",
  description: "View job description, requirements, and benefits.",
};

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  const id = resolvedParams.id.split("-").pop() || "";

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <JobDetail id={id} />
      </div>
    </PageTransition>
  );
}

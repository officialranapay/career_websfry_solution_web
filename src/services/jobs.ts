import { apiClient } from "./api-client";
import { Job, JobCategory, PaginatedResponse } from "@/types";

// Helper to map backend job model to frontend job interface
function mapBackendJobToFrontend(backendJob: any): Job {
  // Try to guess department from title if possible, otherwise default to Engineering
  let department = JobCategory.Engineering;
  const titleLower = (backendJob.title || "").toLowerCase();
  if (titleLower.includes("design") || titleLower.includes("ui") || titleLower.includes("ux")) department = JobCategory.Design;
  else if (titleLower.includes("market") || titleLower.includes("seo")) department = JobCategory.Marketing;
  else if (titleLower.includes("product") || titleLower.includes("manager")) department = JobCategory.Product;
  else if (titleLower.includes("operat") || titleLower.includes("hr")) department = JobCategory.Operations;

const type: "Day" | "Night" | "Flexible" =
  backendJob.jobShift === "Day" ||
  backendJob.jobShift === "Night" ||
  backendJob.jobShift === "Flexible"
    ? backendJob.jobShift
    : "Flexible";

  return {
    id: backendJob._id,
    title: backendJob.title,
    department,
    location: backendJob.location,
    type,
    experience: backendJob.experienceMin || "Not specified",
    salary: backendJob.salary || "Not specified",
    skills: backendJob.skillsRequired || [],
    description: backendJob.description,
    responsibilities: [], // Missing in backend schema
    requirements: backendJob.requirements ? [backendJob.requirements] : [],
    perks: [], // Missing in backend schema
    postedAt: backendJob.createdAt || new Date().toISOString(),
    featured: false, // Missing in backend schema
  };
}

export const jobsService = {
  async getJobs(page = 1, pageSize = 6, category?: string): Promise<PaginatedResponse<Job>> {
    // Backend doesn't support pagination/filtering natively, so we fetch all and paginate/filter on frontend
    const allBackendJobs = await apiClient.get<any[]>('/jobs/allJobsUser');
    console.log(allBackendJobs, "all jobs")
    let allJobs = allBackendJobs.map(mapBackendJobToFrontend);

    if (category && category !== "All") {
      allJobs = allJobs.filter((job) => job.department === category);
    }

    const total = allJobs.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const paginatedJobs = allJobs.slice(start, start + pageSize);

    return {
      data: paginatedJobs,
      total,
      page,
      pageSize,
      totalPages,
    };
  },

  async getJobById(id: string): Promise<Job | undefined> {
    try {
      // Temporarily fetching all jobs to find by ID since backend might not have GET /:id yet
      // If we implement GET /:id on backend, we can just do: apiClient.get<any>(`/jobs/${id}`)
    const allBackendJobs = await apiClient.get<any[]>('/jobs');
      const backendJob = allBackendJobs.find(j => j._id === id);
      if (!backendJob) throw new Error("Job not found");
      return mapBackendJobToFrontend(backendJob);
    } catch (err) {
      throw err;
    }
  },

  async getFeaturedJobs(): Promise<Job[]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allBackendJobs = await apiClient.get<any[]>('/jobs');
    const allJobs = allBackendJobs.map(mapBackendJobToFrontend);
    // Return first 6 jobs as featured since backend doesn't have featured flag
    return allJobs.slice(0, 6);
  },

  async getCategories(): Promise<string[]> {
    return ["All", ...Object.values(JobCategory)];
  },
};

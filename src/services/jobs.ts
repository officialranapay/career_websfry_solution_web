import { apiClient } from "./api-client";
import { MOCK_JOBS } from "@/lib/mock-data";
import { Job, JobCategory, PaginatedResponse } from "@/types";

export const jobsService = {
  async getJobs(page = 1, pageSize = 6, category?: string): Promise<PaginatedResponse<Job>> {
    let filteredJobs = [...MOCK_JOBS];
    
    if (category && category !== "All") {
      filteredJobs = filteredJobs.filter((job) => job.department === category);
    }

    const total = filteredJobs.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const paginatedJobs = filteredJobs.slice(start, start + pageSize);

    return apiClient.get({
      data: paginatedJobs,
      total,
      page,
      pageSize,
      totalPages,
    });
  },

  async getJobById(id: string): Promise<Job | undefined> {
    const job = MOCK_JOBS.find((j) => j.id === id);
    if (!job) {
      throw new Error("Job not found");
    }
    return apiClient.get(job);
  },

  async getFeaturedJobs(): Promise<Job[]> {
    const featured = MOCK_JOBS.filter((j) => j.featured).slice(0, 6);
    return apiClient.get(featured);
  },

  async getCategories(): Promise<string[]> {
    const categories = ["All", ...Object.values(JobCategory)];
    return apiClient.get(categories);
  },
};

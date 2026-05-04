import { useQuery } from "@tanstack/react-query";
import { jobsService } from "@/services/jobs";

export const useJobs = (page: number, category?: string) => {
  return useQuery({
    queryKey: ["jobs", page, category],
    queryFn: () => jobsService.getJobs(page, 6, category),
  });
};

export const useJob = (id: string) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: () => jobsService.getJobById(id),
    enabled: !!id,
  });
};

export const useFeaturedJobs = () => {
  return useQuery({
    queryKey: ["jobs", "featured"],
    queryFn: () => jobsService.getFeaturedJobs(),
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => jobsService.getCategories(),
  });
};

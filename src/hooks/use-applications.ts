import { useQuery, useMutation } from "@tanstack/react-query";
import { applicationsService } from "@/services/applications";
import { ApplicationFormData } from "@/schemas/application";

export const useApplications = () => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: () => applicationsService.getApplications(),
  });
};

export const useSubmitApplication = () => {
  return useMutation({
    mutationFn: ({ jobId, jobTitle, data }: { jobId: string; jobTitle: string; data: ApplicationFormData }) =>
      applicationsService.submitApplication(jobId, jobTitle, data),
  });
};
import { useQuery, useMutation } from "@tanstack/react-query";
import { applicationsService } from "@/services/applications";
import { ApplicationFormData } from "@/schemas/application";


// currect code till applied job 130526
// export const useApplications = () => {
//   return useQuery({
//     queryKey: ["applications"],
//     queryFn: () => applicationsService.getApplications(),
//   });
// };

// eska updated code 130526
export const useApplications = () => {

  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("userId")
      : null;

  return useQuery({
    queryKey: ["applications", userId],

    queryFn: () =>
      applicationsService.getApplications(),

    enabled: !!userId,
  });
};

export const useSubmitApplication = () => {
  return useMutation({
    mutationFn: ({ jobId, jobTitle, data }: { jobId: string; jobTitle: string; data: ApplicationFormData }) =>
      applicationsService.submitApplication(jobId, jobTitle, data),
  });
};
import { apiClient } from "./api-client";
import { MOCK_APPLICATIONS } from "@/lib/mock-data";
import { Application } from "@/types";
import { ApplicationFormData } from "@/schemas/application";

export const applicationsService = {
  async getApplications(): Promise<Application[]> {
    // In a real app, this would fetch by the logged-in user's ID
    return apiClient.get(MOCK_APPLICATIONS);
  },

  async submitApplication(jobId: string, jobTitle: string, data: ApplicationFormData): Promise<{ candidateId: string; applicationId: string }> {
    // Simulate creating a new application
    const newApplication = {
      candidateId: `cand-${Math.floor(Math.random() * 100000)}`,
      applicationId: `app-${Math.floor(Math.random() * 100000)}`,
      // ... we don't need to persist to mock data since we only simulate it for now
    };
    
    return apiClient.post(newApplication);
  },
};

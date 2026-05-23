// changes for applied form

import { apiClient } from "./api-client";

import { Application } from "@/types";

import { ApplicationFormData } from "@/schemas/application";

export const applicationsService = {

  // GET APPLIED JOBS

  async getApplications(): Promise<Application[]> {

  const response = await apiClient.get<any>(
    "/applications/my-applications"
  );

  // HANDLE DIFFERENT RESPONSE SHAPES

  const applications =
    Array.isArray(response)
      ? response
      : response.applications || response.data || [];

  return applications.map((app: any) => ({
    id: app._id || "",

    candidateId: app.user || "",

    jobId: app.job?._id || "",

    title: app.job?.title || "Untitled Job",

    name: app.fullName || "",

    email: app.email || "",

    status:
  app.status === "seen"
    ? "seen"

    : app.status === "rejected"
    ? "rejected"

    : "pending",

    createdAt:
      app.createdAt || new Date().toISOString(),
  }));
},

  // APPLY JOB

  async submitApplication(
    jobId: string,
    jobTitle: string,
    data: ApplicationFormData
  ): Promise<{
    candidateId: string;
    applicationId: string;
  }> {

    const payload = {
      jobId,
      jobTitle,
      ...data,
    };

    return apiClient.post<{
      candidateId: string;
      applicationId: string;
    }>(
      "/applications/apply",
      payload
    );
  },
};
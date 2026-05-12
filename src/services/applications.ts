import { apiClient } from "./api-client";
import { Application } from "@/types";
import { ApplicationFormData } from "@/schemas/application";

export const applicationsService = {
  async getApplications(): Promise<Application[]> {
    const response = await apiClient.get<Application[]>("/applications");

    return response;
  },

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

    const response = await apiClient.post<{ candidateId: string; applicationId: string }>(
      "/applications/apply",
      payload
    );

    return response;
  },
};




// import { apiClient } from "./api-client";

// import {
//   Application,
// } from "@/types";

// import {
//   ApplicationFormData,
// } from "@/schemas/application";

// export const applicationsService = {

//   // GET APPLIED JOBS

//   async getApplications():
//     Promise<Application[]> {

//     return apiClient.get<Application[]>(
//       "/applications/my-applications"
//     );
//   },

//   //APPLY JOB

//   async submitApplication(
//     jobId: string,
//     jobTitle: string,
//     data: ApplicationFormData
//   ): Promise<{
//     candidateId: string;
//     applicationId: string;
//   }> {

//     const payload = {
//       jobId,
//       jobTitle,
//       ...data,
//     };

//     return apiClient.post<{
//       candidateId: string;
//       applicationId: string;
//     }>(
//       "/applications/apply",
//       payload
//     );
//   },
// };





// import { apiClient } from "./api-client";

// import {
//   Application,
// } from "@/types";

// import {
//   ApplicationFormData,
// } from "@/schemas/application";

// export const applicationsService = {

//   // GET APPLIED JOBS

//   async getApplications():
//     Promise<Application[]> {

//     const response = await apiClient.get<any[]>(
//       "/applications/my-applications"
//     );

//     return response.map((app) => ({
//       id: app._id,

//       candidateId: app.user,

//       jobId: app.job?._id,

//       title: app.job?.title,

//       name: app.fullName,

//       email: app.email,

//       status: app.status,

//       createdAt: app.createdAt,
//     }));
//   },

//   // APPLY JOB

//   async submitApplication(
//     jobId: string,
//     jobTitle: string,
//     data: ApplicationFormData
//   ): Promise<{
//     candidateId: string;
//     applicationId: string;
//   }> {

//     const payload = {
//       jobId,
//       jobTitle,
//       ...data,
//     };

//     return apiClient.post<{
//       candidateId: string;
//       applicationId: string;
//     }>(
//       "/applications/apply",
//       payload
//     );
//   },
//};
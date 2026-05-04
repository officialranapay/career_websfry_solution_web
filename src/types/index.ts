export enum JobCategory {
  Engineering = "Engineering",
  Design = "Design",
  Marketing = "Marketing",
  Product = "Product",
  Operations = "Operations",
}

export interface Job {
  id: string;
  title: string;
  department: JobCategory;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string; // e.g., "2-4 years"
  salary: string; // e.g., "$120k - $150k"
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  postedAt: string; // ISO date string
  featured?: boolean;
}

export type ApplicationStatus = "Submitted" | "Seen" | "Rejected";

export interface Application {
  id: string;
  candidateId: string;
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  status: ApplicationStatus;
  appliedAt: string; // ISO date string
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

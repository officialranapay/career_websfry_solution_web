import { z } from "zod";

export const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number (e.g., +1234567890)."),
  experience: z
    .number({ message: "Experience must be a number." })
    .min(0, "Experience cannot be negative.")
    .max(50, "Experience seems invalid."),
  skills: z
    .string()
    .min(1, "Please enter at least one skill.")
    .refine(
      (val) => val.split(",").filter((s) => s.trim().length > 0).length > 0,
      "Please enter at least one valid skill."
    ),
  resumeLink: z.string().url("Please provide a valid URL (Google Drive link)."),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

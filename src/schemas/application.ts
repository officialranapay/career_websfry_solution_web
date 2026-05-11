import { z } from "zod";

export const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number (e.g., +1234567890)."),
  totalExperience: z
    .number({ message: "Experience must be a number." })
    .min(0, "Experience cannot be negative.")
    .max(50, "Experience seems invalid."),
  dateOfBirth: z.string().min(1, "Date of Birth is required."),

gender: z.string().min(1, "Gender is required."),

currentCity: z.string().min(2, "Current city must be at least 2 characters."),

currentState: z.string().min(2, "Current state must be at least 2 characters."),

pincode: z
  .string()
  .regex(/^[0-9]{6}$/, "Pincode must be 6 digits."),

highestQualification: z
  .string()
  .min(2, "Highest qualification is required."),

passingYear: z
  .string()
  .regex(/^[0-9]{4}$/, "Passing year must be valid."),

currentCTC: z.string().min(1, "Current CTC is required."),

expectedCTC: z.string().min(1, "Expected CTC is required."),

noticePeriod: z.string().min(1, "Notice period is required."),

portfolioUrl: z
  .string()
  .url("Enter a valid portfolio URL.")
  .optional()
  .or(z.literal("")),

linkedinUrl: z
  .string()
  .url("Enter a valid LinkedIn URL.")
  .optional()
  .or(z.literal("")),

whyShouldHireYou: z
  .string()
  .min(20, "Answer must be at least 20 characters."),  
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

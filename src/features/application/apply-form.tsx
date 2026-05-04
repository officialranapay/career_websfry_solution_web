"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplicationFormData, applicationSchema } from "@/schemas/application";
import { useSubmitApplication } from "@/hooks/use-applications";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { SuccessModal } from "./success-modal";

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

export function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {
  const [successData, setSuccessData] = useState<{ candidateId: string } | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const submitMutation = useSubmitApplication();

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      const response = await submitMutation.mutateAsync({ jobId, jobTitle, data });
      setSuccessData({ candidateId: response.candidateId });
    } catch (error) {
      console.error("Submission failed", error);
      // Let the error boundary or a toast handle the error visually
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className={errors.name ? "text-destructive" : ""}>Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className={errors.phone ? "text-destructive" : ""}>Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1234567890"
              {...register("phone")}
              className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience" className={errors.experience ? "text-destructive" : ""}>Years of Experience</Label>
            <Input
              id="experience"
              type="number"
              placeholder="5"
              {...register("experience", { valueAsNumber: true })}
              className={errors.experience ? "border-destructive focus-visible:ring-destructive" : ""}
            />
            {errors.experience && <p className="text-sm text-destructive">{errors.experience.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="skills" className={errors.skills ? "text-destructive" : ""}>Skills (comma separated)</Label>
          <Textarea
            id="skills"
            placeholder="React, TypeScript, Node.js..."
            className={`min-h-[100px] ${errors.skills ? "border-destructive focus-visible:ring-destructive" : ""}`}
            {...register("skills")}
          />
          {errors.skills && <p className="text-sm text-destructive">{errors.skills.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="resumeLink" className={errors.resumeLink ? "text-destructive" : ""}>Resume Link (Google Drive)</Label>
          <Input
            id="resumeLink"
            type="url"
            placeholder="https://drive.google.com/..."
            {...register("resumeLink")}
            className={errors.resumeLink ? "border-destructive focus-visible:ring-destructive" : ""}
          />
          <p className="text-xs text-muted-foreground">Please ensure the link is set to "Anyone with the link can view".</p>
          {errors.resumeLink && <p className="text-sm text-destructive">{errors.resumeLink.message}</p>}
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full md:w-auto px-10 h-12 rounded-full text-base"
          disabled={submitMutation.isPending}
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting Application...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>

      <SuccessModal 
        isOpen={!!successData} 
        candidateId={successData?.candidateId || ""} 
      />
    </>
  );
}

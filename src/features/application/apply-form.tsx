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
import { authService } from "@/services/auth";

// imports for otp section
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { X } from "lucide-react";

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

export function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {

// states for otp request and verification
const [showOtpModal, setShowOtpModal] = useState(false);
const [otp, setOtp] = useState("");
const [formData, setFormData] = useState<ApplicationFormData | null>(null);
const [isVerifying, setIsVerifying] = useState(false);
// updated state
const [errorMessage, setErrorMessage] =useState("");

  const [successData, setSuccessData] = useState<{
    candidateId: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const submitMutation = useSubmitApplication();



const onSubmit = async (
  data: ApplicationFormData
) => {

  try {

    setErrorMessage("");

    // const userId =
    //   localStorage.getItem("userId");

    // updated code 
    const userId =
    localStorage.getItem("userId");

    // const verifiedPhone =
    // localStorage.getItem("verifiedPhone");

    const verifiedEmail =
    localStorage.getItem("verifiedEmail");
    

    if (
      userId &&
      verifiedEmail === data.email
    )


    // USER ALREADY VERIFIED

    if (userId) {

      const response =
        await submitMutation.mutateAsync({
          jobId,
          jobTitle,
          data,
        });

      setSuccessData({
        candidateId:
          response.candidateId,
      });

      reset();

      return;
    }

    // FIRST TIME USER

    setFormData(data);

    await authService.requestOtp(
      data.email
    );

    setShowOtpModal(true);

  } catch (error) {

    if (error instanceof Error) {

      setErrorMessage(error.message);

    } else {

      setErrorMessage(
        "Something went wrong"
      );
    }
  }
};


// otp setup
const handleVerifyOtp = async () => {
  try {

    if (!formData) return;

    setIsVerifying(true);
    // updates code
     setErrorMessage("");

    const response = await authService.verifyOtp(
      formData.email,
      otp
    );

   // updated code 
     localStorage.setItem(
  "verifiedEmail",
  formData.email
);

    localStorage.setItem(
      "userId",
      response.user.id
    );


      localStorage.setItem(
      "accessToken",
      response.accessToken
    );


    // FINAL APPLICATION SUBMIT

    const applicationResponse =
      await submitMutation.mutateAsync({
        jobId,
        jobTitle,
        data: formData,
      });

    setSuccessData({
      candidateId:
        applicationResponse.candidateId,
    });

    setShowOtpModal(false);

    reset();

  } catch (error) {

  //   console.error("OTP verification failed", error);

  // } finally {

  //   setIsVerifying(false);
  // }
   if (error instanceof Error) {

      setErrorMessage(error.message);

    } else {

      setErrorMessage(
        "OTP verification failed"
      );
    }

  } finally {

    setIsVerifying(false);
  }
};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* updated code */}
    {
  errorMessage && (
    <div className="bg-red-100 text-red-600 border border-red-300 rounded-lg p-3 text-sm">
      {errorMessage}
    </div>
  )
}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* FULL NAME */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 9876543210"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-2">
            <Label htmlFor="totalExperience">Years of Experience</Label>
            <Input
              id="totalExperience"
              type="number"
              placeholder="2"
              {...register("totalExperience", {
                valueAsNumber: true,
              })}
            />
            {errors.totalExperience && (
              <p className="text-sm text-destructive">
                {errors.totalExperience.message}
              </p>
            )}
          </div>

          {/* DATE OF BIRTH */}
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date Of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-destructive">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          {/* GENDER */}
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Input
              id="gender"
              type="text"
              placeholder="Male"
              {...register("gender")}
            />
            {errors.gender && (
              <p className="text-sm text-destructive">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* CURRENT CITY */}
          <div className="space-y-2">
            <Label htmlFor="currentCity">Current City</Label>
            <Input
              id="currentCity"
              type="text"
              placeholder="Lucknow"
              {...register("currentCity")}
            />
            {errors.currentCity && (
              <p className="text-sm text-destructive">
                {errors.currentCity.message}
              </p>
            )}
          </div>

          {/* CURRENT STATE */}
          <div className="space-y-2">
            <Label htmlFor="currentState">Current State</Label>
            <Input
              id="currentState"
              type="text"
              placeholder="Uttar Pradesh"
              {...register("currentState")}
            />
            {errors.currentState && (
              <p className="text-sm text-destructive">
                {errors.currentState.message}
              </p>
            )}
          </div>

          {/* PINCODE */}
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              id="pincode"
              type="text"
              placeholder="226028"
              {...register("pincode")}
            />
            {errors.pincode && (
              <p className="text-sm text-destructive">
                {errors.pincode.message}
              </p>
            )}
          </div>

          {/* QUALIFICATION */}
          <div className="space-y-2">
            <Label htmlFor="highestQualification">
              Highest Qualification
            </Label>
            <Input
              id="highestQualification"
              type="text"
              placeholder="B.Tech"
              {...register("highestQualification")}
            />
            {errors.highestQualification && (
              <p className="text-sm text-destructive">
                {errors.highestQualification.message}
              </p>
            )}
          </div>

          {/* PASSING YEAR */}
          <div className="space-y-2">
            <Label htmlFor="passingYear">Passing Year</Label>
            <Input
              id="passingYear"
              type="text"
              placeholder="2024"
              {...register("passingYear")}
            />
            {errors.passingYear && (
              <p className="text-sm text-destructive">
                {errors.passingYear.message}
              </p>
            )}
          </div>

          {/* CURRENT CTC */}
          <div className="space-y-2">
            <Label htmlFor="currentCTC">Current CTC</Label>
            <Input
              id="currentCTC"
              type="text"
              placeholder="4 LPA"
              {...register("currentCTC")}
            />
            {errors.currentCTC && (
              <p className="text-sm text-destructive">
                {errors.currentCTC.message}
              </p>
            )}
          </div>

          {/* EXPECTED CTC */}
          <div className="space-y-2">
            <Label htmlFor="expectedCTC">Expected CTC</Label>
            <Input
              id="expectedCTC"
              type="text"
              placeholder="6 LPA"
              {...register("expectedCTC")}
            />
            {errors.expectedCTC && (
              <p className="text-sm text-destructive">
                {errors.expectedCTC.message}
              </p>
            )}
          </div>

          {/* NOTICE PERIOD */}
          <div className="space-y-2">
            <Label htmlFor="noticePeriod">Notice Period</Label>
            <Input
              id="noticePeriod"
              type="text"
              placeholder="15 Days"
              {...register("noticePeriod")}
            />
            {errors.noticePeriod && (
              <p className="text-sm text-destructive">
                {errors.noticePeriod.message}
              </p>
            )}
          </div>

          {/* PORTFOLIO URL */}
          <div className="space-y-2">
            <Label htmlFor="portfolioUrl">Portfolio URL</Label>
            <Input
              id="portfolioUrl"
              type="url"
              placeholder="https://portfolio.com"
              {...register("portfolioUrl")}
            />
            {errors.portfolioUrl && (
              <p className="text-sm text-destructive">
                {errors.portfolioUrl.message}
              </p>
            )}
          </div>

          {/* LINKEDIN URL */}
          <div className="space-y-2">
            <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
            <Input
              id="linkedinUrl"
              type="url"
              placeholder="https://linkedin.com/in/username"
              {...register("linkedinUrl")}
            />
            {errors.linkedinUrl && (
              <p className="text-sm text-destructive">
                {errors.linkedinUrl.message}
              </p>
            )}
          </div>
        </div>

        {/* WHY SHOULD HIRE YOU */}
        <div className="space-y-2">
          <Label htmlFor="whyShouldHireYou">
            Why Should We Hire You?
          </Label>

          <Textarea
            id="whyShouldHireYou"
            placeholder="Write your answer..."
            className="min-h-[120px]"
            {...register("whyShouldHireYou")}
          />

          {errors.whyShouldHireYou && (
            <p className="text-sm text-destructive">
              {errors.whyShouldHireYou.message}
            </p>
          )}
        </div>

        {/* SKILLS */}
        <div className="space-y-2">
          <Label htmlFor="skills">
            Skills (comma separated)
          </Label>

          <Textarea
            id="skills"
            placeholder="React, Node.js, MongoDB"
            className="min-h-[100px]"
            {...register("skills")}
          />

          {errors.skills && (
            <p className="text-sm text-destructive">
              {errors.skills.message}
            </p>
          )}
        </div>

        {/* RESUME LINK */}
        <div className="space-y-2">
          <Label htmlFor="resumeLink">
            Resume Link (Share Public Google Drive)
          </Label>

          <Input
            id="resumeLink"
            type="url"
            placeholder="https://drive.google.com/..."
            {...register("resumeLink")}
          />

          {errors.resumeLink && (
            <p className="text-sm text-destructive">
              {errors.resumeLink.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-auto px-10 h-12 rounded-full text-base"
          disabled={submitMutation.isPending}
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>

       {/* otp secton  */}
     <Dialog
  open={showOtpModal}
  onOpenChange={setShowOtpModal}
>
  <DialogContent className="sm:max-w-md">

    <button
      onClick={() => setShowOtpModal(false)}
      className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
    >
      <X className="h-5 w-5" />
    </button>

    <DialogHeader>
      <DialogTitle>
        Verify OTP
      </DialogTitle>
    </DialogHeader>

    <div className="space-y-4">

      <p className="text-sm text-muted-foreground">
        Enter OTP sent to your Email 
      </p>

      <Input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <Button
        className="w-full"
        onClick={handleVerifyOtp}
        disabled={isVerifying}
      >
        {
          isVerifying
            ? "Verifying..."
            : "Verify OTP"
        }
      </Button>

    </div>

  </DialogContent>
</Dialog>

      <SuccessModal
        isOpen={!!successData}
        candidateId={successData?.candidateId || ""}
      />
    </>
  );
}
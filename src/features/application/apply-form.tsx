// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ApplicationFormData, applicationSchema } from "@/schemas/application";
// import { useSubmitApplication } from "@/hooks/use-applications";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Loader2 } from "lucide-react";
// import { SuccessModal } from "./success-modal";

// interface ApplyFormProps {
//   jobId: string;
//   jobTitle: string;
// }

// export function ApplyForm({ jobId, jobTitle }: ApplyFormProps) {
//   const [successData, setSuccessData] = useState<{ candidateId: string } | null>(null);
  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ApplicationFormData>({
//     resolver: zodResolver(applicationSchema),
//   });

//   const submitMutation = useSubmitApplication();

//   const onSubmit = async (data: ApplicationFormData) => {
//     try {
//       const response = await submitMutation.mutateAsync({ jobId, jobTitle, data });
//       setSuccessData({ candidateId: response.candidateId });
//     } catch (error) {
//       console.error("Submission failed", error);
//       // Let the error boundary or a toast handle the error visually
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="name" className={errors.name ? "text-destructive" : ""}>Full Name</Label>
//             <Input
//               id="name"
//               placeholder="John Doe"
//               {...register("name")}
//               className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>Email Address</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="john@example.com"
//               {...register("email")}
//               className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="phone" className={errors.phone ? "text-destructive" : ""}>Phone Number</Label>
//             <Input
//               id="phone"
//               type="tel"
//               placeholder="+1234567890"
//               {...register("phone")}
//               className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="experience" className={errors.experience ? "text-destructive" : ""}>Years of Experience</Label>
//             <Input
//               id="experience"
//               type="number"
//               placeholder="5"
//               {...register("experience", { valueAsNumber: true })}
//               className={errors.experience ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.experience && <p className="text-sm text-destructive">{errors.experience.message}</p>}
//           </div>

          
//           <div className="space-y-2">
//             <Label htmlFor="experience" className={errors.dateOfBirth ? "text-destructive" : ""}>Date Of Birth</Label>
//             <Input
//               id="dateOfBirth"
//               type="date"
//               placeholder="22/05/2003"
//               {...register("dateOfBirth")}
//               className={errors.dateOfBirth ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.dateOfBirth && <p className="text-sm text-destructive">{errors.dateOfBirth.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="gender" className={errors.gender ? "text-destructive" : ""}>Gender</Label>
//             <Input
//               id="gender"
//               type="text"
//               placeholder="Male"
//               {...register("gender")}
//               className={errors.gender ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.gender && <p className="text-sm text-destructive">{errors.gender.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="currentCity" className={errors.currentCity ? "text-destructive" : ""}>Current City</Label>
//             <Input
//               id="currentCity"
//               type="text"
//               placeholder="lucknow"
//               {...register("currentCity")}
//               className={errors.currentCity ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.currentCity && <p className="text-sm text-destructive">{errors.currentCity.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="currentState" className={errors.currentState ? "text-destructive" : ""}>Current State</Label>
//             <Input
//               id="currentState"
//               type="text"
//               placeholder="Uttar Pradesh"
//               {...register("currentState")}
//               className={errors.currentState ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.currentState && <p className="text-sm text-destructive">{errors.currentState.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="pincode" className={errors.pincode ? "text-destructive" : ""}>Pincode</Label>
//             <Input
//               id="pincode"
//               type="number"
//               placeholder="226028"
//               {...register("pincode", { valueAsNumber: true })}
//               className={errors.pincode ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.pincode && <p className="text-sm text-destructive">{errors.pincode.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="highestQualification" className={errors.highestQualification ? "text-destructive" : ""}>Highest Qualification</Label>
//             <Input
//               id="highestQualification"
//               type="text"
//               placeholder="Graduation"
//               {...register("highestQualification")}
//               className={errors.highestQualification ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.highestQualification && <p className="text-sm text-destructive">{errors.highestQualification.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="passingYear" className={errors.passingYear ? "text-destructive" : ""}>Years of Experience</Label>
//             <Input
//               id="passingYear"
//               type="number"
//               placeholder="2018"
//               {...register("passingYear", { valueAsNumber: true })}
//               className={errors.passingYear ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.passingYear && <p className="text-sm text-destructive">{errors.passingYear.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="currentCTC" className={errors.currentCTC ? "text-destructive" : ""}>Current CTC</Label>
//             <Input
//               id="currentCTC"
//               type="text"
//               placeholder="10 lpa"
//               {...register("currentCTC")}
//               className={errors.currentCTC ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.currentCTC && <p className="text-sm text-destructive">{errors.currentCTC.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="expectedCTC" className={errors.expectedCTC ? "text-destructive" : ""}>Expected CTC</Label>
//             <Input
//               id="expectedCTC"
//               type="text"
//               placeholder="4 lpa"
//               {...register("expectedCTC")}
//               className={errors.expectedCTC ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.expectedCTC && <p className="text-sm text-destructive">{errors.expectedCTC.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="noticePeriod" className={errors.noticePeriod ? "text-destructive" : ""}>Notice Period</Label>
//             <Input
//               id="noticePeriod"
//               type="number"
//               placeholder="15"
//               {...register("noticePeriod")}
//               className={errors.noticePeriod ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.noticePeriod && <p className="text-sm text-destructive">{errors.noticePeriod.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="portfolioUrl" className={errors.portfolioUrl ? "text-destructive" : ""}>Portfolio Url</Label>
//             <Input
//               id="portfolioUrl"
//               type="url"
//               placeholder="https://example.com"
//               {...register("portfolioUrl")}
//               className={errors.portfolioUrl ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.portfolioUrl && <p className="text-sm text-destructive">{errors.portfolioUrl.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="linkedinUrl" className={errors.linkedinUrl ? "text-destructive" : ""}>Linkedin Url</Label>
//             <Input
//               id="linkedinUrl"
//               type="url"
//               placeholder="https://linkedin.com/in/username"
//               {...register("linkedinUrl")}
//               className={errors.linkedinUrl ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.linkedinUrl && <p className="text-sm text-destructive">{errors.linkedinUrl.message}</p>}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="whyShouldHireYou" className={errors.whyShouldHireYou ? "text-destructive" : ""}>Why Should Hire You</Label>
//             <Input
//               id="whyShouldHireYou"
//               type="text"
//               placeholder="text here..."
//               {...register("whyShouldHireYou")}
//               className={errors.whyShouldHireYou ? "border-destructive focus-visible:ring-destructive" : ""}
//             />
//             {errors.whyShouldHireYou && <p className="text-sm text-destructive">{errors.whyShouldHireYou.message}</p>}
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="skills" className={errors.skills ? "text-destructive" : ""}>Skills (comma separated)</Label>
//           <Textarea
//             id="skills"
//             placeholder="React, TypeScript, Node.js..."
//             className={`min-h-[100px] ${errors.skills ? "border-destructive focus-visible:ring-destructive" : ""}`}
//             {...register("skills")}
//           />
//           {errors.skills && <p className="text-sm text-destructive">{errors.skills.message}</p>}
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="resumeLink" className={errors.resumeLink ? "text-destructive" : ""}>Resume Link (Google Drive)</Label>
//           <Input
//             id="resumeLink"
//             type="url"
//             placeholder="https://drive.google.com/..."
//             {...register("resumeLink")}
//             className={errors.resumeLink ? "border-destructive focus-visible:ring-destructive" : ""}
//           />
//           <p className="text-xs text-muted-foreground">Please ensure the link is set to "Anyone with the link can view".</p>
//           {errors.resumeLink && <p className="text-sm text-destructive">{errors.resumeLink.message}</p>}
//         </div>

//         <Button 
//           type="submit" 
//           size="lg" 
//           className="w-full md:w-auto px-10 h-12 rounded-full text-base"
//           disabled={submitMutation.isPending}
//         >
//           {submitMutation.isPending ? (
//             <>
//               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//               Submitting Application...
//             </>
//           ) : (
//             "Submit Application"
//           )}
//         </Button>
//       </form>

//       <SuccessModal 
//         isOpen={!!successData} 
//         candidateId={successData?.candidateId || ""} 
//       />
//     </>
//   );
// }



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

  // const onSubmit = async (data: ApplicationFormData) => {
  //   try {
  //     const formattedData = {
  //       ...data,

  //       skills:
  //         typeof data.skills === "string"
  //           ? data.skills
  //               .split(",")
  //               .map((skill) => skill.trim())
  //               .filter(Boolean)
  //           : data.skills,
  //     };
  //     const response = await submitMutation.mutateAsync({
  //       jobId,
  //       jobTitle,
  //       data
  //     });

  //     setSuccessData({
  //       candidateId: response.candidateId,
  //     });

  //     reset();
  //   } catch (error) {
  //     console.error("Application submit failed:", error);
  //   }
  // };


  const onSubmit = async (data: ApplicationFormData) => {
  try {

    setFormData(data);

    await authService.requestOtp(data.phone);

    setShowOtpModal(true);

  } catch (error) {
    console.error("OTP request failed", error);
  }
};


// otp setup
const handleVerifyOtp = async () => {
  try {

    if (!formData) return;

    setIsVerifying(true);

    const response = await authService.verifyOtp(
      formData.phone,
      otp
    );

    /*
      Example backend response:
      {
        success: true,
        userId: "abc123",
        token: "xyz"
      }
    */

    localStorage.setItem(
      "userId",
      response.userId
    );

    localStorage.setItem(
      "token",
      response.token
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

    console.error("OTP verification failed", error);

  } finally {

    setIsVerifying(false);
  }
};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            Resume Link (Google Drive)
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

      // otp secton 
      {
    showOtpModal && (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-full max-w-md space-y-4">

        <h2 className="text-xl font-semibold">
          Verify OTP
        </h2>

        <p className="text-sm text-gray-500">
          Enter OTP sent to your mobile number
        </p>

        <Input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <Button
          onClick={handleVerifyOtp}
          disabled={isVerifying}
          className="w-full"
        >
          {
            isVerifying
              ? "Verifying..."
              : "Verify OTP"
          }
        </Button>

      </div>
    </div>
  )
}

      <SuccessModal
        isOpen={!!successData}
        candidateId={successData?.candidateId || ""}
      />
    </>
  );
}
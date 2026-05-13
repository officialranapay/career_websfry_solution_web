import { apiClient } from "./api-client";

interface VerifyOtpResponse {
  success: boolean;
  accessToken: string;

user:{
  id:string;
  email:string;

}

}

export const authService = {

  async requestOtp(email: string) {

    return apiClient.post(
      "/auth/request-otp",
      { email }
    );
  },

  async verifyOtp(
    email: string,
    otp: string
  ): Promise<VerifyOtpResponse> {

    return apiClient.post<VerifyOtpResponse>(
      "/auth/verify-otp",
      {
        email,
        otp,
      }
    );
  },
};
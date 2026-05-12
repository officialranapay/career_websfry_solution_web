import { apiClient } from "./api-client";

interface VerifyOtpResponse {
  success: boolean;
  userId: string;
}

export const authService = {

  async requestOtp(phone: string) {

    return apiClient.post(
      "/auth/request-otp",
      { phone }
    );
  },

  async verifyOtp(
    phone: string,
    otp: string
  ): Promise<VerifyOtpResponse> {

    return apiClient.post<VerifyOtpResponse>(
      "/auth/verify-otp",
      {
        phone,
        otp,
      }
    );
  },
};
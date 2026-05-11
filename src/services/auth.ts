import { apiClient } from "./api-client";

export const authService = {

  async requestOtp(phone: string) {

    return apiClient.post(
      "/auth/request-otp",
      { phone }
    );
  },

  async verifyOtp(phone: string, otp: string) {

    return apiClient.post(
      "/auth/verify-otp",
      {
        phone,
        otp,
      }
    );
  },
};
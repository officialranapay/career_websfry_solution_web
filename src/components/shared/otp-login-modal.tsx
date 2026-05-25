"use client";

import { useState } from "react";
const BASE = process.env.NEXT_PUBLIC_BASE_URL;
interface OtpLoginModalProps {
  isOpen: boolean;
  onSuccess: () => void;
}

export function OtpLoginModal({
  isOpen,
  onSuccess,
}: OtpLoginModalProps) {

  const [phone, setPhone] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [step, setStep] =
    useState<"phone" | "otp">(
      "phone"
    );

  const [loading, setLoading] =
    useState(false);

  if (!isOpen) return null;

  // SEND OTP

  const handleSendOtp =
    async () => {

      try {

        setLoading(true);

        const response =
        //  "http://localhost:5000/api/auth/request-otp",
          await fetch(
            `${BASE}/auth/request-otp`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                phone,
              }),
            }
          );

        if (!response.ok) {

          throw new Error(
            "Failed to send OTP"
          );
        }

        setStep("otp");

      } catch (error) {

        console.error(error);

        alert("Failed to send OTP");

      } finally {

        setLoading(false);
      }
    };

  // VERIFY OTP

  const handleVerifyOtp =
    async () => {

      try {

        setLoading(true);
//   'http://localhost:5000/api/auth/verify-otp/,
        const response =
          await fetch(
            `${BASE}/auth/verify-otp/`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                phone,
                otp,
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {

          throw new Error(
            data.message ||
            "OTP verification failed"
          );
        }

        // SAVE USER ID

        localStorage.setItem(
          "userId",
          data.userId
        );

        onSuccess();

      } catch (error) {

        console.error(error);

        alert("Invalid OTP");

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative">

        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Verify Your Mobile
        </h2>

        {step === "phone" ? (

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none"
            />

            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-black text-white rounded-lg py-3 hover:bg-gray-800 transition"
            >
              {loading
                ? "Sending..."
                : "Send OTP"}
            </button>

          </div>

        ) : (

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black outline-none"
            />

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full bg-black text-white rounded-lg py-3 hover:bg-gray-800 transition"
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
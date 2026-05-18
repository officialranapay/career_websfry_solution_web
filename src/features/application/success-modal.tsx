"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

interface SuccessModalProps {
  isOpen: boolean;
  candidateId: string;
}

export function SuccessModal({
  isOpen,
  candidateId,
}: SuccessModalProps) {

  const router = useRouter();

  const [countdown, setCountdown] =
    useState(5);

  // countdown timer

  useEffect(() => {

    if (!isOpen) return;

    setCountdown(5);

    const timer = setInterval(() => {

      setCountdown((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [isOpen]);

  // redirect after countdown

  useEffect(() => {

    if (countdown <= 0 && isOpen) {

      router.push(ROUTES.HOME);
    }

  }, [countdown, isOpen, router]);

  return (
    <AnimatePresence>

      {isOpen && (

        <>

          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6"
          >

            <div className="bg-card border border-border shadow-2xl rounded-3xl p-8 text-center flex flex-col items-center">

              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">

                <CheckCircle className="w-10 h-10 text-green-500" />

              </div>

              <h2 className="text-2xl font-heading font-bold mb-2">

                Application Submitted!

              </h2>

              <p className="text-muted-foreground mb-6">

                Thank you for applying.
                Our team will review your
                profile and get back to
                you soon.

              </p>

              <div className="w-full space-y-4">

                <Button
                  className="w-full rounded-full h-12"
                  onClick={() =>
                    router.push(ROUTES.HOME)
                  }
                >
                  Return to Home
                </Button>

                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">

                  Auto-redirecting in
                  {countdown}s

                  <ArrowRight className="h-3 w-3 animate-pulse" />

                </p>

              </div>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}
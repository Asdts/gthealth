/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { notFound } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { logout } from "@/lib/auth";
import ForgotPasswordForm from "@/components/ForgotPassword";
import VerifyEmailPage from "@/components/verify";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";




export default function AuthPage({ params }: { params: any }) {
  const { slug } = params;
  const router = useRouter();
  
  // State to hold the token and loading state
  const [tokenVerified, setTokenVerified] = useState<boolean | null>(null);

  useEffect(() => {
    // Ensure that the code is running on the client-side
    if (typeof window !== "undefined") {
      const checkToken = async () => {
        // Retrieve token from cookies (client-side only)
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        const res = await fetch("/api/auth/user/check", {
          method: "GET",
          headers: {
            Cookie: `token=${token}`,
          },
        });

        if (res.ok) {
          setTokenVerified(true);
          router.push("/dashboard");
        } else {
          setTokenVerified(false);
        }
      };

      checkToken();
    }
  }, [router]);

  // If slug is not provided, show 404
  if (!slug) return notFound();

  // If token is being checked, do not render form yet
  if (tokenVerified === null) {
    return <div>Loading...</div>;
  }

  // Render the appropriate component based on the slug value
  switch (slug) {
    case "login":
      if (tokenVerified) {
        return null; // If token is verified, redirect to dashboard
      }
      return <LoginForm />;
    case "register":
      if (tokenVerified) {
        return null; // If token is verified, redirect to dashboard
      }
      return <RegisterForm />;
    case "forget":
      return <ForgotPasswordForm />;
    case "auth":
      return <VerifyEmailPage />;
    case "logout":
      logout(); // Call the logout function
      return <div className="text-center">Logged out successfully</div>;
    default:
      return notFound(); // If the slug does not match any case, show 404
  }
}

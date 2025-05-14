import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignInPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate successful signin and navigate to dashboard
    navigate("/dashboard");
  }, []);

  return <SignIn redirectUrl="/dashboard" />;
}

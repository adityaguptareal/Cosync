import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignUpPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate successful signup and navigate to dashboard
    navigate("/dashboard");
  }, []);

  return (
    <SignUp redirectUrl="/dashboard" />
  );
}

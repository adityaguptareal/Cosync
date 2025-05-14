import { Navigate } from "react-router-dom";

export default function Welcome() {
  const fallbackUrl = "/sign-in";

  return (
    <div>
      Welcome to Cosync!
      <br />
      If you are not signed in, <a href={fallbackUrl}>click here to sign in or sign up</a>.
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const fallbackUrl = "/sign-in";
  const [visible, setVisible] = useState({
    heading: false,
    whatWeDo: false,
    builtForTeams: false,
    getStarted: false,
    button: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setVisible(v => ({ ...v, heading: true })), 200));
    timers.push(setTimeout(() => setVisible(v => ({ ...v, whatWeDo: true })), 600));
    timers.push(setTimeout(() => setVisible(v => ({ ...v, builtForTeams: true })), 1000));
    timers.push(setTimeout(() => setVisible(v => ({ ...v, getStarted: true })), 1400));
    timers.push(setTimeout(() => setVisible(v => ({ ...v, button: true })), 1800));
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const handleDashboardRedirect = () => {
    navigate(fallbackUrl);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20 max-w-5xl mx-auto">
      <h1
        className={`text-5xl font-bold text-orange-600 mb-6 text-center transition-all duration-700 ease-in-out transform ${
          visible.heading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        🖐️ Welcome to CoSync
      </h1>
      <p
        className={`text-xl text-gray-800 mb-16 max-w-3xl text-center transition-all duration-700 ease-in-out transform ${
          visible.heading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Your all-in-one space for seamless team collaboration, communication, and project management.
      </p>

      <button
        onClick={handleDashboardRedirect}
        className={`bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold cursor-pointer mb-12 transition-all duration-700 ease-in-out transform ${
          visible.button ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } hover:bg-orange-700 hover:shadow-lg`}
      >
        Go to Dashboard
      </button>

    </div>
  );
};

export default Welcome;
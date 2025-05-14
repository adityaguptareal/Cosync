import React, { useState } from "react";

function AdminSignin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Admin Sign In Data:", formData);

    // You can connect this to Firebase Auth or your backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50 px-4">
      <div className="relative flex flex-col w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h4 className="text-xl font-medium text-orange-800">Admin Sign In</h4>
        <p className="text-slate-500 font-light">
          Welcome back! Enter your credentials to access the dashboard.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-sm text-slate-600">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-slate-600">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your Password"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-slate-600 text-sm mt-1">
              <input
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                className="h-5 w-5 border border-slate-300 rounded checked:bg-slate-800 checked:border-slate-800"
              />
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 active:bg-slate-700 disabled:opacity-50"
          >
            Sign In
          </button>

          <p className="text-center mt-6 text-sm text-slate-600">
            Don&apos;t have an account?
            <a
              href="/admin-sign-up"
              className="ml-1 font-semibold text-slate-700 underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default AdminSignin;

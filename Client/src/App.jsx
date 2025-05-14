import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import { SignIn, SignUp } from "@clerk/clerk-react";
import UserDashboard from "./Pages/UserDashboard";
import Welcome from "./Pages/Welcome";
import "@lottiefiles/lottie-player";
import LottieAnimation from "./Components/Signup.json";
import Layout from "./Pages/Layout";
import WithoutNavLayout from "./Pages/WithoutNavLayout";
import BookSpaces from "./Pages/BookSpaces";
import BookEquipments from "./Pages/BookEquipments";
import Support from "./Pages/Support";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminSignup from "./Pages/AdminSignup";
import AdminSignin from "./Pages/AdminSignin";
import BookingListing from "./Pages/BookingListing";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes Without Navbar */}
        <Route path="/" element={<WithoutNavLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
        </Route>

        {/* User Auth Pages */}
        <Route
          path="/sign-in"
          element={
            <div className="flex justify-around items-center h-full min-h-screen">
              <lottie-player
                src={LottieAnimation}
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoPlay
              ></lottie-player>
              <div className="flex flex-col gap-4">
                <SignIn redirectUrl="/dashboard" />
              </div>
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <div className="flex justify-around items-center h-full min-h-screen">
              <lottie-player
                src={LottieAnimation}
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoPlay
              ></lottie-player>
              <div className="flex flex-col gap-4">
                <SignUp redirectUrl="/welcome" />
              </div>
            </div>
          }
        />

        <Route path="/welcome" element={<Welcome />} />

        {/* User Dashboard Protected Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route
            index
            element={
              <SignedIn>
                <UserDashboard />
              </SignedIn>
            }
          />
          <Route
            path="home"
            element={
              <SignedIn>
                <Home />
              </SignedIn>
            }
          />
          <Route
            path="listings"
            element={
              <SignedIn>
                <BookingListing />
              </SignedIn>
            }
          />
          <Route
            path="book-spaces"
            element={
              <SignedIn>
                <BookSpaces />
              </SignedIn>
            }
          />
          <Route
            path="book-equipments"
            element={
              <SignedIn>
                <BookEquipments />
              </SignedIn>
            }
          />
          <Route
            path="support"
            element={
              <SignedIn>
                <Support />
              </SignedIn>
            }
          />
          <Route
            path="*"
            element={
              <SignedOut>
                <Navigate to="/sign-up" />
              </SignedOut>
            }
          />
        </Route>
        <Route path="admin-sign-up" element={<AdminSignup/>} />
        <Route path="admin-sign-in" element={<AdminSignin/>} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<Layout />}>
          <Route index element={<AdminDashboard />} />
        

        {/* Admin Auth Routes - Dummy UI for now */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

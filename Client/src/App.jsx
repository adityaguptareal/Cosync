import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Dashboard from "./Pages/UserDashboard";
import Welcome from "./Pages/Welcome";
import "@lottiefiles/lottie-player";
import React from "react";
import LottieAnimation from "./Components/Signup.json";
import Layout from "./Pages/Layout";
import UserDashboard from "./Pages/UserDashboard";
import WithoutNavLayout from "./Pages/WithoutNavLayout";
import BookSpaces from "./Pages/BookSpaces";
import BookEquipments from "./Pages/BookEquipments";
import Support from "./Pages/Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithoutNavLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<UserDashboard />} />
        </Route>
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
        <Route
          path="/dashboard"
          element={
            <div className="flex justify-center items-center h-full min-h-screen">
              <Dashboard />
            </div>
          }
        />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Layout/>}>
        <Route index element={<UserDashboard />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/book-spaces" element={<BookSpaces />} />
        <Route path="/dashboard/book-equipments" element={<BookEquipments />} />
        <Route path="/dashboard/support" element={<Support />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;

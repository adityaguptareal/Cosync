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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route
              path="/sign-in"
              element={
                <div className="flex justify-center items-center h-full min-h-screen">
                  <SignIn redirectUrl="/dashboard" />
                </div>
              }
            />
            <Route
              path="/sign-up"
              element={
                <div className="flex flex-col justify-center items-center h-full min-h-screen">
                  <h1>Signup to CoSync</h1>
                  <SignUp redirectUrl="/welcome" />
                </div>
              }
            />

            <Route path="/dashboard" element={
              <div className="flex justify-center items-center h-full min-h-screen ">
              <Dashboard />
              </div>
              } />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

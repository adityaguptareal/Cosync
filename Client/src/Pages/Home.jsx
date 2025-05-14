import React, { useEffect, useRef, useState } from "react";
import {
  FaClock,
  FaUser,
  FaUserShield,
  FaCheckCircle,
  FaLightbulb,
  FaCreditCard,
  FaRobot,
  FaBell,
  FaEye,
  FaTicketAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  const sectionRefs = {
    intro: useRef(null),
    collaboration: useRef(null),
    buttons: useRef(null),
    features: useRef(null),
  };

  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    collaboration: false,
    buttons: true,
    features: false,
  });

  const [visibleFeatures, setVisibleFeatures] = useState({
    booking: false,
    userDashboard: false,
    adminDashboard: false,
    verifiedUsers: false,
    startupLeads: false,
    paymentGateway: false,
    aiChatbot: false,
    reminders: false,
    virtualPreview: false,
    ticketSupport: false,
  });

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRefs.intro.current) {
          setVisibleSections((v) => ({ ...v, intro: entry.isIntersecting }));
        } else if (entry.target === sectionRefs.collaboration.current) {
          setVisibleSections((v) => ({
            ...v,
            collaboration: entry.isIntersecting,
          }));
        } else if (entry.target === sectionRefs.buttons.current) {
          if (!visibleSections.features) {
            setVisibleSections((v) => ({
              ...v,
              buttons: entry.isIntersecting,
            }));
          } else {
            setVisibleSections((v) => ({ ...v, buttons: true }));
          }
        } else if (entry.target === sectionRefs.features.current) {
          setVisibleSections((v) => ({ ...v, features: entry.isIntersecting }));
          if (entry.isIntersecting) {
            setVisibleSections((v) => ({ ...v, buttons: true }));
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [visibleSections.features]);

  const featureRefs = {
    booking: useRef(null),
    userDashboard: useRef(null),
    adminDashboard: useRef(null),
    verifiedUsers: useRef(null),
    startupLeads: useRef(null),
    paymentGateway: useRef(null),
    aiChatbot: useRef(null),
    reminders: useRef(null),
    virtualPreview: useRef(null),
    ticketSupport: useRef(null),
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === featureRefs.booking.current) {
          setVisibleFeatures((v) => ({ ...v, booking: entry.isIntersecting }));
        } else if (entry.target === featureRefs.userDashboard.current) {
          setVisibleFeatures((v) => ({
            ...v,
            userDashboard: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.adminDashboard.current) {
          setVisibleFeatures((v) => ({
            ...v,
            adminDashboard: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.verifiedUsers.current) {
          setVisibleFeatures((v) => ({
            ...v,
            verifiedUsers: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.startupLeads.current) {
          setVisibleFeatures((v) => ({
            ...v,
            startupLeads: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.paymentGateway.current) {
          setVisibleFeatures((v) => ({
            ...v,
            paymentGateway: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.aiChatbot.current) {
          setVisibleFeatures((v) => ({
            ...v,
            aiChatbot: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.reminders.current) {
          setVisibleFeatures((v) => ({
            ...v,
            reminders: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.virtualPreview.current) {
          setVisibleFeatures((v) => ({
            ...v,
            virtualPreview: entry.isIntersecting,
          }));
        } else if (entry.target === featureRefs.ticketSupport.current) {
          setVisibleFeatures((v) => ({
            ...v,
            ticketSupport: entry.isIntersecting,
          }));
        }
      });
    }, observerOptions);

    Object.values(featureRefs).forEach((ref) => {
      if (ref.current) featureObserver.observe(ref.current);
    });

    return () => {
      Object.values(featureRefs).forEach((ref) => {
        if (ref.current) featureObserver.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-16 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="flex-grow relative z-10 container mx-auto px-4 py-20 pt-24 transition-all duration-300 ease-in-out">
        <section
          ref={sectionRefs.intro}
          className={`transition-all duration-1000 ease-in-out transform ${
            visibleSections.intro
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl font-bold text-orange-600 mb-6 text-center mt-10">
            Manage Co-Working Spaces Without the Chaos.
          </h1>
          <p className="text-lg text-gray-800 mb-10 text-center max-w-3xl mx-auto">
            Book cabins, track payments, and streamline operations — all from
            one intelligent platform.
          </p>
        </section>

        <section
          ref={sectionRefs.collaboration}
          className={`transition-all duration-1000 ease-in-out transform ${
            visibleSections.collaboration
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-orange-600 my-5 mt-25 text-center ">
            Work Better, Together
          </h2>
          <p className="text-lg text-gray-800 mb-8 text-center max-w-2xl mx-auto">
            Your collaborative workspace solution for teams of all sizes.
          </p>
        </section>

        <section
          ref={sectionRefs.buttons}
          className={`flex justify-center space-x-4 transition-all duration-1000 ease-in-out transform ${
            visibleSections.buttons
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <button className="bg-orange-600 text-white px-6 py-3 cursor-pointer rounded-md text-lg font-medium hover:bg-orange-700 hover:shadow-md transition duration-500">
            Get Started
          </button>
          <button className="border border-orange-600 text-orange-600 px-6 py-3 cursor-pointer rounded-md text-lg font-medium hover:bg-orange-50 hover:shadow-md transition duration-500">
            Learn More
          </button>
        </section>

        <section
          ref={sectionRefs.features}
          className={`mt-32 transition-all duration-1000 ease-in-out transform ${
            visibleSections.features
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-orange-600 mb-15 text-center mt-40 ">
            Why Choose CoSync?
          </h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
            <div
              ref={featureRefs.booking}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform ${
                visibleFeatures.booking
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaClock className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                Real-Time Booking System
              </span>
            </div>
            <div
              ref={featureRefs.verifiedUsers}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform delay-300 ${
                visibleFeatures.verifiedUsers
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaCheckCircle className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                Verified Users Registrations
              </span>
            </div>
            <div
              ref={featureRefs.startupLeads}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform delay-400 ${
                visibleFeatures.startupLeads
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaLightbulb className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                Providing Startup Leads
              </span>
            </div>
            <div
              ref={featureRefs.paymentGateway}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform delay-500 ${
                visibleFeatures.paymentGateway
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaCreditCard className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                Integrated Payment Gateway
              </span>
            </div>
            <div
              ref={featureRefs.aiChatbot}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform delay-600 ${
                visibleFeatures.aiChatbot
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaRobot className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                AI Chatbot Assistant
              </span>
            </div>
            <div
              ref={featureRefs.reminders}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform delay-700 ${
                visibleFeatures.reminders
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaBell className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                Reminders & Notifications
              </span>
            </div>
            <div
              ref={featureRefs.virtualPreview}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform delay-800 ${
                visibleFeatures.virtualPreview
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaEye className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                Image Preview 
              </span>
            </div>
            <div
              ref={featureRefs.ticketSupport}
              className={`flex flex-col items-center justify-center w-48 h-48 p-6 border rounded-lg shadow-md transition-all duration-1000 ease-in-out transform delay-900 ${
                visibleFeatures.ticketSupport
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <FaTicketAlt className="text-orange-600 text-6xl mb-4" />
              <span className="text-lg font-semibold text-center">
                Ticket Support System
              </span>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-orange-500 text-white py-12 mt-12">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">CoSync</h2>
            <p className="text-white">
              Empowering teams through better workspace management.
            </p>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-600">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="/term" className="hover:text-orange-600">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-orange-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

      
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="hover:text-orange-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-orange-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-orange-600">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p>📞 +91 9654497324 </p>
            <p>📧 support@cosync.com</p>
            <p>📍 ITS Engineering College, Uttar Pradesh, India</p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl mt-12 border-t border-white pt-8">
          <h3 className="text-xl font-semibold mb-4">Stay updated</h3>
          <form className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-800 text-white hover:cursor-pointer px-6 py-2 rounded-r-md font-semibold transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="container mx-auto px-6 max-w-7xl mt-12 border-t border-white pt-6 text-center text-white text-sm">
          © 2025 CoSync. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
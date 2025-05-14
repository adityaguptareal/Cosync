import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md  w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-orange-600">
              CoSync
            </Link>
          </div>

          {/* Desktop menu section */}
                <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Terms
                </Link>
                </div>

                {/* Login/Signup buttons section */}
                <div className="hidden md:flex items-center space-x-2">
                <SignedIn>
                  <button
                  className="bg-orange-600 cursor-pointer mr-5 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition duration-300"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                  >
                  Dashboard
                  </button>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <button
                  onClick={() => navigate("/sign-up")}
                  className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition duration-300"
                  >
                  Sign Up
                  </button>
                  <button
                  onClick={() => navigate("/sign-in")}
                  className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition duration-300"
                  >
                  Sign in
                  </button>
                </SignedOut>
                </div>

                {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            to="/term"
            className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Terms
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5 space-x-2">
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-100">
              Login
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-orange-600 text-white hover:bg-orange-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Activity, Camera, ClipboardMinus, LogOut, Menu, X, TicketPercent, FileClock, TicketCheck } from "lucide-react"; // Relevant Icons
import { useLocation } from "react-router-dom";

import toast from "react-hot-toast";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state
  const navigate = useNavigate();


  const menuItems = [
    { name: "Home", icon: <Home />, path: "/dashboard/home" },
    { name: "Create Booking", icon: <TicketPercent />, path: "/dashboard/book-spaces" },
    { name: "Booking History", icon: <FileClock />, path: "/dashboard/book-equipments" },
    { name: "Raise ticket", icon: <TicketCheck />, path: "/dashboard/support" },
  ];
  const location = useLocation();

  // Function to check if the menu item is active
  const isActive = (path) => location.pathname === path;
  return (
    <div
      className={`h-screen bg-white text-grey transition-all px-2 duration-300 shadow-lg ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center">
        {isOpen && (
          <h2 className="text-xl font-bold text-orange-600">
            {import.meta.env.VITE_APP_NAME || "Cosync"}
          </h2>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="text-orange-600">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <div className="group">
                <Link
                  to={item.path}
                  className={`flex items-center gap-4 px-4 py-2 rounded-md transition ${
                    isActive(item.path)
                      ? "bg-orange-600 text-white"
                      : "hover:bg-orange-200"
                  }`}
                >
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </Link>
              </div>
            </li>
          ))}
         
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

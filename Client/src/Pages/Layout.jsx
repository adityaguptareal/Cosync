import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex bg-background">
        <Sidebar toggleSidebar={toggleSidebar} />
        <main className={`flex-1 p-4 ${isSidebarOpen ? 'ml-64' : 'ml-5'}`}>
          {/* <div className="flex justify-center items-center">Hello World!</div> */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout
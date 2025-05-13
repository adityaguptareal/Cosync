import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

function Layout() {
  return (
 <>
 <div className="flex bg-background">
      <Sidebar/>
      <main className="flex-1 p-4">
        <div className="flex justify-center items-center">Hello World!</div>
        <Outlet />
      </main>
    </div>
 </>
  )
}

export default Layout
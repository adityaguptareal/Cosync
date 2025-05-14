import React from 'react'
import { Outlet } from 'react-router-dom'
export default function UserDashboard() {
    return (
      <main className="flex-1 p-4">
      <div className="flex justify-center items-center">Welcome to the Admin Dashboard</div>
      <Outlet />
    </main>
    )
  }
  
import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

function WithoutNavLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default WithoutNavLayout
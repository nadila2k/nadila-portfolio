import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import AnimatedBackground from './AnimatedBackground'

export default function Layout() {
  return (
   <>
   <AnimatedBackground />
   <div className="relative z-10">
     <NavBar />
     <Outlet/>
   </div>
   </>
  )
}

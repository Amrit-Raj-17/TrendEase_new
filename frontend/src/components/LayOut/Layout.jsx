import React from 'react'
import { Outlet } from 'react-router-dom'  // Capitalized
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SearchBar from '../SearchBar'
import { ToastContainer, toast } from 'react-toastify';

function Layout() {
  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Outlet />   {/* Capitalized here too */}
      <Footer/>
    </>
  )
}

export default Layout

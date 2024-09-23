import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function MainLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default MainLayout

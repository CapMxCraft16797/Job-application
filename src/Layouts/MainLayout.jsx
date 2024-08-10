import React from 'react'
import {Outlet} from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToasify.css'
import NavBar from '../components/NavBar'

const MainLayout = () => {
  return <>
        <NavBar/>
        <Outlet/>
        {/* <ToastContainer /> */}
    </>
  
}

export default MainLayout
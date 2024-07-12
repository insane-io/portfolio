import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import "aos/dist/aos.css"

const Baselayout = () => {
  return (
    <div className='bg-[#34353a] text-white overflow-x-hidden'>
      <Navbar/>
      <div className='pt-24 xl:px-40 px-10'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Baselayout

import React from 'react'
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='border-t h-32 flex items-center'>
         <div className='flex justify-around md:flex-row flex-col w-full lg:px-40 px-10'>
            <h1 className='md:text-3xl text-xl flex md:flex-row gap-3 items-center'><FiPhone />86058 84415</h1>
            <a href="mailto:sanedhruv1604@gmail.com" className='md:text-3xl text-xl flex flex-row gap-3 items-center'><CiMail />sanedhruv1604@gmail.com</a>
         </div>
    </div>
  )
}

export default Footer

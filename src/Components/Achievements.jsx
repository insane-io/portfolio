import React, { useEffect } from 'react'
import AOS from "aos"

const Achievements = (props) => {

  useEffect(() => {
    AOS.init({ duration: 1500 })
}, [])
  return (
    <div className='flex md:flex-row flex-col md:h-40 p-5 bg-[#46474b] rounded-lg items-center gap-3 shadow-lg ' data-aos="fade-up">
      <img src={props.image} alt="" className='size-32 rounded-md'/>
      <div className='flex flex-col justify-start gap-3'>
        <h1 className='md:text-3xl text-[#ffc86b] font-semibold'>{props.achievement}</h1>
        <h1>{props.details}</h1>
      </div>
    </div>
  )
}

export default Achievements

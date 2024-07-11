import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Skills = (props) => {

  const page = props.page
  return (
    <>
      {
        page == "about" ? (
          <div className='md:size-72 size-40 shadow-2xl rounded-xl flex justify-center items-center bg-[#46474b] hover:bg-[#ffc86b] transition-colors'>
            <div className='flex flex-col items-center gap-2'>
              <img src={props.image} alt="" className='md:size-40 size-20' />
              <h1 className='md:text-3xl text-lg'>{props.name}</h1>
            </div>
          </div>
        ) : page == "portfolio" || page == "social" ? (
          <a href={props.link} target="_blank" className='cursor-pointer my-2'>
            <div className={`${page == "social" ? "xl:size-96 lg:size-72 md:size-80 hover:shadow-2xl transition-shadow" : "md:size-72 lg:size-56 xl:size-72  size-40 hover:bg-[#ffc86b] " } transition-colors rounded-xl flex justify-center items-center bg-[#46474b] `}>
              <div className='flex flex-col items-center gap-4'>
                <img src={props.image} alt="" className={`${props.size}`} />
                { page == "social" ? <div className='text-2xl'>{props.accname}</div> : null}
              </div>
            </div>
          </a>
        ) : null
      }
    </>

  )
}

export default Skills


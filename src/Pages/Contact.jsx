import React, { useEffect } from 'react'
import Skills from "../Components/Skills"
import github from "../Assets/github.png"
import lin from "../Assets/in.webp"
import mail from "../Assets/Mail.png"
import AOS from "aos"
import "aos/dist/aos.css"

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 })
}, [])

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 my-11 ' >
      {window.scrollTo(0, 0)}
      <Skills page={"social"} image={github} accname={"insane-io"} size={"lg:size-52 md:size-36 size-40"} link={"https://github.com/insane-io"} />
      <Skills page={"social"} image={lin} size={"lg:size-52 md:size-36 size-40"} accname={"Dhruv Sane"} link={"https://www.linkedin.com/in/dhruv-sane-15933927b/"} />
      <Skills page={"social"} image={mail} size={"lg:size-52 md:size-36 size-40"} accname={"sanedhruv1604@gmail.com"} link={"mailto:sanedhruv1604@gmail.com"} />
    </div>
  )
}

export default Contact

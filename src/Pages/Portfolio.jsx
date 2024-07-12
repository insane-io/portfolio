import React, { useEffect } from 'react'
import Skills from '../Components/Skills'
import jj from "../Assets/Screenshot 2024-07-11 185634.png"
import eways from "../Assets/eways.svg"
import notes from "../Assets/notes.png"
import hackmatch from "../Assets/Screenshot 2024-07-11 191945.png"
import AOS from "aos"


const Portfolio = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 })
}, [])


  return (
    <>
    {window.scrollTo(0, 0)}
      <div className='flex flex-col my-8'>
        <div className='md:text-5xl text-2xl font-bold'>Education</div>
        <div className='bg-[#ffc86b] h-1 md:w-32 w-10 mt-3'></div>
        <div className='flex flex-row items-start gap-3 mt-8 md:text-2xl text-lg' data-aos="fade-up">
          <h1 className='font-light'>School: </h1>
          <h1 className='text-[#ffc86b] font-semibold'>Don Bosco School, Boisar </h1>
        </div>
        <div className='flex flex-row items-start gap-3 md:text-2xl text-lg' data-aos="fade-up">
          <h1 className='font-light'>Jr. College: </h1>
          <h1 className='text-[#ffc86b] font-semibold'>Tarapur Vidya Mandir, Boisar </h1>
        </div>
        <div className='flex flex-row items-start gap-3 md:text-2xl text-lg' data-aos="fade-up">
          <h1 className='font-light'>College: </h1>
          <h1 className='text-[#ffc86b] font-semibold'>Atharva College Of Engineering, Malad (Currently Enrolled for Computer Engineering)</h1>
        </div>
      </div>
      <div className='flex flex-col my-20'>
        <div className='md:text-5xl text-2xl font-bold'>Projects(Click to Open Details)</div>
        <div className='bg-[#ffc86b] h-1 md:w-32 w-10 mt-3'></div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3 my-8' data-aos="fade-up">
          <Skills page={"portfolio"} image={jj} size={"h-12"} link={"https://drive.google.com/file/d/1uZHSkRTxQskn653nDbioaE5JeOyMwCU0/view?usp=sharing"}/>
          <Skills page={"portfolio"} image={eways} size={"md:size-40 size-20"} link={"https://drive.google.com/file/d/1HKYJUQdgzDWmKsCYUM7zaA-ly93tU6ot/view?usp=sharing"}/>
          <Skills page={"portfolio"} image={notes} link={"https://nestnote.netlify.app/"}/>
          <Skills page={"portfolio"} image={hackmatch} link={"https://drive.google.com/file/d/16Cre04N4_cMkG_wXdkW44CyaWDtlKwWq/view?usp=sharing"}/>
        </div>
        <div className='my-20'>
          <div className='md:text-5xl text-2xl font-bold'>Certifications</div>
          <div className='bg-[#ffc86b] h-1 md:w-32 w-10 mt-3'></div>
          <div className='my-6' data-aos="fade-up">
            <ul className='list-disc ml-5 md:text-3xl text-2xl'>
              <li className='text-[#ffc86b] mb-5'>Network Security</li>
              <h1 className='md:text-2xl text-lg gap-3'>Platform: <span className='text-[#ffc86b]'>Infosys Springboard</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Program: <span className='text-[#ffc86b]'>Online</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Details: <span className='text-[#ffc86b]'>Network security course</span></h1>
            </ul>
          </div>
          <div className='my-6' data-aos="fade-up">
            <ul className='list-disc ml-5 md:text-3xl text-2xl'>
              <li className='text-[#ffc86b] mb-5'>Cyber Security</li>
              <h1 className='md:text-2xl text-lg gap-3'>Platform: <span className='text-[#ffc86b]'>Academor</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Program: <span className='text-[#ffc86b]'>Online</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Details: <span className='text-[#ffc86b]'>It was a cyber security training program where some tools of ethical hacking and asset securing were taught. The course objective was to make the learners familiar with the fundamentals of cybersecurity and ethical hacking. </span></h1>
            </ul>
          </div>
          <div className='mt-6' data-aos="fade-up">
            <ul className='list-disc ml-5 md:text-3xl text-2xl'>
              <li className='text-[#ffc86b] mb-5'>Foundations Of Cybersecurity</li>
              <h1 className='md:text-2xl text-lg gap-3'>Platform: <span className='text-[#ffc86b]'>Coursera</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Program: <span className='text-[#ffc86b]'>Online</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Details: <span className='text-[#ffc86b]'>Google Fundamentals Of Cybersecurity course</span></h1>
            </ul>
          </div>
        </div>
        <div className='my-10' >
          <div className='md:text-5xl text-2xl font-bold'>Work Experience</div>
          <div className='bg-[#ffc86b] h-1 md:w-32 w-10 mt-3'></div>
          <div className='mt-6' data-aos="fade-up">
            <ul className='list-disc ml-5 text-3xl'>
              <li className='text-[#ffc86b] mb-5'>Cyber Security</li>
              <h1 className='md:text-2xl text-lg gap-3'>Platform: <span className='text-[#ffc86b]'>Academor</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Program: <span className='text-[#ffc86b]'>Virtual</span></h1>
              <h1 className='md:text-2xl text-lg gap-3'>Details: <span className='text-[#ffc86b]'>I made 3 Cyber Security projects during the tenure of this internship.</span></h1>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio

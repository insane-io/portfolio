import React, { useEffect } from 'react'
import './aboutstyles.css'
import Skills from '../Components/Skills'
import react from "../Assets/React.png"
import js from "../Assets/js.webp"
import next from "../Assets/next.png"
import node from "../Assets/node.png"
import html from "../Assets/css.png"
import mongo from "../Assets/mongo.png"
import tailwind from "../Assets/tailwind.png"
import express from "../Assets/express.png"
import Achievements from '../Components/Achievements'
import sih from "../Assets/sih.png"
import { Link } from 'react-router-dom'
import bit from "../Assets/bit and build.png"
import agnethon from "../Assets/agnethon.jpeg"

import AOS from "aos"
const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])
    return (
        <>
            {window.scrollTo(0, 0)}
            <div className=' lg:h-96 md:h-72 h-56 flex items-center justify-start md:shadow-2xl rounded-full md:px-28'>
                <div className='flex flex-col'>
                    <p className='flex flex-row items-end xl:text-4xl text:2xl gap-3'>
                        <span className=''>I'm</span>
                        <h1 className='xl:text-6xl text-2xl text-[#ffc86b]'>Dhruv Sane</h1>
                    </p>
                    <contai className='container xl:text-4xl md:text-xl text-sm typewriter-text sm:flex sm:flex-col'>
                        A passionate Web Developer &  Cyber Security Enthusiast
                    </contai>
                    <div className='felx justify-start'>
                        <Link to="/social"><button className='p-5 transform transition-colors translate-y-10 xl:text-3xl lg:text-xl border-4 rounded-xl flex items-center hover:bg-[#ffc86b] hover:text-white border-[#ffc86b] text-[#ffc86b]'>Contact me</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex w-100 md:my-20 my-3'><h1 className='bg-[#f5f5f5] w-full h-1 rounded-xl'></h1></div>
            <div className='md:text-5xl text-3xl font-bold'>About</div>
            <div className='bg-[#ffc86b] h-1 md:w-32 w-10 mt-3'></div>
            <div className='md:text-2xl text-md my-8' data-aos="fade-up">
                Hello! I'm a passionate <span className='text-[#ffc86b]'>Frontend Developer</span> with a keen interest in building user-friendly and visually appealing web applications. With extensive experience in React, I have contributed to numerous personal and team projects, focusing on delivering high-quality code and intuitive user experiences. My journey in web development has been marked by active participation in hackathons, where I have excelled at developing innovative solutions under tight deadlines.
            </div>
            <div className='bg-[#34353a]'>
                <h1 className='md:text-5xl text-3xl font-bold'>My Skills</h1>
                <div className='bg-[#ffc86b] h-1 md:w-32 w-10 mt-3'></div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 my-10 gap-10'>
                    <Skills image={react} name={"ReactJs"} page={"about"} />
                    <Skills image={next} name={"NextJs"} page={"about"} />
                    <Skills image={js} name={"JavaScript"} page={"about"} />
                    <Skills image={html} name={"HTML & CSS"} page={"about"} />
                    <Skills image={node} name={"NodeJs"} page={"about"} />
                    <Skills image={mongo} name={"MongoDb"} page={"about"} />
                    <Skills image={tailwind} name={"TailwindCSS"} page={"about"} />
                    <Skills image={express} name={"ExpressJs"} page={"about"} />
                </div>
                <div className='flex flex-col my-20 '>
                    <h1 className='md:text-5xl text-3xl font-bold'>Achievements</h1>
                    <div className='bg-[#ffc86b] h-1 md:w-32 w-10 mt-3'></div>
                    <div className='grid grid-cols-1 my-8 w-full gap-4' data-aos="fade-up">
                        <Achievements image={sih} achievement={"Finalists for SIH 2023"} details={"I was a finalist (waitlist) at the Smart India Hackathon 2023 for developing an e-waste facility locator. This project aimed to promote sustainability by helping users find the nearest e-waste recycling centers, ensuring proper disposal and recycling of electronic waste."} />
                        <Achievements image={bit} achievement={"Participated Bits and Build Hackathon 2024"} details={"I participated in the Bits and Build Hackathon 2024 at Fr. Conceicao Rodrigues College of Engineering and Usha Mittal Institute of Technology, where I developed a supply chain management system. This system aimed to optimize logistics, track inventory, and improve the efficiency of supply chain operations."} />
                        <Achievements image={agnethon} achievement={"Participated In Agnethon 2024"} details={"I participated in Agnethon, where I developed an event management system. This system was designed to streamline event planning, registration, and coordination, making it easier for organizers and attendees to manage events efficiently."} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

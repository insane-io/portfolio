import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="fixed w-full z-20 top-0 start-0 md:my-5">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto md:p-4">
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-row p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "block py-2 px-3 text-white rounded md:bg-transparent md:p-0 text-xl underline underline-offset-8" : "block py-2 px-3 text-gray-400 rounded md:bg-transparent md:p-0 md:hover:text-white text-xl"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className={({ isActive }) => isActive ? "block py-2 px-3 text-white rounded md:bg-transparent md:p-0 text-xl underline underline-offset-8" : "block py-2 px-3 text-gray-400 rounded md:bg-transparent md:p-0 md:hover:text-white text-xl"}>Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/social" className={({ isActive }) => isActive ? "block py-2 px-3 text-white rounded md:bg-transparent md:p-0 text-xl underline underline-offset-8" : "block py-2 px-3 text-gray-400 rounded md:bg-transparent md:p-0 md:hover:text-white text-xl"}>Social</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

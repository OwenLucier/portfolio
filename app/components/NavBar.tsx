"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { FaHamburger } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import MenuOverlay from './MenuOverlay';

//<IoIosCloseCircle />
//<FaHamburger />


//Array of objects that contain the title and href for each link 
const navLinks = [
    { title: 'About', href: 'About' },
    { title: 'Projects', href: 'Projects' },
    { title: 'Contact', href: 'Contact' },
]

const Navbar = () => {
    {
        /*
        The useEffect hook is used to run code when the component mounts and unmounts
        This hook is used to add an event listener to the window object that will call the handleResize 
        function when the window is resized (this is used to close the mobile menu when the window is resized)
        */
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setNavbarOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        // Call the handleResize function to set the state correctly when the component mounts
        handleResize();

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    {/* 
        The navLinks.map function will iterate through the array and return a NavLink component for each object in the array
        The NavLink component will be passed the title and href props from the object in the array
        the key prop is required by React and is used to identify which items have changed, are added, or are removed
        */}

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]">
            <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-3">
                <Link href="/" className="text-2xl md:text-4xl text-white font-semibold"> LOGO </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded-full border-white hover:border-emerald-600 group/link"> <FaHamburger className="w-5 h-5 text-white group-hover/link:text-emerald-600" /> </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded-full border-white hover:border-emerald-600 group/link"> <IoIosCloseCircle className="w-5 h-5 text-white group-hover/link:text-emerald-600" /> </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>

            {
                // If the navbarOpen state is true, render the MenuOverlay component if false, render nothing (null)
            }
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar
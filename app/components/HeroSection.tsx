"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from "react-icons/fa6";
import handleScroll from './SmoothScroll';

//Hero Section is a React functional component that displays the hero section of the website
const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-7 place-self-center text-center md:text-left ">
                    <h1 className="text-white mb-6 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
                        <span className="leading-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                            Hello, I'm {" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Owen',
                                3000,
                                'a UX Designer',
                                1000,
                                'a UI Designer',
                                1000,
                                'a Web Designer',
                                1000,
                                'a Student',
                                1000,
            
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ fontSize: '0.90em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg lg:text-xl mb-6 sm:mr-8">Hello, My name is Owen and I'm a UX Design student studying at Wilfrid Laurier University. During the last year I have had the great pleasure to work as a UI Designer in a coop role designing complex UI projects with a team of skilled developers. </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:bg-slate-200 text-white">Contact Me</button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-900 text-white border border-white mt-3 ">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/hero-image.png"
                            alt="hero"
                            className="absolute transform -translate-x-3 -translate-y-3 top-3 left-3 lg:w-[400px] lg:h-[400px]"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                
            </div>

            <div className="hidden md:flex h-60 justify-center my-8 py-40 duration-300">
            <button onClick={(event) => handleScroll(event, "About")} className="hidden md:flex w-[60px] h-[60px] justify-center rounded-full bg-transparent border-white text-white animate-bounce">
            <FaArrowDown className="translate-y-1/3 text-4xl"/>
            </button>
            </div>
            
        </section>
    )
}

export default HeroSection
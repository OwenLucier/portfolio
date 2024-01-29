"use client"
import React from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { motion, useAnimation } from 'framer-motion'

const AboutSection = () => {
    return (
        <section id="About" className="flex flex-col min-h-screen justify-center">

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12">

                    <div className="col-span-12 place-self-center mb-3 md:col-span-4">
                        <Image
                            src="/about-image.jpg"
                            alt="Picture of the author"
                            width={400}
                            height={400}
                            className="rounded-[30px] border-full border-4 border-emerald-500"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-8 md:pl-8">
                        <h2 className="font-extrabold justify-left text-3xl pb-6 flex text-white">About Me</h2>
                        <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mr-8">
                            I am a 4th year User Experience Design student at Wifrid Laurier University currently working as a UI Designer in a co-op role. I am passionate about creating beautiful and functional designs with a focus on the Human Centered Design Approach. I look to expand and improve my skills in the field of UX Design and am always seeking new opportunities to learn and grow.
                        </p>
                        <p className="text-gray-300 text-base text-left md:text-justify sm:text-lg lg:text-xl md:pr-10 mb-10 ">
                            {"When I\'m not at the computer, you can find me out in the woods hiking, camping, fishing or flying one of my custom built FPV drones. I also enjoy playing video games, watching movies and spending time with my friends and family."}
                        </p>

                        <h2 className="font-extrabold justify-left text-2xl flex text-white">My Stack</h2>
                        <div className="flex flex-wrap w-flex justify-start gap-4 mt-2">

                            <img src="https://skillicons.dev/icons?i=figma" />
                            <img src="https://skillicons.dev/icons?i=react" />
                            <img src="https://skillicons.dev/icons?i=tailwind" />
                            <img src="https://skillicons.dev/icons?i=css" />
                            <img src="https://skillicons.dev/icons?i=javascript" />
                            <img src="https://skillicons.dev/icons?i=typescript" />
                            <img src="https://skillicons.dev/icons?i=git" />


                        </div>

                    </div>

                </div>
            </Container>
        </section>
    )
}

export default AboutSection
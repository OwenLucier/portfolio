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

                    <div className="hidden sm:flex col-span-12 place-self-top mb-3 md:col-span-4">
                        <Image
                            src="/about-image.jpg"
                            alt="hero"
                            className="hidden md:block heroImage absolute w-[200px] h-[300px] rounded-[30px] border-solid xl:w-[400px] xl:h-[500px] lg:w-[300px] lg:h-[420px] md:w-[250px] md:h-[350px]"
                            width={800}
                            height={800}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-8 md:pl-8 pt-6">
                    <h2 className="font-extrabold text-2xl py-2  text-white justify-start">About Me</h2>

                        <p className="text-gray-400 text-justify lg:text-xl mb-6">
                            I am a fourth-year student specializing in User Experience Design at Wilfrid Laurier University. Currently, I am engaged as a UI Designer in a dynamic co-op role. My goal is to create aesthetically pleasing and highly functional designs, driven by a commitment to the Human-Centered Design Approach. I continually enhance and broaden my expertise in UX Design through personal projects and research. I am always on the lookout for fresh opportunities to foster learning and personal growth.
                        </p>
                        <p className="text-gray-400 text-justify lg:text-xl mb-6">
                            {"When I\'m not at the computer, you can find me out in the woods hiking, camping, fishing or flying one of my custom built FPV drones. I also enjoy playing video games, watching movies and spending time with my friends and family."}
                        </p>

                        <h2 className="font-semibold justify-left text-xl lg:text-xl pb-2 flex text-white">Technologies I use:</h2>
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
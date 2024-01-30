"use client"
import React, { Suspense, useEffect, useState } from "react";
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa6";
import handleScroll from './navigation/SmoothScroll';
import { Container } from './Container';
import { motion } from 'framer-motion';
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

//Hero Section is a React functional component that displays the hero section of the website
const HeroSection = () => {
    //renders the canvas after 1 second after the component mounts so the canvas does not render before the encapsulating styules are loaded
    const [renderCanvas, setRenderCanvas] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderCanvas(true);
        }, 1000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="Hero" className="flex flex-col min-h-screen justify-center">
            <Container classes="pt-20 sm:pt-0">
                <div className="flex sm:hidden w-[200px] h-[200px] relative mb-[100px]">

                    <div className="absolute -translate-x-[60px] -translate-y-[90px] h-[450px] w-[450px]">

                        {renderCanvas && (
                            <Canvas>

                                <Suspense fallback={null}>
                                    <OrbitControls enableZoom={false} />
                                    <ambientLight intensity={1.0} />
                                    <directionalLight position={[3, 2, 1]} />
                                    <Sphere args={[1, 100, 200]} scale={1.8}>
                                        <MeshDistortMaterial
                                            color="#10B981"
                                            attach="material"
                                            distort={0.5}
                                            speed={0.5}
                                        />
                                    </Sphere>
                                </Suspense>
                            </Canvas >
                        )}

                    </div>
                    <Image
                        src="/hero-image.png"
                        alt="hero"
                        className="absolute translate-x-[85px] translate-y-[50px]"
                        width={800}
                        height={800}
                    />
                </div>




                <div className="grid grid-cols-1 md:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                        className="col-span-7 place-self-center text-center md:text-left ">

                        <h1 className="text-white mb-6 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
                            <span className="leading-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
                                {"Hello, I\'m"} {" "}
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
                        <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mr-8">{"Hello, My name is Owen and I\'m a UX Designer from Ontario, Canada! I am currently working as a UI Designer in the cyber-security industry building applications with a skilled team of developers."} </p>

                        {/*
                        Animated contact me and download CV buttons
                        TODO: Add contact me and download CV functionality 
                        */}
                        <div className="flex flex-wrap gap-4 mt-12 align-center justify-center lg:justify-start ">
                            <motion.button
                                className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:bg-slate-200 text-white"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Contact Me

                            </motion.button>

                            <motion.button
                                className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-white border border-white"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Download CV
                            </motion.button>

                            <div className="flex flex-col-2 gap-4 text-white">
                                <motion.button
                                    className="w-full sm:w-fit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <a href="https://github.com/OwenLucier">
                                        <FaGithub className="text-4xl" />
                                    </a>
                                </motion.button>
                                <motion.button
                                    className="w-full sm:w-fit text-white"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <a href="https://www.linkedin.com/in/owen-lucier/">
                                        <FaLinkedin className="text-4xl" />
                                    </a>
                                </motion.button>
                            </div>


                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }}
                        className="flex col-span-5 mt-4 lg:mt-0 justify-center pt-8 md:pt-0 md:justify-end">

                        <div className="hidden sm:flex w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] relative">

                            <div className="absolute sm:-translate-x-[100px] sm:-translate-y-[90px] md:-translate-x-[150px] md:-translate-y-[100px] lg:-translate-x-[200px] lg:-translate-y-[200px] sm:h-[450px] sm:w-[450px] md:h-[600px] md:w-[600px] lg:h-[900px] lg:w-[900px]">

                                {renderCanvas && (
                                    <Canvas>

                                        <Suspense fallback={null}>
                                            <OrbitControls enableZoom={false} />
                                            <ambientLight intensity={1.0} />
                                            <directionalLight position={[3, 2, 1]} />
                                            <Sphere args={[1, 100, 200]} scale={1.8}>
                                                <MeshDistortMaterial
                                                    color="#10B981"
                                                    attach="material"
                                                    distort={0.5}
                                                    speed={0.5}
                                                />
                                            </Sphere>
                                        </Suspense>
                                    </Canvas >
                                )}

                            </div>
                            <Image
                                src="/hero-image.png"
                                alt="hero"
                                className="heroImage absolute transform -translate-x-3 translate-y-1 top-3 left-3 lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px]"
                                width={800}
                                height={800}
                            />
                        </div>
                    </motion.div>

                </div>
            </Container>

            <div className="hidden sm:flex justify-center duration-300 absolute bottom-0 left-0 right-0 ">
                <button onClick={(event) => handleScroll(event, "About")} className="flex w-[60px] h-[60px] justify-center rounded-full bg-transparent border-white text-white animate-bounce">
                    <FaArrowDown className="-translate-y-8 text-4xl" />
                </button>
            </div>

        </section>
    )
}

export default HeroSection



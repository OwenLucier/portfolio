"use client"
import { Container } from './Container'
import React from 'react'
import ProgressCircle from './ProgressCircle'
import { motion } from 'framer-motion'

const SkillsSection = () => {
    return (
        <section id="skills">
            <Container>
                <h2 className="font-extrabold justify-left text-4xl mt-20 pb-8 flex md:py-8 text-white">Stack</h2>
               
                <div className="flex flex-wrap w-flex justify-center gap-auto items-center">

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={80} imageSrc="/figma.png" animDelay={1} />
                    </motion.div>

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={50} imageSrc="/javascript.png" animDelay={1.5} />
                    </motion.div>

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={40} imageSrc="/typescript.png" animDelay={2} />
                    </motion.div>

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={60} imageSrc="/react.png" animDelay={2.5} />
                    </motion.div>

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={60} imageSrc="/git.png" animDelay={3} />
                    </motion.div>

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={60} imageSrc="/git.png" animDelay={3} />
                    </motion.div>

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={60} imageSrc="/git.png" animDelay={3} />
                    </motion.div>

                    <motion.div className="flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 8,
                                stiffness: 100,
                                restDelta: 0.001
                            }
                        }
                        }
                    >
                        <ProgressCircle percentage={60} imageSrc="/git.png" animDelay={3} />
                    </motion.div>


                </div>
            </Container>
        </section>
    )
}

export default SkillsSection
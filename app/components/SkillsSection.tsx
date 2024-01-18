"use client"
import React from 'react'
import { Container } from './Container'
import { useEffect } from 'react'
import { motion, useTransform, useViewportScroll, useAnimation } from 'framer-motion'
import ProgressCircle from './ProgressCircle'
import { SkillsDiv } from './SkillsDiv'
import { useInView } from 'react-intersection-observer';


const SkillsSection = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    }

return (
    <section id="Stack" ref={ref}>
        <Container>
            <h2 className="font-extrabold justify-left text-4xl mt-20 pb-8 flex md:py-8 text-white">Stack</h2>

            <motion.div className="flex flex-wrap w-flex justify-center gap-auto items-center"
                 variants={containerVariants}
                 initial="hidden"
                 animate={controls}
            >

                <SkillsDiv>
                    <ProgressCircle percentage={80} imageSrc="/figma.png" animDelay={1} />
                </SkillsDiv>

                <SkillsDiv>
                    <ProgressCircle percentage={50} imageSrc="/javascript.png" animDelay={1.5} />
                </SkillsDiv>

                <SkillsDiv>
                    <ProgressCircle percentage={40} imageSrc="/typescript.png" animDelay={2} />
                </SkillsDiv>

                <SkillsDiv>
                    <ProgressCircle percentage={60} imageSrc="/react.png" animDelay={2.5} />
                </SkillsDiv>

                <SkillsDiv>
                    <ProgressCircle percentage={60} imageSrc="/gpt.png" animDelay={3} />
                </SkillsDiv>

                <SkillsDiv>
                    <ProgressCircle percentage={80} imageSrc="/illustrator.png" animDelay={3.5} />
                </SkillsDiv>

                <SkillsDiv>
                    <ProgressCircle percentage={80} imageSrc="/photoshop.png" animDelay={4} />
                </SkillsDiv>

                <SkillsDiv>
                    <ProgressCircle percentage={30} imageSrc="/git.png" animDelay={4.5} />
                </SkillsDiv>


            </motion.div>
        </Container>
    </section>
)
}

export default SkillsSection
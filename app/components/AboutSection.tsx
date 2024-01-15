import React from 'react'
import Image from 'next/image'
import ProgressBar from './ProgressBar'
import { Container } from './Container'

const AboutSection = () => {
    return (
        <section id="About" className="pb-20">
            <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 pb-8 mb-8">
                <div className="col-span-12 place-self-center text-center md:text-left ">
                    <h2 className="font-extrabold text-4xl py-20 my-8 flex md:py-8">About Me</h2>
                </ div>
                <div className="col-span-6">
                    <p className="text-gray-500 text-base text-center md:text-left sm:text-lg lg:text-xl mb-6 sm:mr-8">
                        I am a 4th year User Experience Design student at Wifrid Laurier University currently working as a UI Designer in a co-op role. I am passionate about creating beautiful and functional designs with a focus on the Human Centered Design Approach. I look to expand and improve my skills in the field of UX Design and am always seeking new opportunities to learn and grow.
                    </p>
                </div>
                <div className="col-span-6">
                    <ProgressBar title="Figma" href="/figma.png" progress={90}  />
                    <ProgressBar title="Git" href="/git.png" progress={40}  />
                    <ProgressBar title="TypeScript" href="/typescript.png" progress={40}  />
                    <ProgressBar title="React" href="/react.png" progress={60}  />
                    <ProgressBar title="Javascript" href="/javascript.png" progress={70}  />
                </div>
            </div>
            </Container>
        </section>
    )
}

export default AboutSection
import React from 'react'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren & {
    classes?: string
    style?: string
    link: string
}


const GlowingCard: React.FC<ContainerProps> = ({ children, classes, style, link}) => {
    return (
        <motion.button className="w-full mt-10 sm:mt-24 bg-transparent relative" style={{ paddingBottom: '40%' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(link, '_blank')}
            >
            
            <div className="absolute inset-0 flex bg-[radial-gradient(at_center_top,_#FFFFFF,_#565656,_transparent)] rounded-lg sm:rounded-2xl"
                style={{ boxShadow: '-13px 3px 250px -39px rgba(255, 255, 255, 0.17)' }}>
                <div className={`flex-grow m-0.5 bg-[#181818] rounded-lg sm:rounded-2xl ${classes}`}>
                    {style}{children}
                </div>
            </div>
        </motion.button>
    );
};

export default GlowingCard;




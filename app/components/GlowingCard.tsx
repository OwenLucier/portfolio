import React from 'react'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren & {
    classes?: string
    style?: string
  }


  const GlowingCard: React.FC<ContainerProps> = ({ children, classes, style }) => {
    return (
        <div className="w-[660px] h-[230px] bg-transparent relative">
            <div className="absolute inset-0 flex bg-gradient-to-tr from-transparent via-white to-transparent rounded-2xl" 
                 style={{ boxShadow: '-13px 39px 250px -39px rgba(255, 255, 255, 0.17)' }}>
                <div className={`flex-grow m-0.5 bg-[#181818] rounded-2xl ${classes}`}>
                    {style}{children}
                </div>
            </div>
        </div>
    );
};

export default GlowingCard;


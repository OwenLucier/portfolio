import React from 'react'
import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type SkillsDivProps = PropsWithChildren & {
    classes?: string
}

export const SkillsDiv: React.FC<SkillsDivProps> = ({ children, classes }) => {
    return <motion.div
        className={`flex items-center justify-center ${classes}`}
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
        }}
    >
        {children}
    </motion.div>
}
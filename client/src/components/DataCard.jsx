import React from 'react'
import { motion } from 'framer-motion'

const DataCard = ({icon: Icon, title, text}) => {

  return (
    <motion.div
        className='w-full sm:w-[45%] lg:w-[30%] h-64 flex flex-col items-start md:items-center justify-start p-6 rounded-lg shadow-2xl bg-gradient-to-r from-blue-900 via-[#2D9CDB] to-[#27AE60] dark:from-blue-900 dark:via-gray-800 dark:to-blue-900'
        style={{
          backgroundSize: '200% 100%', // Ensure the background size is large enough to move
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], // Move the gradient back and forth smoothly
        }}
        transition={{
          duration: 6, // Adjust the duration to make the cycle slower and smoother
          repeat: Infinity, // Loop the animation forever
          repeatType: 'loop', // Continuous loop
          ease: 'easeInOut', // Smooth ease for transitions
        }}
    >
        <Icon size={50} className="mb-2" />
        <h2 className="text-lg sm:text-xl font-bold md:text-center">{title}</h2>
        <p className="text-sm sm:text-base md:text-center text-light mt-3">"{text}"</p>
    </motion.div>
  )
}

export default DataCard
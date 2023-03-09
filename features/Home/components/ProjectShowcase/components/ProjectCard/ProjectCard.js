import React from 'react'

import {easeOut, motion, spring} from 'framer-motion'
import { fadeIn } from '../../motion'
import Image from 'next/image'



function ProjectCard({ id, name, image, description, github, index, active, handleClick }) {
  return (
    <motion.div  variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`bg-gradient-to-t from-cyan-500/50 rounded-3xl to-blue-500/50 relative ${
      active === id ? 'md:flex-[3.5] flex-[10]' : 'md:flex-[0.5] flex-[2]'}
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}>
      <img src={image} alt={name} className="absolute w-full h-full object-contain rounded-2xl" />

      {active !== id && (
        <h3 className='font-semibold text-black sm:text-xl md:text-4xl absolute z-0 md:bottom-20 md:-rotate-90 md:origin-[0,0]' >
          {name}
        </h3>
      )}
    </motion.div>
  )
}

export default ProjectCard
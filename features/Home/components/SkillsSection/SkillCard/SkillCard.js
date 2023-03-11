import React from 'react'
import { motion } from 'framer-motion'


function SkillCard({skill, Icon, index}) {
  console.log('icon:', Icon)
  return (
    <motion.div  className='flex items-center flex-col '>
      <Icon className='rounded-3xl border border-blue-400 xs:w-16 xs:h-16 sm:w-24 sm:h-24 filter hover:scale-110 duration-200 xs:p-2 sm:p-4 '>
        

      </Icon>

      <p className='md:text-center'>{skill}</p>
    </motion.div>
  )
}

export default SkillCard
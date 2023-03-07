import React from 'react'
import ProjectCard from './components/ProjectCard'
import { motion } from 'framer-motion'




function ProjectShowcase() {
  return (
    <section name='projects' className='w-full h-11/12 bg-blue-300/10' >
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className=' max-w-screen-full w-full h-full flex flex-col items-center justify-center'>
        
        <div className='py-8'>
          <p className='xs:text-2xl md:text-4xl font-medium inline border-b-4 border-blue-400'>
            What I Have Worked On
          </p>
        </div>

      </motion.div>
      <ProjectCard/>
    </section>
  )
}

export default ProjectShowcase
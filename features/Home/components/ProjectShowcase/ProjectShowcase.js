import React, { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import { motion } from 'framer-motion'
import { projects } from './components/ProjectCard/projectConsts'
import { staggerContainer } from './motion'






function ProjectShowcase() {
  console.log('projects', projects)

  const [active, setActive] = useState('project-2')
  return (
    <section name='projects' className='w-full h-11/12 sm:p-16 bg-blue-300/10' >
      <motion.div variants={staggerContainer} initial="hidden" whileInView='show' viewport={{once: true, amount: 0.25}}  className=' max-w-screen-2xl px-5 py-10 mx-auto flex flex-col justify-center w-full h-full'>
        
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{once:true}} className="xs:pt-10 md:pt-0 ">
          <p className='xs:text-xl md:text-4xl font-medium inline border-b-4 border-blue-400'>
            What I Have Worked On
          </p>
        </motion.div>

        

        
          <motion.div className='flex mt-20 md:flex-row flex-col gap-5 min-h-[120vh]'>
            {projects.map((project, index) =><ProjectCard key={project.name} {...project} active={active} handleClick={setActive} index={index}/>)}
            

          </motion.div>

        




      </motion.div>
      
    </section>
  )
}

export default ProjectShowcase
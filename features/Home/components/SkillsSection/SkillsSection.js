import React from 'react'
import { LogosJavascript } from '@/features/common/Icons/JavascriptIcon'
import { motion } from 'framer-motion'

function SkillsSection() {
  return (
    <section name='skills' className='w-full h-11/12 bg-blue-300/10'>
        <div className='max-w-screen-2xl px-5 py-10 mx-auto flex flex-col justify-center w-full h-full'>
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{once:true}} className="xs:pt-10 md:pt-0 " >
            <p className='xs:text-xl md:text-4xl font-medium inline border-b-4 border-blue-400'>What I Have Worked With</p>

            </motion.div>

            <div>
                <div className='w-full grid grid-cols-3'>
                    <LogosJavascript/>
                    <p>Javascript</p>
                    <LogosJavascript/>
                    <p>Javascript</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default SkillsSection
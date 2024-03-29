import Image from 'next/image'
import SBU from './Logos/SBU.png'
import FSLogo from './Logos/FSLogo.png'
import { motion } from 'framer-motion';

function About() {
  return (
    <section name="about" className="w-full h-11/12 bg-blue-300/10">
        <div className="max-w-screen-xl px-5 py-10 mx-auto flex flex-col justify-center w-full h-full">
            
            <motion.div initial={{ opacity: 0, y:-50 }} whileInView={ { opacity: 1, y:0 } } transition={{ duration: 2 }} viewport={{once:true}} className="xs:pt-10 md:pt-0 ">
                <p className=" sm:text-xl md:text-4xl font-medium inline border-b-4 border-blue-400">About Me</p>
            </motion.div>
            
            <div className='flex justify-around mt-12 md:mb-12'>

                <motion.div initial={{ opacity: 0, x:-50 }} whileInView={ { opacity: 1, x:0 } } transition={{delay:2, duration: 2 }} viewport={{once:true}} class="group relative md:w-1/4 sm:w-2/4 mx-5 duration-200 hover:scale-110 ">
                    <Image className='bg-white rounded-xl sm:p-3 md:p-6'  src={SBU} alt='SBU' />
                </motion.div>

                <motion.div initial={{ opacity: 0, x:50 }} whileInView={ { opacity: 1, x:0 } } transition={{delay:2, duration: 2 }} viewport={{once:true}} class="group relative md:w-1/4 sm:w-2/4 mx-5 duration-200 hover:scale-110 ">
                    <Image className='rounded-xl'  src={FSLogo} alt='SBU' />
                </motion.div>
            </div>

            
            <motion.div initial={{ opacity: 0, y:50 }} whileInView={ { opacity: 1, y:0 } } transition={{delay:4, duration: 2 }} viewport={{once:true}} className="md:bg-blue-300/10 my-15 py-10 rounded-2xl">

            <p className="md:text-xl px-2  ">
            A technologically literate individual in various hardware and software concepts ranging from PC building to software troubleshooting. Applied these interests in technology to pursue a path in Software Engineering. 
            </p>

            <br/>

            <p className="md:text-xl px-2">
            After acquiring basic understanding of beginner programming concepts from Stony Brook University and later completing Flatiron School’s Software Engineering Program, I am now confident in Ruby on Rails and JavaScript/React based programming along with obtaining proficiency in any new stacks that are required for my personal or employed goals. My experience has equipped me with arguably the most important skill for the field of Software Engineering: how to learn independently and grow as a life-long student. 
            </p>

            </motion.div>
        </div>

    </section>
  )
}

export default About
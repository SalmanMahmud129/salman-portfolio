import Image from 'next/image';
import Profile from '../../../../public/profilepic/Profile.png';
import { ResumeIcon } from './Icons/ResumeIcon';
import socialMediaLinks from './socialMediaLinks'
import { useState } from 'react';
import { CloseIcon } from './Icons/CloseIcon';
import { motion } from 'framer-motion';
import useIsDesktop from '@/features/common/Hooks/useIstDesktop';









function HeroSection() {
  const {isDesktop} = useIsDesktop(true)

  const [showResume, setShowResume] = useState(false)

  const handleShowResume = () =>{
    setShowResume(!showResume)
  }



  return (
    <section name="home" className="w-full h-screen bg-blue-300/10">
      <motion.div  className="flex flex-col items-center justify-center h-full max-w-screen-xl px-4 mx-auto md:flex-row md:mx-auto bg-blue-600/5 ">
        <motion.div initial={{ opacity: 0, y:-50 }} animate={ { opacity: 1, y:0 } } transition={{delay: 4, duration: 2 }} className=" md:w-1/3 md:mr-5">
          <Image
            src={Profile}
            alt="me"
            className="transition duration-200 rounded-full shadow-sm shadow-blue-300 md:rounded-3xl hover:shadow-md hover:shadow-blue-300"
          />
        </motion.div>
        <motion.div   className="flex flex-col h-full sm:pt-8 md:justify-center ">
          <motion.h2 initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{duration: 2 }} className="text-4xl font-medium sm:text-center right-1 md:text-7xl md:text-left">
            Hi! My name is Salman
          </motion.h2>
          <motion.p initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{delay:2, duration: 2 }} className="sm:py-4 md:py-10 text-center text-gray-400 md:text-left">
            A{' '}
            <strong className=" text-sky-400">
              Full-Stack Software Developer
            </strong>{' '}
            ready to solve{' '}
            <strong className="text-yellow-400">complex</strong> problems with{' '}
            <strong className="text-green-400">innovative</strong> solutions
          </motion.p>

          <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{delay:4, duration: 2 }} className="flex justify-between mt-4 md:p-4 rounded-full md:bg-blue-300/10">
            <button onClick={handleShowResume} className="flex items-center p-2 text-xl font-light duration-200 cursor-pointer group rounded-xl w-30 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 hover:bg-slate-200 hover:text-black">
              My Resume <span className='group-hover:animate-bounce'><ResumeIcon height="5%" width="2rem" /></span>
            </button>
            {socialMediaLinks.map(({ Icon, url }) => (
              <a key={url} href={url}>
                <Icon className="items-center text-blue-300 duration-200 hover:scale-110 hover:text-white" height="100%" width="3rem" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      {showResume ? <ResumePopup handleShowResume={handleShowResume}/> : null }
    </section>
  );
}

export default HeroSection;

function ResumePopup({handleShowResume}){

  const [isLoading, setIsLoading] = useState(true)

  const handleLoadStatus = () =>{
    setIsLoading(false)
  }

  console.log("clicked")

  return(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl '>
      <div className='md:p-8 xs:h-3/5 xs:w-11/12 md:h-4/6 md:w-1/2 relative bg-blue-400/50 rounded-lg shadow-lg'>
        <button onClick={handleShowResume} className='absolute text-gray-400 hover:text-gray-600 top-2 right-2 sm:top-0 sm:right-0'>
          <CloseIcon height="1.5rem" width="1.5rem"/>
        </button>

        {isLoading ?
          <Loading/> : null
        }


        <iframe src="https://drive.google.com/file/d/1HWunZ_wsP4PNN2zDIEQILFo8T0R0Uoda/preview" width="100%" height="100%" allow="autoplay" onLoad={handleLoadStatus} style={{display: isLoading ? "none" : "block"}} className='min-w-fit' />
        
        <div className='mt-10'>
        <a href='https://drive.google.com/uc?export=download&id=1HWunZ_wsP4PNN2zDIEQILFo8T0R0Uoda' target='_blank' rel='noreferrer'>
        <button className="sm:hidden mx-auto md:flex items-center p-2 text-xl font-light duration-200 cursor-pointer group rounded-xl w-30 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 hover:bg-slate-200 hover:text-black">
              Download <span className='group-hover:animate-bounce'><ResumeIcon height="5%" width="2rem" /></span>
        </button>

        </a>

        </div>
        

      </div>
    </div>
    
  )
  

}


function Loading(){
  return(
    <div className='relative min-h-screen w-full flex justify-center'>
    <svg class=" w-40 h-40 animate-spin text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.75V6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M19.25 12L17.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 17.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M6.25 12L4.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
</div>

  )
}

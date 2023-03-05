import Image from 'next/image';
import Profile from '../../../../public/profilepic/Profile.png';
import { ResumeIcon } from './Icons/ResumeIcon';
import socialMediaLinks from './socialMediaLinks'
import { useState } from 'react';
import { CloseIcon } from './Icons/CloseIcon';
import { Spinner } from './Icons/Spinner';





function HeroSection() {

  const [showResume, setShowResume] = useState(false)

  const handleShowResume = () =>{
    setShowResume(!showResume)
  }

  return (
    <section name="hero" className="w-full h-screen bg-blue-300/10">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-xl px-4 mx-auto md:flex-row md:mx-auto bg-blue-600/5 ">
        <div className=" md:w-1/3 md: mr-5">
          <Image
            src={Profile}
            alt="me"
            className="transition duration-200 rounded-full shadow-sm shadow-blue-300 md:rounded-3xl hover:shadow-md hover:shadow-blue-300"
          />
        </div>
        <div className="flex flex-col h-full sm:pt-8 md:justify-center">
          <h2 className="text-4xl font-medium sm:text-center right-1 md:text-7xl md:text-left">
            Hi! My name is Salman
          </h2>
          <p className="sm:py-4 md:py-10 text-center text-gray-400 md:text-left">
            A{' '}
            <strong className=" text-sky-400">
              Full-Stack Software Developer
            </strong>{' '}
            ready to solve{' '}
            <strong className="text-yellow-400">complex</strong> problems with{' '}
            <strong className="text-green-400">innovative</strong> solutions
          </p>

          <div className="flex justify-between mt-4">
            <button onClick={handleShowResume} className="flex items-center p-2 text-xl font-light duration-200 cursor-pointer group rounded-xl w-30 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 hover:bg-slate-200 hover:text-black">
              My Resume <span className='group-hover:animate-bounce'><ResumeIcon height="5%" width="2rem" /></span>
            </button>
            {socialMediaLinks.map(({ Icon, url }) => (
              <a key={url} href={url}>
                <Icon className="items-center text-blue-300 duration-200 hover:scale-110 hover:text-white" height="100%" width="3rem" />
              </a>
            ))}
          </div>
        </div>
      </div>
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
      <div className='p-8 md:h-4/6 md:w-1/2 relative bg-blue-400/50 rounded-lg shadow-lg'>
        <button onClick={handleShowResume} className='absolute text-gray-400 hover:text-gray-600 top-2 right-2'>
          <CloseIcon height="1.5rem" width="1.5rem"/>
        </button>

        {isLoading ?
          <Loading/> : null
        }


        <iframe src="https://drive.google.com/file/d/1HWunZ_wsP4PNN2zDIEQILFo8T0R0Uoda/preview" width="100%" height="100%" allow="autoplay" onLoad={handleLoadStatus} style={{display: isLoading ? "none" : "block"}} className='min-w-fit' />

      </div>
    </div>
    
  )

}


function Loading(){
  return(
    <div className='absolute inset-0 flex items-center justify-center'>
      <svg className=" text-indigo-400" viewBox="0 0 24 24"> <Spinner/>  </svg>

    </div>

  )
}

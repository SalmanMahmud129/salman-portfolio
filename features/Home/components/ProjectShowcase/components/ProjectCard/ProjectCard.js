import React from 'react'

import {easeOut, motion, spring} from 'framer-motion'
import { fadeIn } from '../../motion'
import Image from 'next/image'
import { GitHubIcon } from '@/features/common/Icons/GithubIcon'
import { Globe } from './icons/Globe'
import { IcomoonFreeYoutube } from './icons/YoutubeLogo'



function ProjectCard({ id, name, image, description, github, index, active, handleClick, deployment, icons, demo }) {
  return (
    <motion.div  variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`bg-gradient-to-t from-cyan-500/50 rounded-3xl to-blue-500/50 relative ${
      active === id ? 'md:flex-[3.5] flex-[10]' : 'cursor-pointer hover:md:flex-[0.75] md:flex-[0.5] flex-[2]'}
    } flex items-center justify-center min-w-[100px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex `}
    onClick={() => handleClick(id)}
    >

      {active !== id ? (
        <h3 className='font-semibold text-black sm:text-xl md:text-3xl absolute z-0 md:bottom-20 md:-rotate-90 md:origin-[0,0]' >
          {name}
        </h3>
      ): 
        <>
        
          <div className='absolute xs:top-10 sm:top-10 md:top-20 text-center text-4xl'>
          <p>{name}</p>
          </div> 
          <div className='absolute flex flex-col bottom-0 bg-black/25 w-full md:h-1/6 pt-4 items-center justify-center rounded-b-3xl'>
            <p className='sm:text-sm md:text-base px-4 font-light'>
              {description}
            </p>
            <div className='xs:my-1 sm:my-2 md:mt-4 flex md:text-2xl xs:gap-3 sm:gap-5 md:gap-8  '>
              <a href={github} target='_blank' >
                <GitHubIcon className='hover:scale-110 hover:text-black duration-200 cursor-pointer'/>
              </a>

              {deployment ? <a href={deployment} target='_blank' >
                <Globe className='hover:scale-110 hover:text-black duration-200 cursor-pointer'/>
              </a> : null }

              {demo ? <a href={demo} target='_blank'>
                <IcomoonFreeYoutube className='hover:scale-110 hover:text-black duration-200 cursor-pointer'/>

              </a> : null}


              
              <div className='border-l-4 '>
              </div>

              {icons.map((Icon) =>(
                <Icon />
              ))}

              
            </div>

          </div>
        </>
        }
      
      
      <img src={image} alt={name} className={`${active !== id ? "xs:hidden" : "xs:block"} xs:p-4 sm:p-2 absolute w-full h-1/2 object-scale-down hover:scale-105 xs:object-fit rounded-2xl duration-200`} />
    </motion.div>
  )
}

export default ProjectCard
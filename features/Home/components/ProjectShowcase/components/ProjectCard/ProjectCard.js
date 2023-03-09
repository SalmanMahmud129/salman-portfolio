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
        <h3 className='font-semibold text-black sm:text-xl md:text-4xl absolute z-0 md:bottom-20 md:-rotate-90 md:origin-[0,0]' >
          {name}
        </h3>
      ): 
        <>
        
          <div className='absolute top-20 text-4xl'>
          <p>{name}</p>
          </div> 
          <div className='absolute flex flex-col bottom-0 bg-black/25 w-full h-1/6 pt-4 items-center justify-center rounded-b-3xl'>
            <p className='px-4 font-light'>
              {description}
            </p>
            <div className='mt-4 flex text-5xl gap-10 justify-center'>
              <a href={github} target='_blank' >
                <GitHubIcon className='hover:scale-110 hover:text-black duration-200 cursor-pointer'/>
              </a>

              {deployment ? <a href={deployment} target='_blank' >
                <Globe className='hover:scale-110 hover:text-black duration-200 cursor-pointer'/>
              </a> : null }

              {demo ? <a href={demo} target='_blank'>
                <IcomoonFreeYoutube className='hover:scale-110 hover:text-black duration-200 cursor-pointer'/>

              </a> : null}


              
              <div className='border-l-4'>
              </div>

              {icons.map((Icon) =>(
                <Icon />
              ))}

              
            </div>

          </div>
        </>
        }
      
      
      <img src={image} alt={name} className=" p-2 absolute w-full h-1/2 object-scale-down rounded-2xl hover:scale-110 duration-200" />
    </motion.div>
  )
}

export default ProjectCard
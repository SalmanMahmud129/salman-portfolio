import React from 'react'
import { HomeIcon } from '../../icons/HomeIcon'
import { Laptop } from '../../icons/Laptop'
import { SkillList } from '../../icons/List'
import { MessageIcon } from '../../icons/Message'
import { PersonIcon } from '../../icons/Person'

function Mobile() {
  const size="5rem"
  return (
    <>
    <nav className='sticky p-1 mx-auto mt-5 font-bold rounded-full shadow-sm w-fit w bottom-10 shadow-slate-400 h-15 md:hidden bg-slate-600'>


          <ul className='flex items-center justify-center flex-1 p-1 m-1 text-blue-300'>
            <li><HomeIcon height={size} width={size} className='mx-2' /></li>
            <li><PersonIcon height={size} width={size} className='mx-2' /></li>
            <li><Laptop height={size} width={size} className='mx-2'  /></li>
            <li><SkillList height={size} width={size} className='mx-2' /></li>
            <li><MessageIcon height={size} width={size} className='mx-2'  /></li>

          </ul>

        

      

    </nav>
    
    </>
  )
}

export default Mobile
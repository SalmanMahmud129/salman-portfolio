import React from 'react'
import { HomeIcon } from '../../icons/Home'
import { Laptop } from '../../icons/Laptop'
import { SkillList } from '../../icons/List'
import { MessageIcon } from '../../icons/Message'
import { PersonIcon } from '../../icons/Person'

function Mobile() {
  const size="75%"
  return (
    <>
    <nav className='sticky w-1/2 p-1 mx-auto mt-5 font-bold rounded-full shadow-sm bottom-10 shadow-slate-400 h-15 md:hidden bg-slate-600'>


          <ul className='flex items-center justify-center flex-1 p-1 text-gray-400'>
            <li><HomeIcon height={size} width={size} className='m-auto' /></li>
            <li><PersonIcon height={size} width={size} className='m-auto' /></li>
            <li><Laptop height={size} width={size} className='m-auto'  /></li>
            <li><SkillList height={size} width={size} className='m-auto' /></li>
            <li><MessageIcon height={size} width={size} className='m-auto'  /></li>

          </ul>

        

      

    </nav>
    
    </>
  )
}

export default Mobile
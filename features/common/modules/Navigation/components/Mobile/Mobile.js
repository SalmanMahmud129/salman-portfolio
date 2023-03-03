import React from 'react'
import { HomeIcon } from '../../icons/Home'
import { Laptop } from '../../icons/Laptop'
import { SkillList } from '../../icons/List'
import { MessageIcon } from '../../icons/Message'
import { PersonIcon } from '../../icons/Person'

function Mobile() {
  const size="35px"
  return (
    <>
    <nav className=' shadow-sm shadow-slate-400 sticky font-bold h-15 mt-5 w-1/2 p-4 mx-auto rounded-full md:hidden bg-slate-600'>
      <div className=' flex-initial items-center'>
        <div className='text-white flex justify-between mx-auto'>

          <HomeIcon height={size} width={size} className="mx-1"/>
          <PersonIcon height={size} width={size} className="mx-1"/>
          <Laptop height={size} width={size} className="mx-1"/>
          <SkillList height={size} width={size} className="mx-1"/>
          <MessageIcon height={size} width={size} className="mx-1"/>
        </div>

      </div>

    </nav>
    
    </>
  )
}

export default Mobile
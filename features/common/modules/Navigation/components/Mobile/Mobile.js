import React from 'react'
import { HomeIcon } from '../../icons/HomeIcon'
import { Laptop } from '../../icons/Laptop'
import { SkillList } from '../../icons/List'
import { MessageIcon } from '../../icons/Message'
import { PersonIcon } from '../../icons/Person'
import { Link } from 'react-scroll'

function Mobile() {
  const size="75%"

  const icons = [
    {
      id: 1, 
      link: 'home',
      icon: HomeIcon,
    },
    {
      id: 2,
      link: 'about',
      icon: PersonIcon,
    },
    {
      id: 3,
      link: 'portfolio',
      icon: Laptop
    },
    {
      id: 4,
      link: 'skills',
      icon: SkillList
    },
    {
      id: 5,
      link: 'contact',
      icon: MessageIcon
    }
  ]
  return (
    <>
    <nav className='sticky w-4/5 p-1 mx-auto mt-5 font-bold rounded-full shadow-sm bottom-8 shadow-slate-400 h-15 md:hidden bg-slate-600'>


          <ul className='flex items-center justify-center flex-1 p-1 text-blue-300'>
            {icons.map((Icon) => <li><Link to={Icon.link} smooth duration={500}><Icon.icon height={size} width={size} className='m-auto' /></Link></li>)}
          </ul>

        

      

    </nav>
    
    </>
  )
}

export default Mobile
import { useState, useEffect} from "react"
import { Sun } from "../../icons/Sun"
import { Moon } from "../../icons/Moon"



function Desktop() {

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'skills'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
    <div className=" hidden md:flex md:h-20 items-center text-white bg-slate-600 mx-1 my-2 p-2 rounded-lg justify-between ">
    <div>
      <h1 className="text-4xl font-light"><strong className="font-bold">Salman</strong> Mahmud </h1>
    </div>

    <ul className="flex">
      {links.map(link =>{
       return <li key={link.id} className="px-4 cursor-pointer capitalize font-medium text-blue-300 hover:scale-110 duration-200">{link.link}</li>
      })}
      

    </ul>
    </div>
    
  )
}

export default Desktop
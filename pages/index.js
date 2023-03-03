import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/features/common/modules/Navigation'
import Mobile from '@/features/common/modules/Navigation/components/Mobile'
import Desktop from '@/features/common/modules/Navigation/components/Desktop'
import { Moon } from '@/features/common/modules/Navigation/icons/Moon'
import { Sun } from '@/features/common/modules/Navigation/icons/Sun'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {

//   const [darkMode, setDarkMode] = useState(undefined)

//   const switchMode = () => {
//     setDarkMode(!darkMode)
//   }

//   useEffect(() => {
//     if(darkMode) {
//         localStorage.setItem("darkMode", "true")
//         window.document.documentElement.classList.add('dark')
//     } else if (darkMode === false){
//         localStorage.setItem("darkMode", "false")
//         window.document.documentElement.classList.remove('dark')
//     } else{
//         setDarkMode(localStorage.getItem("darkMode") === "true")
//     }
// }, [darkMode])


  return (
  
  <div>
    {/* <div>
    {!darkMode ? (
        <Moon width="40px" height="40px" onClick={switchMode}/> ) : (
        <Sun width="40px" height="40px" onClick={switchMode}/>
        ) 
      }

    </div> */}

    <Navigation />
  
  
  </div>
  )
}

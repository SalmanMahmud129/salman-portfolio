import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/features/common/modules/Navigation'
import Mobile from '@/features/common/modules/Navigation/components/Mobile'
import Desktop from '@/features/common/modules/Navigation/components/Desktop'
import { Moon } from '@/features/common/modules/Navigation/icons/Moon'
import { Sun } from '@/features/common/modules/Navigation/icons/Sun'
import { useState, useEffect } from 'react'
import useIsDesktop from '@/features/common/Hooks/useIstDesktop'
import DesktopLayout from '@/features/Layouts/DesktopLayout'
import MobileLayout from '@/features/Layouts/MobileLayout'
import HeroSection from '@/features/Home/components/HeroSection'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {

const {isDesktop} = useIsDesktop()


const CurrentLayout = isDesktop ? DesktopLayout : MobileLayout


  return (
   <CurrentLayout>
    <HeroSection/>
    CONTENT
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

   </CurrentLayout>
  
    
    
  
  
  )
}

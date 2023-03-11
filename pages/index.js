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
import About from '@/features/Home/components/AboutSection/About'
import ProjectShowcase from '@/features/Home/components/ProjectShowcase'
import SkillsSection from '@/features/Home/components/SkillsSection'
import ContactSection from '@/features/Home/components/ContactSection/ContactSection'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {

const {isDesktop} = useIsDesktop()


const CurrentLayout = isDesktop ? DesktopLayout : MobileLayout


  return (
   <CurrentLayout>
    <HeroSection/>
    <br></br>
    <br></br>
    <br></br>
    <About/>
    <br></br>
    <br></br>
    <br></br>
    <ProjectShowcase/>
    <br></br>
    <br></br>
    <br></br>
    <SkillsSection/>
    <br></br>
    <br></br>
    <br></br>
    <ContactSection/>
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

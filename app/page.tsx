"use client"

import Navbar from "@/components/common/navbar"
import LandingContent from "@/components/landing/landing-content"
import LandingHero from "@/components/landing/landing-hero"
import { useRef } from "react"

const HomePage = () => {
  const childRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div 
        className="w-full h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.90)), url(/bg-hero.jpeg)`,
          backgroundPosition: "top",
        }}
        >
        <Navbar onScroll={() => {childRef.current?.scrollIntoView({behavior: "smooth"})}}/>
        <LandingHero />
      </div>
        
      <LandingContent ref={childRef}/>
    </>
  )
}

export default HomePage

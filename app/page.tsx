import Navbar from "@/components/common/navbar"
import LandingContent from "@/components/landing/landing-content"
import LandingHero from "@/components/landing/landing-hero"

const HomePage = () => {
  return (
    <>
      <div 
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.90)), url(/bg-hero.jpeg)`,
          backgroundPosition: "top",
        }}
        >
        <Navbar />
        <LandingHero />
      </div>
        
      <LandingContent />
    </>
  )
}

export default HomePage

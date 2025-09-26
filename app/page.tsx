import LandingContent from "@/components/landing/landing-content"
import LandingHero from "@/components/landing/landing-hero"

export const metadata = {
  title: "Home",
  description: "Home Page"
}

const LandingPage = () => {
  return (
    <>
      <div 
        className="w-full absolute top-0 -z-10 h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.90)), url(/bg-hero.jpeg)`,
          backgroundPosition: "top",
        }}
        >
      </div>
      <LandingHero />
        
      <LandingContent />
    </>
  )
}

export default LandingPage

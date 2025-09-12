'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import ProductShowcase from './product-showcase'
import { ArrowRight } from 'lucide-react'
import { landingHeroAnimate } from '@/lib/animation/landing-hero.animate'

const LandingHero = () => {

  useEffect(() => {
    landingHeroAnimate()
  }, [])
  return (
    <div className='w-full md:max-w-6xl h-[80vh] mx-auto flex max-md:flex-col items-center'>
      <div className='space-y-3 p-6 flex-shrink-0 flex flex-col justify-center'>
        <p className='text-1 text-amber-400/80 italic text-lg'>Special Deals</p>
        <h2 className='text-2 text-4xl md:text-5xl text-white font-bold leading-snug'>
          Shop Smart <br /> <span className="text-3 text-amber-500">Quality Guaranteed</span>
        </h2>
        <div className='flex gap-5 my-3'>
          <Button className='bg-yellow-600 hover:bg-amber-600 font-bold w-[20vh] md:w-[30vh]'>
            Shop Now
            <ArrowRight />
          </Button>
          <Button className='border border-stone-500 hover:bg-slate-700/60 text-stone-300 font-semibold w-[20vh] md:w-[30vh]'>Purchase</Button>
        </div>
      </div>

      <ProductShowcase />
    </div>
  )
}

export default LandingHero

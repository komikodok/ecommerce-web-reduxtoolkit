'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import ProductShowcase from './product-showcase'
import { ArrowRight } from 'lucide-react'

const LandingHero = () => {

  useEffect(() => {
    gsap.registerPlugin(SplitText)

    const tl = gsap.timeline()

    const text1 = SplitText.create('.text-1')
    const text2 = SplitText.create('.text-2')
    const text3 = SplitText.create('.text-3')

    tl.fromTo(text1.elements, { autoAlpha: 0, y: -20 }, {
      autoAlpha: 1,
      y: 0,
      ease: 'sine.out'
    })
    .fromTo(text2.chars, { autoAlpha: 0, x: 20 }, {
      autoAlpha: 1,
      stagger: 0.01,
      x: 0,
      ease: 'elastic(1, 0.4)'
    })
    .fromTo(text3.chars, { y: -13 }, {
      y: 0,
      stagger: 0.03,
      ease: 'sine.inOut'
    })
  })
  return (
    <div className='w-full md:max-w-6xl h-[80vh] mx-auto flex max-md:flex-col items-center'>
      <div className='space-y-3 p-6 flex-shrink-0 flex flex-col justify-center'>
        <p className='text-1 text-amber-400/80 italic text-lg'>Special Deals</p>
        <h2 className='text-2 text-4xl md:text-5xl text-white font-bold leading-snug'>
          Shop Smart <br /> <span className="text-3 text-amber-500">Quality Guaranteed</span>
        </h2>
        <div className='flex gap-5 my-3'>
          <Button className='bg-yellow-600 hover:bg-amber-600 font-bold w-[30vh]'>
            Shop Now
            <ArrowRight />
          </Button>
          <Button className='border border-stone-500 hover:bg-slate-700/60 text-stone-300 font-semibold w-[30vh]'>Purchase</Button>
        </div>
      </div>

      <ProductShowcase />
    </div>
  )
}

export default LandingHero

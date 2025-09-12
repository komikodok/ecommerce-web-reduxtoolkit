import gsap from "gsap";
import { SplitText } from 'gsap/SplitText'


export function landingHeroAnimate() {
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
}
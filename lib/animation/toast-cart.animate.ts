import gsap from "gsap";
import { RefObject } from "react";

export function toastAnimate(toastRef: RefObject<HTMLDivElement | null>) {
    gsap.set(toastRef.current, { right: '12px', bottom: '40px' })
    
    const tl = gsap.timeline()

    tl.fromTo(toastRef.current, { x: 100 }, {
        x: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
    })
    .fromTo(toastRef.current, { autoAlpha: 1 }, {
        delay: 0.2,
        autoAlpha: 0,
        bottom: 'auto',
        right: 'auto',
        ease: 'power1'
    })
}
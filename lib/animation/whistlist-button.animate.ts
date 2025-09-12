import gsap from "gsap";
import { RefObject } from "react";


export function wishlistAnimate(isWishlist: boolean, ref: RefObject<SVGSVGElement | null>) {
    if (isWishlist && ref.current) {
        gsap.fromTo(ref.current, { scale: 0.3 }, {
            scale: 1,
            stroke: 'none',
            fill: '#3B82F6',
            ease: 'elastic'
        })
    } else {
        gsap.fromTo(ref.current, { scale: 0 }, {
            scale: 1,
            stroke: '#3B82F6',
            fill: 'none',
            ease: 'elastic'
        })
    } 
}
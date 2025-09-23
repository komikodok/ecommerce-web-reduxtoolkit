import gsap from "gsap";
import { RefObject } from "react";


export function wishlistButtonAnimate(isWishlist: boolean, wishlistRef: RefObject<SVGSVGElement | null>) {
    if (isWishlist && wishlistRef.current) {
        gsap.fromTo(wishlistRef.current, { scale: 0.3 }, {
            scale: 1,
            stroke: 'none',
            fill: '#3B82F6',
            ease: 'elastic'
        })
    } else {
        gsap.fromTo(wishlistRef.current, { scale: 0 }, {
            scale: 1,
            stroke: '#3B82F6',
            fill: 'none',
            ease: 'elastic'
        })
    } 
}
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

export function productCardLargeAnimate(cardRef: RefObject<HTMLLIElement | null>) {
    gsap.registerPlugin(ScrollTrigger)
    
    if (cardRef.current) {
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 90%",
                toggleActions: "play none restart none",
            },
            }
        )
    }
}
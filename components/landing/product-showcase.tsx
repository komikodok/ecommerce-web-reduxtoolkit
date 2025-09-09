import Image from "next/image"
import gsap from "gsap"
import { useEffect } from "react"


const productsShowcase = [
    { img: "/1.png", bg: "bg-pink-100" },
    { img: "/2.png", bg: "bg-green-300" },
    { img: "/3.png", bg: "bg-amber-200" },
    { img: "/4.png", bg: "bg-slate-300" },
    { img: "/5.png", bg: "bg-red-200" },
    { img: "/6.png", bg: "bg-fuchsia-200" },
]

const ProductShowcase = () => {
    const angle = 360 / productsShowcase.length

    useEffect(() => {
        gsap.fromTo('.showcase', { autoAlpha: 0, scale: 3 }, {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.1,
            ease: 'power1'
        })

        const tl = gsap.timeline({delay: 1, repeat: -1, repeatDelay: 1})
        
        tl.to('.showcase', {
            rotate: (i) => (angle/10 * i),
            ease: 'power1'
        })
        .to('.showcase', {
            transform: (i) => {
                const width = window.innerWidth
                const translate = width >= 768 ? 160 : 110
                
                return `rotate(${angle * i}deg) translate(${translate}px) rotate(90deg)`
            }
        })
        .to('.showcase-container', {
            rotation: '+=270',
            duration: 2,
            ease: 'sine'
        })
        .to('.showcase', {
            transform: `rotate(0deg) translate(0px) rotate(90deg)`,
        })
        .to('.showcase', {
            scale: window.innerWidth >= 768 ? 1.5 : 2,
            transform: (i) => {
                const rotateX = angle * i
                const translateZ = window.innerWidth >= 768 ? 260 : 200
                return `rotateX(${rotateX}deg) rotate(89deg) translateZ(${translateZ}px)`
            }
        })
        .to('.showcase-container', {
            rotateX: `+=360`,
            duration: 7,
            ease: 'sine'
        })
        .to('.showcase', {
            scale: 1,
            stagger: 0.01,
            transform: `rotateX(0deg) rotate(90deg) translateZ(0px)`,
            ease: 'sine.inOut'
        })
        
    })
    return (
        <div 
            id="product-showcase"
            className='w-full h-full flex justify-center items-center'
            style={{ perspective: 1000 }}
        >
            <ul className="showcase-container transform-3d relative w-60 h-60 rounded-full flex items-center justify-center">
                {productsShowcase.map((product, i) => (
                    <li
                        key={i}
                        className={`
                            showcase absolute w-20 h-20 md:w-32 md:h-32 rounded-md
                            ${product.bg}
                        `}
                    >
                        <Image src={product.img} fill alt="product" className="object-contain"/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductShowcase

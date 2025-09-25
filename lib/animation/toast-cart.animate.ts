import gsap from "gsap";

export function toastCartAnimate() {
    gsap.set('.toast-add-cart', { right: '12px', bottom: '12px' })
    
    const tl = gsap.timeline()

    tl.fromTo('.toast-add-cart', { scale: 0 }, {
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
    })
    .fromTo('.toast-add-cart', { autoAlpha: 1 }, {
        delay: 0.2,
        autoAlpha: 0,
        bottom: 'auto',
        right: 'auto',
        ease: 'power1'
    })
}
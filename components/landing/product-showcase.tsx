import Image from "next/image"
import { useEffect } from "react"
import { productShowcaseAnimate, productsShowcase } from "@/lib/animation/product-showcase.animate"


const ProductShowcase = () => {
    useEffect(() => {
        productShowcaseAnimate()
    }, [])
    return (
        <div 
            id="product-showcase"
            className='w-full h-full flex justify-center items-center'
            style={{ perspective: 1000 }}
        >
            <ul className="showcase-container transform-3d relative w-60 h-60 rounded-full flex items-center justify-center">
                {productsShowcase.map((product, index) => (
                    <li
                        key={index}
                        className={`
                            showcase absolute w-16 h-16 md:w-32 md:h-32 rounded-md
                            ${product.bg}
                        `}
                    >
                        <Image 
                            fill 
                            alt="product" 
                            src={product.img} 
                            className="object-contain"
                            sizes="(max-width: 768px) 80px, 128px"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductShowcase

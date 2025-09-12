"use client"

import { Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { wishlistAnimate } from "@/lib/animation/whistlist-button.animate"

const WishlistButton = () => {
    const [isWishlist, setIsWishlist] = useState<boolean>(false)
    const wishlistRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        wishlistAnimate(isWishlist, wishlistRef)
    }, [isWishlist])
    return (
        <div 
            onClick={() => setIsWishlist(!isWishlist)}
            className="absolute top-0 right-0 flex justify-center items-center"
        >
            <Heart ref={wishlistRef} className="cursor-pointer stroke-blue-500 size-5 md:size-7"></Heart>
        </div>
    )
}

export default WishlistButton

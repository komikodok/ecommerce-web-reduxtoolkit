"use client"

import { Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { wishlistButtonAnimate } from "@/lib/animation/whistlist.animate"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const svgVariants = cva(
    "cursor-pointer stroke-blue-500",
    {
        variants: {
            size: {
                sm: "size-4 md:size-5",
                md: "size-5 md:size-7",
                lg: "size-5 md:size-8"
            }
        },
        defaultVariants: {
            size: "md"
        }
    }
)

const WishlistButton = ({
    size
}: {
   size?: VariantProps<typeof svgVariants>["size"]
}) => {
    const [isWishlist, setIsWishlist] = useState<boolean>(false)
    const wishlistRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        wishlistButtonAnimate(isWishlist, wishlistRef)
    }, [isWishlist])
    return (
        <div 
            onClick={() => setIsWishlist(!isWishlist)}
            className="m-auto flex justify-center items-center"
        >
            <Heart ref={wishlistRef} className={cn(svgVariants({ size }))}></Heart>
        </div>
    )
}

export default WishlistButton

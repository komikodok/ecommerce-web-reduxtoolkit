"use client"

import { Heart } from "lucide-react"
import { useEffect, useRef } from "react"
import { wishlistButtonAnimate } from "@/lib/animation/whistlist.animate"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useDispatch, useSelector } from "react-redux"
import { addToWishlist, removeToWishlist } from "@/lib/slices/wishlist-slice"
import { IProducts } from "@/lib/types/products.type"
import { RootState } from "@/lib/store"

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
    product,
    size
}: {
    product: IProducts
    size?: VariantProps<typeof svgVariants>["size"]
}) => {
    const wishlistRef = useRef<SVGSVGElement | null>(null)

    const isWishlist = useSelector((state: RootState) => (
        state.wishlist.some(item => item.productId === product.id)
    ))
    const dispatch = useDispatch()

    useEffect(() => {
        wishlistButtonAnimate(isWishlist, wishlistRef)
    }, [isWishlist])

    function handleWishlist() {
        if (isWishlist) {
            dispatch(removeToWishlist(product.id))
        } else {
            dispatch(addToWishlist({
                productId: product.id,
                title: product.title,
                image: product.image,
                description: product.description,
                category: product.category
            }))
        }
    }

    return (
        <div 
            onClick={() => handleWishlist()}
            className="m-auto flex justify-center items-center"
        >
            <Heart ref={wishlistRef} className={cn(svgVariants({ size }))}></Heart>
        </div>
    )
}

export default WishlistButton

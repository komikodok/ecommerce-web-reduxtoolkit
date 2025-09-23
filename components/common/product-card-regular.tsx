"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import WishlistButton from "./wishlist-button"
import { ProductCardProps } from "@/lib/types/products.type"
import { useEffect, useRef } from "react"
import { ProductCardRegularAnimate } from "@/lib/animation/product-card-regular.animate"
import ProductItemModal from "./product-item-modal"

const ProductCardRegular = ({ product }: ProductCardProps) => {
  const cardRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    ProductCardRegularAnimate(cardRef)
  }, [])
    
    return (
        <li 
            ref={cardRef}
            className="w-40 h-24 md:w-72 md:h-32 border border-stone-300 rounded-md p-1"
        >
            <div className="relative flex">
                <div className="relative flex-shrink-0 w-10 h-10 md:w-16 md:h-16">
                    <Image 
                        alt="product" 
                        src={product.image} 
                        className="object-contain"
                        fill
                        sizes="(max-width: 768px) 40px, 64px"
                    />
            </div>

            <div className="w-full px-3 py-1">
                <h3 className="text-[7px] md:text-[9px] text-stone-600">{product.category}</h3>
                <h3 className="text-[8px] md:text-[10px] font-semibold line-clamp-1">{product.title}</h3>

                <div className="flex items-center mt-2">
                    <Star className="size-2 md:size-3" fill="#FFA500" strokeWidth={0} />
                    <p className="text-[7px] md:text-[9px] ml-1 font-medium text-black/70">{product.rating.rate}</p>
                    <div className="h-2 md:h-3 mx-2">
                        <Separator orientation="vertical" className="bg-black/70 w-4"/>
                    </div>
                        <p className="text-[7px] md:text-[9px] font-medium text-black/70">{product.rating.count} review</p>
                    </div>
                </div>
            
                <WishlistButton></WishlistButton>
            </div>

            <ProductItemModal product={product}></ProductItemModal>
        </li>
    )
}

export default ProductCardRegular

"use client"

import Image from "next/image"
import { ProductCardProps } from "@/lib/types/products.type"
import { Star } from "lucide-react"
import { Separator } from "../ui/separator"
import WishlistButton from "./wishlist-button"
import { useEffect, useRef } from "react"
import { productCardLargeAnimate } from "@/lib/animation/product-card-large.animate"
import ProductItemModal from "./product-item-modal"

const ProductCardLarge = ({ product }: ProductCardProps) => {
  const cardRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    productCardLargeAnimate(cardRef)
  }, [])

  return (
    <li
      ref={cardRef}
      className="relative flex flex-col w-44 h-66 md:w-72 md:h-94 row-span-3 border border-stone-300 rounded-md p-1"
    >
      <div className="relative flex-shrink-0 mx-auto w-28 h-28 md:w-48 md:h-48 rounded-md">
        <Image
          alt="product"
          src={product.image}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 112px, (max-width: 1200px) 192px, 220px"
        />
      </div>
    
      <WishlistButton />

      <div className="flex flex-col px-2 py-1 md:p-3">
        <h3 className="font-medium md:text-xs text-stone-600">{product.category}</h3>
        <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
      </div>

      <div className="flex items-center p-1 md:px-3 md:py-2">
        <Star className="size-4 md:size-5" fill="#FFA500" strokeWidth={0} />
        <p className="text-xs ml-1 font-medium text-black/70">{product.rating.rate}</p>
        <div className="h-3 md:h-4 mx-2">
          <Separator orientation="vertical" className="bg-black/70 w-4" />
        </div>
        <p className="text-xs font-medium text-black/70">{product.rating.count} review</p>
      </div>

      <ProductItemModal product={product}></ProductItemModal>
    </li>
  )
}

export default ProductCardLarge

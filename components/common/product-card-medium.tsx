"use client"

import Image from "next/image"
import { ProductCardProps } from "@/lib/types/products.type"
import { Star } from "lucide-react"
import { Separator } from "../ui/separator"
import WishlistButton from "./wishlist-button"
import { useEffect, useRef } from "react"
import { productCardLargeAnimate } from "@/lib/animation/product-card-large.animate"
import ProductItemModal from "./product-item-modal"

const ProductCardMedium = ({ product }: ProductCardProps) => {
  const cardRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    productCardLargeAnimate(cardRef)
  }, [])

  return (
    <li
      ref={cardRef}
      className="relative flex flex-col w-40 p-2 md:p-3 md:w-60 border border-stone-300 rounded-md"
    >
      <div className="relative flex-shrink-0 mx-auto w-20 h-20 md:h-30 rounded-md">
        <Image
          alt="product"
          src={product.image}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 80px, (max-width: 1200px) 120px, 160px"
        />
      </div>
      
      <WishlistButton />

      <div className="flex flex-col px-2 mt-2">
          <h3 className="font-medium text-[10px] md:text-xs text-stone-600">{product.category}</h3>
          <h3 className="font-semibold text-xs line-clamp-2">{product.title}</h3>
      </div>

      <div className="flex items-center p-2">
        <Star className="size-3 md:size-4" fill="#FFA500" strokeWidth={0} />
        <p className="text-[10px] md:text-xs ml-1 font-medium text-black/70">{product.rating.rate}</p>
        <div className="h-2 md:h-3 mx-2">
          <Separator orientation="vertical" className="bg-black/70 w-4" />
        </div>
        <p className="text-[10px] md:text-xs font-medium text-black/70">{product.rating.count} review</p>
      </div>

      <ProductItemModal product={product}></ProductItemModal>
    </li>
  )
}

export default ProductCardMedium

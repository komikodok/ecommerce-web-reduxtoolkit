"use client"

import Image from "next/image"
import { ProductCardProps } from "@/lib/types/products.type"
import { Plus, Star } from "lucide-react"
import { Separator } from "../ui/separator"
import WishlistButton from "./wishlist-button"
import { useEffect, useRef } from "react"
import { productCardLargeAnimate } from "@/lib/animation/product-card-large.animate"

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
      <div className="relative flex-shrink-0 w-full h-20 md:h-30 rounded-md">
        <Image
          alt="product"
          src={product.image}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 160px, (max-width: 1200px) 120px, 120px"
        />
        <WishlistButton />
      </div>

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

      <div
        className="relative group cursor-pointer flex justify-center items-center mx-auto w-36 md:w-56 h-6 md:h-8 border border-stone-400 rounded-full"
        onClick={() => {}}
      >
        <div className="overlay absolute z-0 left-0 w-0 h-full group-hover:w-full group-active:w-full bg-blue-900 rounded-full transition-all md:duration-300"></div>
        <div className="absolute right-0 w-8 h-8 flex justify-center items-center rounded-full ring-3 ring-white bg-blue-900">
          <Plus className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-blue-950 group-hover:text-white group-active:text-white text-xs sm:text-sm font-bold z-20 transition-all md:duration-300">
          ${product.price}
        </h2>
      </div>
    </li>
  )
}

export default ProductCardMedium

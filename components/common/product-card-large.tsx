"use client"

import Image from "next/image"
import { ProductCardProps } from "@/lib/types/products.type"
import { Plus, Star } from "lucide-react"
import { Separator } from "../ui/separator"
import WishlistButton from "./wishlist-button"
import { useEffect, useRef } from "react"
import { productCardLargeAnimate } from "@/lib/animation/product-card-large.animate"

const ProductCardLarge = ({ product }: ProductCardProps) => {
  const cardRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    productCardLargeAnimate(cardRef)
  }, [])

  return (
    <li
      ref={cardRef}
      className="relative flex flex-col max-md:scale-75 w-52 h-76 md:w-72 md:h-92 row-span-3 border border-stone-300 rounded-md p-1"
    >
      <div className="relative flex-shrink-0 w-full h-42 md:h-48 rounded-md">
        <Image
          alt="product"
          src={product.image}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 208px, (max-width: 1200px) 288px, 288px"
        />
        <WishlistButton />
      </div>

      <div className="flex flex-col px-2 py-1 md:p-3">
        <h3 className="font-medium text-xs text-stone-600">{product.category}</h3>
        <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
      </div>

      <div className="flex items-center p-1 md:px-3 md:py-2">
        <Star className="size-5" fill="#FFA500" strokeWidth={0} />
        <p className="text-xs ml-1 font-medium text-black/70">{product.rating.rate}</p>
        <div className="h-4 mx-2">
          <Separator orientation="vertical" className="bg-black/70 w-4" />
        </div>
        <p className="text-xs font-medium text-black/70">{product.rating.count} review</p>
      </div>

      <div
        className="relative group cursor-pointer flex justify-center items-center mx-auto w-40 md:w-56 h-6 md:h-8 border border-stone-400 rounded-full"
        onClick={() => console.log("click")}
      >
        <div className="overlay absolute z-0 left-0 w-0 h-full group-hover:w-full group-active:w-full bg-blue-900 rounded-full transition-all md:duration-300"></div>
        <div className="absolute right-0 w-8 h-8 flex justify-center items-center rounded-full ring-3 ring-white bg-blue-900">
          <Plus className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-blue-950 group-hover:text-white group-active:text-white text-sm font-bold z-20 transition-all md:duration-300">
          ${product.price}
        </h2>
      </div>
    </li>
  )
}

export default ProductCardLarge

"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { IProducts } from "@/lib/types/products.type"
import { BASE_API_URL } from "@/lib/base-api-url"
import Image from "next/image"
import { Star, Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import WishlistButton from "@/components/common/wishlist-button"

const FavoritProduct = () => {
  const [productsData, setProductsData] = useState<IProducts[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get<IProducts[]>(`${BASE_API_URL}/products`, {
        params: {
        sort: 'desc',
          limit: 4,
        }
      })

      setProductsData(res.data)
    }

    fetchData()
  })
  return (
    <div className="w-full max-w-lg md:max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl text-center font-semibold tracking-[-0.1em]">Favorit</h2>
      <ul className="w-full md:max-w-2xl mx-auto grid grid-cols-2 space-y-5 place-items-center">
        { productsData.map((product, index) => {
          return index <= 0 ? (
            <li key={index} className="relative flex flex-col w-52 h-76 md:w-72 md:h-92 row-span-3 border border-stone-300 rounded-md p-1">
              <div className="relative flex-shrink-0 w-full h-42 md:h-48 rounded-md">
                <Image 
                  alt="product" 
                  src={product.image} 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 208px, (max-width: 1200px) 288px, 288px" 
                />
                <WishlistButton></WishlistButton>
              </div>

              <div className="flex flex-col px-2 py-1 md:p-3">
                <h3 className="font-medium text-xs text-stone-600">{product.category}</h3>
                <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
              </div>

              <div className="flex items-center p-1 md:px-3 md:py-2">
                <Star className="size-5" fill="#FFA500" strokeWidth={0} />
                <p className="text-xs ml-1 font-medium text-black/70">{product.rating.rate}</p>
                <div className="h-4 mx-2">
                    <Separator orientation="vertical" className="bg-black/70 w-4"/> 
                </div>
                <p className="text-xs font-medium text-black/70">{product.rating.count} review</p>
              </div>

              <div className="relative group cursor-pointer flex justify-center items-center mx-auto w-40 md:w-56 h-6 md:h-8 border border-stone-400 rounded-full">
                <div className="overlay absolute z-0 left-0 w-0 h-full group-hover:w-full bg-blue-900 rounded-full transition-all duration-300"></div>
                <div className="absolute right-0 w-8 h-8 flex justify-center items-center rounded-full ring-3 ring-white bg-blue-900">
                  <Plus className="w-5 h-5 text-white"/>
                </div>
                <h2 className="text-blue-950 group-hover:text-white text-sm font-bold z-20 transition-all duration-300">${product.price}</h2>
              </div>
              
            </li>
          ) : (
            <li key={index} className="w-52 h-28 md:w-72 md:h-32 border border-stone-300 rounded-md p-1">
              <div className="relative flex">
                <div className="relative flex-shrink-0 w-15 h-15 md:w-16 md:h-16">
                  <Image 
                    alt="product" 
                    src={product.image} 
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 60px, 64px"
                  />
                </div>

                <div className="w-full px-3 py-1">
                  <h3 className="text-[9px] text-stone-600">{product.category}</h3>
                  <h3 className="text-[10px] font-semibold line-clamp-1">{product.title}</h3>

                  <div className="flex items-center mt-2">
                    <Star className="size-3" fill="#FFA500" strokeWidth={0} />
                    <p className="text-[9px] ml-1 font-medium text-black/70">{product.rating.rate}</p>
                    <div className="h-3 mx-2">
                      <Separator orientation="vertical" className="bg-black/70 w-4"/>
                    </div>
                    <p className="text-[9px] font-medium text-black/70">{product.rating.count} review</p>
                  </div>
                </div>
                
                <WishlistButton></WishlistButton>
              </div>

              <div className="relative group cursor-pointer flex justify-center items-center mx-auto my-2 w-40 md:w-48 h-6 md:h-8 border border-stone-400 rounded-full">
                <div className="overlay absolute z-0 left-0 w-0 h-full group-hover:w-full bg-blue-900 rounded-full transition-all duration-300"></div>
                <div className="absolute right-0 w-8 h-8 flex justify-center items-center rounded-full ring-3 ring-white bg-blue-900">
                  <Plus className="w-5 h-5 text-white"/>
                </div>
                <h2 className="text-blue-950 group-hover:text-white text-sm font-bold z-20 transition-all duration-300">${product.price}</h2>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FavoritProduct

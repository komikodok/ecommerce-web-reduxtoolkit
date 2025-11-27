'use client'

import { useEffect, useState } from 'react'
import { IProducts } from "@/lib/types/products.type"
import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import ProductCardLarge from "@/components/common/product-card-large"
import ProductCardRegular from "../common/product-card-regular"

const FavoritProduct = () => {
  const [productsData, setProductsData] = useState<IProducts[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_FAKESTORE_API_URL}/products`)
        if (!res.ok) throw new Error(res.statusText)
        const data: IProducts[] = await res.json()
        setProductsData(data)
      } catch (err) {
        console.error('Failed to fetch products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <p className="text-center">Loading...</p>

  const filterFavorit = productsData.filter(product => product.rating.rate >= 4.5)
  const sortedFavorit = filterFavorit.sort((a, b) => b.rating.rate - a.rating.rate)

  return (
    <div className="w-full max-w-lg md:max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl text-center font-semibold tracking-[-0.1em]">Favorit</h2>
      <ul className="w-full md:max-w-2xl mx-auto grid grid-cols-2 space-y-1 place-items-center">
        {sortedFavorit.map((product, index) =>
          index === 0 ? (
            <ProductCardLarge key={index} product={product} />
          ) : (
            <ProductCardRegular key={index} product={product} />
          )
        )}
      </ul>
    </div>
  )
}

export default FavoritProduct

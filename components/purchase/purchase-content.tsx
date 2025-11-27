'use client'

import { useEffect, useState } from "react"
import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import { IProducts } from "@/lib/types/products.type"
import FilterCategory from "@/components/purchase/filter-category"
import { PurchaseContentProps } from "@/lib/types/purchase.type"
import PurchaseListProduct from "./purchase-list-product"

const PurchaseContent = ({ searchParams, categoryParam }: PurchaseContentProps) => {
  const [productsData, setProductsData] = useState<IProducts[]>([])
  const [categoriesData, setCategoriesData] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams(searchParams as Record<string, string>)

        let productsResponse
        if (categoryParam) {
          productsResponse = await fetch(`${BASE_FAKESTORE_API_URL}/products/category/${categoryParam}?${queryParams.toString()}`)
        } else {
          productsResponse = await fetch(`${BASE_FAKESTORE_API_URL}/products?${queryParams.toString()}`)
        }

        if (productsResponse.ok) {
          const products: IProducts[] = await productsResponse.json()
          setProductsData(products)
        } else {
          console.error('Failed to fetch products:', productsResponse.statusText)
        }

        const categoriesResponse = await fetch(`${BASE_FAKESTORE_API_URL}/products/categories`)
        if (categoriesResponse.ok) {
          const categories = await categoriesResponse.json()
          setCategoriesData(categories)
        } else {
          console.error('Failed to fetch categories:', categoriesResponse.statusText)
        }

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [searchParams, categoryParam])

  if (loading) return <p className="text-center">Loading...</p>

  return (
    <div className='max-w-6xl mx-auto space-y-3 my-20'>
      <FilterCategory categories={categoriesData} />
      <PurchaseListProduct products={productsData} />
    </div>
  )
}

export default PurchaseContent

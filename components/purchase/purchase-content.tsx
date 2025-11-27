import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import { IProducts } from "@/lib/types/products.type"
import FilterCategory from "@/components/purchase/filter-category"
import { PurchaseContentProps } from "@/lib/types/purchase.type"
import PurchaseListProduct from "./purchase-list-product"
import { logger } from "@/lib/logger"

export const dynamic = 'force-dynamic'

const PurchaseContent = async ({ searchParams, categoryParam }: PurchaseContentProps) => {
    let productsData: IProducts[] = []
    let categoriesData: string[] = []

    const queryParams = new URLSearchParams(searchParams as Record<string, string>)

    try {
        if (categoryParam) {
            const responseWithCategory = await fetch(
                `${BASE_FAKESTORE_API_URL}/products/category/${categoryParam}?${queryParams.toString()}`,
                { method: 'GET', next: { revalidate: 60 } }
            )
            if (responseWithCategory.ok) {
                productsData = await responseWithCategory.json()
            } else {
                logger.error('Failed to fetch products by category:', responseWithCategory.statusText)
            }
        } else {
            const productsResponse = await fetch(
                `${BASE_FAKESTORE_API_URL}/products?${queryParams.toString()}`,
                { method: 'GET', next: { revalidate: 60 } }
            )
            if (productsResponse.ok) {
                productsData = await productsResponse.json()
            } else {
                logger.error('Failed to fetch products:', productsResponse.statusText)
            }
        }

        const categoriesResponse = await fetch(`${BASE_FAKESTORE_API_URL}/products/categories`, {
            method: 'GET',
            next: { revalidate: 60 }
        })
        if (categoriesResponse.ok) {
            categoriesData = await categoriesResponse.json()
        } else {
            logger.error('Failed to fetch categories:', categoriesResponse.statusText)
        }

    } catch (error) {
        logger.error('Fetch failed:', error)
        // fallback supaya build tidak crash
        productsData = []
        categoriesData = []
    }

    return (
        <div className='max-w-6xl mx-auto space-y-3 my-20'>          
            <FilterCategory categories={categoriesData} />
            <PurchaseListProduct products={productsData} />
        </div>
    )
}

export default PurchaseContent

import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import { IProducts } from "@/lib/types/products.type"
import FilterCategory from "@/components/purchase/filter-category"
import { PurchaseContentProps } from "@/lib/types/purchase.type"
import PurchaseListProduct from "./purchase-list-product"
import { logger } from "@/lib/logger"


const PurchaseContent = async ({ searchParams, categoryParam }: PurchaseContentProps) => {
    let productsData: IProducts[] = []
    let categoriesData = []

    const queryParams = new URLSearchParams(searchParams as Record<string, string>)
    
    if (categoryParam) {
        const responseWithCategory = await fetch(`${BASE_FAKESTORE_API_URL}/products/category/${categoryParam}?${queryParams.toString()}`, {
            method: 'GET',
            next: {
                revalidate: 60
            }
        })
        
        if (responseWithCategory.ok) {
            productsData = await responseWithCategory.json() ?? []
        }else {
            logger.error('Failed to fetch products:', responseWithCategory.statusText)
        }

    } else {
        const productsresponse = await fetch(`${BASE_FAKESTORE_API_URL}/products?${queryParams.toString()}`, {
            method: 'GET',
            next: {
                revalidate: 60
            }
        })

        if (productsresponse.ok) {
            productsData = await productsresponse.json() ?? []
        }else {
            logger.error('Failed to fetch products:', productsresponse.statusText)
        }
    }

    const categoriesProductResponse = await fetch(`${BASE_FAKESTORE_API_URL}/products/categories`, {
        method: 'GET',
        next: {
            revalidate: 60
        }
    })

    if (categoriesProductResponse.ok) {
        categoriesData = await categoriesProductResponse.json() 
    } else {
        logger.error('Failed to fetch categories:', categoriesProductResponse.statusText)
    }
        
    return (
        <div className='max-w-6xl mx-auto space-y-3 my-20'>          
            <FilterCategory categories={categoriesData}></FilterCategory>

            <PurchaseListProduct products={productsData}></PurchaseListProduct>
        </div>
    )
}

export default PurchaseContent

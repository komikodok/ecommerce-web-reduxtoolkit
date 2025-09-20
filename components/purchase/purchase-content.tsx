import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import { IProducts } from "@/lib/types/products.type"
import FilterCategory from "@/components/purchase/filter-category"
import { PurchaseContentProps } from "@/lib/types/purchase.type"
import PurchaseListProduct from "./purchase-list-product"

let productsData: IProducts[]

const PurchaseContent = async ({ searchParams, categoryParam }: PurchaseContentProps) => {
    const queryParams = new URLSearchParams(searchParams as Record<string, string>)
    
    if (categoryParam) {
        const responseWithCategory = await fetch(`${BASE_FAKESTORE_API_URL}/products/category/${categoryParam}?${queryParams.toString()}`, {
            method: 'GET',
            next: {
                revalidate: 60
            }
        })

        productsData = await responseWithCategory.json() ?? []
    } else {
        const productsresponse = await fetch(`${BASE_FAKESTORE_API_URL}/products?${queryParams.toString()}`, {
            method: 'GET',
            next: {
                revalidate: 60
            }
        })

        productsData = await productsresponse.json() ?? []
    }

    const categoriesProductResponse = await fetch(`${BASE_FAKESTORE_API_URL}/products/categories`, {
            method: 'GET',
            next: {
                revalidate: 60
            }
        })
    const categoriesData = await categoriesProductResponse.json() ?? []
        
    return (
        <div className='max-w-6xl mx-auto space-y-3 my-20'>          
            <FilterCategory categories={categoriesData}></FilterCategory>

            <PurchaseListProduct products={productsData}></PurchaseListProduct>
        </div>
    )
}

export default PurchaseContent

import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import { IProducts } from "@/lib/types/products.type"
import axios from "axios"
import FilterCategory from "@/components/purchase/filter-category"
import { PurchaseContentProps } from "@/lib/types/purchase.type"
import PurchaseListProduct from "./purchase-list-product"

let productsData: IProducts[]

const PurchaseCategoryContent = async ({ categoryParam, searchParams, categories }: PurchaseContentProps) => {
    if (categoryParam) {
        const responseWithCategory = await axios.get<IProducts[]>(`${BASE_FAKESTORE_API_URL}/products/category/${categoryParam}`, {
            params: {
                ...searchParams
            }
        })

        productsData = responseWithCategory.data ?? []
    }

    return (
        <div className='max-w-6xl mx-auto space-y-3 my-20'>          
            <FilterCategory categories={categories}></FilterCategory>

            <PurchaseListProduct products={productsData}></PurchaseListProduct>
        </div>
    )
}

export default PurchaseCategoryContent

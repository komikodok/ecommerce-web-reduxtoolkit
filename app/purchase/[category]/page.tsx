import Navbar from "@/components/common/navbar"
import PurchaseContent from "@/components/purchase/purchase-content"
import { PurchaseCategoryPageProps } from "@/lib/types/purchase.type"

const PurchaseCategoryPage = async ({ params, searchParams }: PurchaseCategoryPageProps) => {
    const { category } = await params
    const search = await searchParams

    return (
        <>
            <div className="w-full">
                <Navbar></Navbar>
            </div>
            
            <PurchaseContent categoryParam={category} searchParams={search}/>
        </>
    )
}

export default PurchaseCategoryPage

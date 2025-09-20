import Navbar from "@/components/common/navbar"
import PurchaseContent from "@/components/purchase/purchase-content"
import { PurchaseCategoryPageProps } from "@/lib/types/purchase.type"
import { Metadata } from "next"


type Params = {
    params: {
        category: string
    }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    return {
        title: decodeURIComponent(params.category),
        description: decodeURIComponent(params.category)
    }
}

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

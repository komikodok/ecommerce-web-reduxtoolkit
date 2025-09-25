import Navbar from "@/components/common/navbar"
import PurchaseContent from "@/components/purchase/purchase-content"
import { PurchaseCategoryPageProps } from "@/lib/types/purchase.type"
import { Metadata } from "next"

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const { category } = await params
  return {
    title: decodeURIComponent(category),
    description: decodeURIComponent(category),
  }
}

const PurchaseCategoryPage = async ({ params, searchParams }: PurchaseCategoryPageProps) => {
  const { category } = await params
  const search = await searchParams

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <PurchaseContent categoryParam={category} searchParams={search} />
    </>
  )
}

export default PurchaseCategoryPage

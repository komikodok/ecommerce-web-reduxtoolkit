import PurchaseContent from "@/components/purchase/purchase-content"
import { PurchasePageProps } from "@/lib/types/purchase.type"


export const metadata = {
  title: "Purchase",
  description: "Purchase"
}

const PurchasePage = async ({ searchParams }: PurchasePageProps) => {
  const search = await searchParams
  
  return (
    <>
        <PurchaseContent searchParams={search}/>
    </>
  )
}

export default PurchasePage

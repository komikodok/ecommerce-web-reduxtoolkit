import ProductCardMedium from '@/components/common/product-card-medium'
import { PurchaseListProductProps } from '@/lib/types/purchase.type'

const PurchaseListProduct = ({ products }: PurchaseListProductProps) => {
  return (
    <ul className='max-w-4xl w-full mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center'>
        {products.map((product, index) => (
            <ProductCardMedium key={index} product={product} />
        ))}
    </ul>
  )
}

export default PurchaseListProduct

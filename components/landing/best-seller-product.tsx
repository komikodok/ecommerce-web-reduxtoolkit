// import axios from "axios"
import { IProducts } from "@/lib/types/products.type"
import ProductCardLarge from "@/components/common/product-card-large"
import ProductCardRegular from "../common/product-card-regular"
import { BASE_URL } from "@/lib/base-url"

const BestSellerProduct = async () => {
  // const res = await axios.get<IProducts[]>(`${BASE_URL}/api/products`, {
  //   params: {
  //     limit: 4
  //   }
  // })

  // const productsData = res.data
  const res = await fetch(`${BASE_URL}/api/products?limit=4`, {
    method: "GET"
  })

  const productsData: IProducts[] = await res.json()

  return (
    <div className="w-full max-w-lg md:max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl text-center font-semibold tracking-[-0.1em]">Best Seller</h2>
      <ul className="w-full md:max-w-2xl mx-auto grid grid-cols-2 space-y-1 place-items-center">
        { productsData.map((product, index) => {
          return index <= 0 ? (
            <ProductCardLarge key={index} product={product}/>
          ) : (
            <ProductCardRegular key={index} product={product}/>
          )
        })}
      </ul>
    </div>
  )
}

export default BestSellerProduct

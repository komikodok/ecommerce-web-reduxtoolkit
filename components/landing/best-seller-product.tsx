import axios from "axios"
import { IProducts } from "@/lib/types/products.type"
import ProductCardLarge from "@/components/common/product-card-large"
import ProductCardRegular from "../common/product-card-regular"
import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
// import { useEffect, useState } from "react"

const BestSellerProduct = async () => {
  // const [productsData, setProductsData] = useState<IProducts[]>([]) 

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get<IProducts[]>(`${BASE_FAKESTORE_API_URL}/products`, {
  //       params: {
  //         limit: 4
  //       }
  //     })
  //     const productsData = res.data

  //     setProductsData(productsData)
  //   }

  //   fetchData()
  // }, [])
  const res = await axios.get<IProducts[]>(`${BASE_FAKESTORE_API_URL}/products`, {
    params: {
      limit: 4
    }
  })

  const productsData = res.data

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

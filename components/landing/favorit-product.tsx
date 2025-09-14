// import axios from "axios"
import { IProducts } from "@/lib/types/products.type"
import ProductCardLarge from "@/components/common/product-card-large"
import ProductCardRegular from "../common/product-card-regular"
// import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import { BASE_URL } from "@/lib/base-url"


const FavoritProduct = async () => {
  // const res = await axios.get<IProducts[]>(`${BASE_FAKESTORE_API_URL}/products`)
  const res = await fetch(`${BASE_URL}/api/products`, {
    method: "GET",
    next: {
      revalidate: 60
    }
  })

  const productsData: IProducts[] = await res.json() ?? []
  console.log("Failed fetch data", res.json())

  const filterFavorit = productsData.filter((product) => product?.rating.rate >= 4.5)
  const sortedFavorit = filterFavorit.sort((a, b) => b.rating.rate - a.rating.rate)

  return (
    <div className="w-full max-w-lg md:max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl text-center font-semibold tracking-[-0.1em]">Favorit</h2>
      <ul className="w-full md:max-w-2xl mx-auto grid grid-cols-2 space-y-1 place-items-center">
        { sortedFavorit.map((product, index) => {
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

export default FavoritProduct

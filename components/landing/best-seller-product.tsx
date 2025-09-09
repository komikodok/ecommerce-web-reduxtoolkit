const BestSellerProduct = () => {
  return (
    <div className="w-full max-w-lg md:max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl text-center font-semibold tracking-[-0.1em]">Best Seller</h2>
      <ul className="w-full md:max-w-2xl mx-auto grid grid-cols-2 space-y-5 place-items-center">
        { Array.from({ length: 4 }).map((_, index) => {
          return index <= 0 ? (
            <li key={index} className="w-52 h-72 md:w-72 md:h-90 row-span-3 border border-stone-300 rounded-md p-2">
              <div className="w-full h-42 md:h-58 rounded-md border"></div>
            </li>
          ) : (
            <li key={index} className="w-52 h-28 md:w-72 md:h-32 border"></li>
          )
        })}
      </ul>
    </div>
  )
}

export default BestSellerProduct

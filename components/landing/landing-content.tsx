import { Separator } from "@/components/ui/separator"
import BestSellerProduct from "./best-seller-product"


type LandingContentProps = {
  ref: React.RefObject<HTMLDivElement | null>
}

const LandingContent = ({ref}: LandingContentProps) => {
  return (
    <div className='w-full my-10 space-y-20'>
      <div ref={ref} className='flex gap-7 w-full max-w-lg md:max-w-5xl justify-center items-center mx-auto'>
        <h2 className="text-2xl md:text-4xl tracking-[-0.1em] text-black flex gap-3">
            <span className="font-bold text-black tracking-[-0.1em]">Why </span>
            &phi;Shop
        </h2>

        <div className="h-10">
            <Separator orientation="vertical" className="bg-black/70 w-4"/> 
        </div>

        <p className="max-w-36 text-stone-500 text-sm">Your One-Stop Online Store</p>

        <p className="max-w-xl text-stone-500 text-sm">
            Discover thousands of products with unbeatable deals, all in one place.
            From fashion to electronics, enjoy a seamless and secure shopping experience.
        </p>
      </div>

      <BestSellerProduct />
    </div>
  )
}

export default LandingContent

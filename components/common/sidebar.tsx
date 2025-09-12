"use client"

import { AlignJustify } from "lucide-react"
import { 
    ShoppingCart, 
    Heart, 
    X, 
    CircleQuestionMark, 
    HandCoins ,
    ChartBarBig
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <div 
                className="ml-auto mr-3 cursor-pointer md:hidden flex justify-center items-center"
                onClick={() => setIsOpen(true)}
            >
                <AlignJustify className="stroke-white size-8" />
            </div>

            <div 
                className={`
                    fixed w-screen h-screen z-50 flex transition-all duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="w-60 h-full bg-slate-100 p-2">
                    <div className="relative w-full space-y-2 p-3">
                        <h2 className="flex gap-2 font-semibold active:bg-stone-200 rounded-md p-1 items-center">
                            <ShoppingCart />
                            Card
                        </h2>
                        <h2 className="flex gap-2 font-semibold active:bg-stone-200 rounded-md p-1 items-center">
                            <Heart />
                            Wishlist
                        </h2>
                        <div 
                            className="absolute top-0 right-0"
                            onClick={() => setIsOpen(false)}
                        >
                            <X />
                        </div>
                    </div>

                    <Separator className="w-full h-2 bg-black/60"></Separator>

                    <div className="w-full h-full space-y-2 p-3">
                        <h2 className="font-semibold flex gap-2 p-2 active:bg-stone-200 rounded-md items-center text-lg">
                            <CircleQuestionMark strokeWidth={2}/>
                            Why &phi;Shop
                        </h2>

                        <h2 className="font-semibold flex gap-2 text-lg active:bg-stone-200 rounded-md p-2">
                            <ChartBarBig strokeWidth={2}/>
                            Category
                        </h2>

                        <h2 className="font-semibold flex gap-2 text-lg active:bg-stone-200 rounded-md p-2">
                            <HandCoins strokeWidth={2}/>
                            Purchase
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar

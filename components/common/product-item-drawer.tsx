"use client"

import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerTitle,
    DrawerHeader,
    DrawerDescription
} from "@/components/ui/drawer"
import { Plus, Minus, ShoppingCart } from "lucide-react"
import { IProducts } from "@/lib/types/products.type"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const ProductItemDrawer = ({ product }: { product: IProducts }) => {
    const [totalItem, setTotalItem] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        const priceNow = Number((product.price * totalItem).toFixed(2))
        setTotalPrice(Math.max(priceNow, product.price))

        setTotalItem(Math.max(totalItem, 1))
    }, [totalItem, product.price])

    return (
        <div className="md:hidden">
            <Drawer>
                <DrawerTrigger asChild>
                    <div className="relative mt-2 group cursor-pointer flex justify-center items-center mx-auto w-[90%] h-6 md:h-8 border border-stone-400 rounded-full">
                        <div className="overlay absolute z-0 left-0 w-0 h-full group-hover:w-full group-active:w-full bg-blue-900 rounded-full transition-all md:duration-300"></div>
                        <h2 className="text-blue-950 group-hover:text-white group-active:text-white text-xs sm:text-sm font-bold z-20 transition-all md:duration-300">
                            ${product.price}
                        </h2>
                        <div className="absolute right-0 w-8 h-8 flex justify-center items-center rounded-full ring-3 ring-white bg-blue-900">
                            <Plus className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </DrawerTrigger>

                <DrawerContent className="!rounded-none space-y-4 bg-slate-50 overflow-hidden border-none">
                    <DrawerTitle className="mx-auto sm:text-lg text-center">
                        {product.title}
                    </DrawerTitle>

                    <DrawerHeader>
                        <div className="relative w-40 md:w-60 h-40 md:h-60 mx-auto">
                            <Image 
                                alt="product"
                                src={product.image}
                                fill
                                sizes="160px"
                                className="object-contain"
                            />
                        </div>
                    </DrawerHeader>
                    
                    <DrawerDescription className="px-2 max-h-20 overflow-y-scroll text-stone-500 text-center">
                        {product.description}
                    </DrawerDescription>

                    <p className="font-bold text-blue-950 px-2 text-center">Price: ${totalPrice}</p>

                    <div className="relative w-24 h-12 mx-auto flex justify-center items-center rounded-full border border-stone-400">
                        <h2 className="mx-auto text-sm font-semibold text-blue-950">{totalItem}</h2>
                        <Button 
                            className="absolute w-10 h-10 -right-3 rounded-full flex justify-center items-center border-2 border-white bg-blue-900 active:bg-blue-950"
                            onClick={() => setTotalItem(prev => prev + 1)}
                        >
                            <Plus className="stroke-white"/>
                        </Button>
                        <Button 
                            className="absolute w-10 h-10 -left-3 rounded-full flex justify-center items-center border-2 border-stone-300 bg-gray-100 active:bg-gray-200"
                            onClick={() => setTotalItem(prev => prev - 1)}
                        >
                            <Minus className="stroke-blue-950"/>
                        </Button>
                    </div>

                    <DrawerFooter className="p-0">
                        <div className="flex w-full">
                            <Button className="w-1/2 flex gap-1 bg-[tomato] text-white rounded-none">
                                <Plus className="stroke-white" strokeWidth={2}></Plus>
                                <ShoppingCart className="stroke-white size-6" strokeWidth={2}></ShoppingCart>
                            </Button>
                            <Button className="w-1/2 bg-blue-900 text-white rounded-none">Checkout</Button>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default ProductItemDrawer

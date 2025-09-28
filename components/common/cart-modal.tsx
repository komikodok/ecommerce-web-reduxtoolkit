"use client"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogHeader,
    DialogDescription,
    DialogClose
} from "@/components/ui/dialog"
import ToastAddCart from "./toast-add-cart"
import { BaggageClaim, ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import WishlistButton from "./wishlist-button"


const CartModal = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const totalItemCart = cart.items.reduce((acc, item) => acc + item.quantity, 0)
    const totalPriceCart = cart.items.reduce((acc, item) => acc + item.price, 0)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <div className="hidden md:block cursor-pointer relative bg-amber-600 rounded-full p-2">
                        <ToastAddCart></ToastAddCart>

                        <BaggageClaim className="text-white" />
                        <div className="absolute -top-2 -right-3 rounded-full p-1 w-6 h-6 flex justify-center items-center bg-red-500">
                            <p className="text-[10px] text-white font-semibold">{totalItemCart}</p>
                        </div>
                    </div>

                    <div className="relative md:hidden flex gap-2 items-center text-sm rounded-md p-2">
                        <p className="absolute -top-2 right-0 text-red-500">+{ totalItemCart}</p>
                        <BaggageClaim className="size-4"/>
                        <p>Cart</p>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="max-w-sm bg-slate-50 overflow-hidden border-none">
                <DialogHeader>
                    <DialogTitle className="text-start flex text-md md:text-lg">
                        Cart
                    </DialogTitle>
                    <h2 className="text-end text-xs text-blue-400">Total item: {totalItemCart}</h2>
                    <Separator className="h-1 bg-slate-300"></Separator>
                </DialogHeader>

                {totalItemCart === 0 && (
                    <div>
                        <div className="flex gap-2 justify-center items-center w-full h-72 md:h-96">
                            <ShoppingCart className="stroke-stone-400"/>
                            <h2 className="text-sm text-stone-400">No items</h2>
                        </div>
                        <DialogFooter className="items-end">
                            <DialogClose className="w-fit text-stone-800 border-none cursor-pointer px-4 md:px-5 py-2 text-sm md:text-md rounded-md tracking-tight bg-stone-200 active:bg-stone-300">
                                Close
                            </DialogClose>
                        </DialogFooter>
                    </div>
                )}

                {totalItemCart > 0 && (
                    <div>
                        <ScrollArea>
                            <ul className="w-full border max-h-56 md:max-h-76">
                                {cart.items.map((item) => (
                                    <li 
                                        key={item.productId}
                                        className="w-full h-28 md:h-38 flex items-center border p-1"
                                    >
                                        <div className="w-22 h-22 md:w-32 md:h-32 flex-shrink-0 border relative">
                                            <Image 
                                                alt="product"
                                                src={item.image}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 88pxpx, 128px"
                                            />
                                        </div>
                                        <div className="border w-full h-full flex flex-col space-y-2 p-1">
                                            <h1 className="font-bold text-[9px] md:text-sm line-clamp-2">{item.title}</h1>
                                                <h2 className="text-[11px] md:text-[13px] text-stone-800 font-bold">Price: ${item.price}</h2>
                                                <h2 className="text-[9px] md:text-xs text-stone-500">Quantity: {item.quantity}</h2>
                                            <div className="flex gap-2 items-center justify-between">
                                                <div className="flex gap-2 items-center justify-center">
                                                    <WishlistButton></WishlistButton>
                                                    <h2 className="text-sm text-blue-800 font-semibold">Favorit</h2>
                                                </div>
                                                <div className="w-12 h-5 border flex">
                                                    <div className="w-4 border"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                        <div className="border h-30"></div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default CartModal

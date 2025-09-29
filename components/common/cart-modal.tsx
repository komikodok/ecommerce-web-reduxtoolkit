"use client"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogHeader,
    DialogClose
} from "@/components/ui/dialog"
import ToastAddCart from "./toast-add-cart"
import { BaggageClaim, Minus, Plus, ShoppingCart } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { addOneFromCart, removeOneFromCart } from "@/lib/slices/cart-slice"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import WishlistButton from "./wishlist-button"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"


const CartModal = () => {
    const [totalPrice, setTotalPrice] = useState<number>(0)
    
    const cart = useSelector((state: RootState) => state.cart)
    const totalItemCart = cart.items.reduce((acc, item) => acc + item.quantity, 0)
    const totalPriceCart = Number(cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2))

    const dispatch = useDispatch()

    useEffect(() => {
        const tax = 0.05
        const total = (totalPriceCart + Number((totalPriceCart * tax).toFixed(2))).toFixed(2)
        setTotalPrice(Number(total))
    }, [totalPriceCart])

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
                    <DialogTitle className="text-start flex justify-between text-md md:text-lg">
                        <ShoppingCart />
                        {totalItemCart > 1 && (
                            <Button 
                                size="sm"
                                className="cursor-pointer text-white text-xs md:text-sm flex justify-center items-center rounded-sm bg-blue-900 active:bg-blue-950"
                            >
                                Checkout
                            </Button>
                        )}
                    </DialogTitle>
                    <h2 className={`
                            text-xs text-blue-400
                            ${totalItemCart > 1 ? "text-start" : "text-end"}
                        `}
                    >
                        Total item: {totalItemCart}
                    </h2>
                </DialogHeader>

                {totalItemCart === 0 && (
                    <div>
                        <div className="flex gap-2 justify-center items-center w-full h-72 md:h-96">
                            <ShoppingCart className="stroke-stone-400"/>
                            <h2 className="text-sm text-stone-400">No items</h2>
                        </div>
                        <DialogFooter className="items-end">
                            <DialogClose className="w-fit border-none ring-0 text-stone-800 cursor-pointer px-4 md:px-5 py-2 text-sm md:text-md rounded-md tracking-tight bg-stone-200 active:bg-stone-300">
                                Close
                            </DialogClose>
                        </DialogFooter>
                    </div>
                )}

                {totalItemCart > 0 && (
                    <div>
                        <ScrollArea>
                            <ul className="w-full max-h-56 md:max-h-76">
                                {cart.items.map((item) => (
                                    <li 
                                        key={item.productId}
                                        className="w-full h-28 md:h-38 flex items-center p-1"
                                    >
                                        <div className="w-22 h-22 md:w-32 md:h-32 flex-shrink-0 relative">
                                            <Image 
                                                alt="product"
                                                src={item.image}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 88pxpx, 128px"
                                            />
                                        </div>
                                        <div className=" w-full h-full flex flex-col space-y-2 md:space-y-3 px-1">
                                            <h1 className="font-bold text-[9px] md:text-sm line-clamp-1">{item.title}</h1>
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-[11px] md:text-[13px] text-stone-800 font-bold">Price: ${item.price}</h2>
                                                <h2 className="text-[9px] md:text-xs text-stone-500">Quantity: {item.quantity}</h2>
                                            </div>

                                            <div className="flex gap-2 items-center justify-between">
                                                <div className="flex gap-2 items-center justify-center">
                                                    <p className="text-[10px] md:text-xs text-blue-900 font-semibold">Add favorit</p>
                                                    <WishlistButton size="sm"></WishlistButton>
                                                </div>
                                                <div className="w-12 h-5 flex">
                                                    <div 
                                                        className="cursor-pointer w-4 flex justify-center items-center"
                                                        onClick={() => dispatch(removeOneFromCart(item.productId))}
                                                    >
                                                        <Minus className="size-3" strokeWidth={3}/>
                                                    </div>
                                                    <p className="w-4 text-xs font-bold flex justify-center items-center">{item.quantity}</p>
                                                    <div 
                                                        className="cursor-pointer w-4 flex justify-center items-center"
                                                        onClick={() => dispatch(addOneFromCart(item.productId))}
                                                    >
                                                        <Plus className="size-3" strokeWidth={3}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                        <div className="mt-4">
                            <div className="flex justify-between items-center px-4 py-2 text-stone-800 font-semibold text-sm md:text-md">
                                <p className="text-xs md:text-sm text-blue-950">Subtotal</p>
                                <h2 className="text-xs md:text-sm text-blue-950">${totalPriceCart}</h2>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2 text-stone-800 font-semibold text-sm md:text-md">
                                <p className="text-xs md:text-sm text-blue-950">Tax 5%</p>
                                <h2 className="text-xs md:text-sm text-blue-950">${Number((totalPriceCart * 0.05).toFixed(2))}</h2>
                            </div>
                            <Separator className="h-1 bg-slate-300"></Separator>
                            <div className="flex justify-between items-center px-4 py-2 text-stone-800 font-semibold text-sm md:text-md">
                                <p className="text-xs md:text-sm text-blue-950">Total Price</p>
                                <h2 className="text-xs md:text-sm text-blue-950">${totalPrice}</h2>
                            </div>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default CartModal

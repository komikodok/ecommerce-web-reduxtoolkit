"use client"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogFooter,
    DialogHeader,
    DialogClose,
    DialogDescription
} from "@/components/ui/dialog"
import { RootState } from '@/lib/store'
import { Heart, Trash } from "lucide-react"
import { useDispatch, useSelector } from 'react-redux'
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Button } from "../ui/button"
import { removeToWishlist } from "@/lib/slices/wishlist-slice"

const WishlistModal = () => {
    const wishlist = useSelector((state: RootState) => state.wishlist)
    const totalItemWishlist = wishlist.length

    const dispatch = useDispatch()
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <div className="hidden cursor-pointer md:block relative">
                        <Heart className="size-8" strokeWidth={0} fill="#d97706" />
                        <div className="absolute -top-2 -right-3 rounded-full p-1 w-6 h-6 flex justify-center items-center bg-red-500">
                            <p className="text-[10px] text-white font-semibold">{totalItemWishlist}</p>
                        </div>
                    </div>

                    <div className="relative cursor-pointer flex md:hidden gap-2 items-center text-sm rounded-md p-2">
                        <div className="absolute -top-2 right-0">
                            <p className="text-red-500">+{totalItemWishlist}</p>
                        </div>
                        <Heart className="size-4"/>
                        <p>Wishlist</p>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="outline-none max-w-sm p-0 bg-slate-50 overflow-hidden -none">
                <DialogHeader className="p-5 bg-gradient-to-r from-blue-600 to-sky-600">
                    <DialogTitle className="text-start flex justify-between text-md md:text-lg">
                        <div className="flex gap-2 items-center">
                            <Heart className="stroke-white" fill="white"/>
                            <h2 className="text-white font-semibold">Wishlist</h2>
                        </div>
                    </DialogTitle>
                    <h2 className="text-xs text-white text-end">
                        Total item: {totalItemWishlist}
                    </h2>
                </DialogHeader>

                {totalItemWishlist === 0 && (
                    <div className="p-2">
                        <div className="flex gap-2 justify-center items-center w-full h-72 md:h-96">
                            <Heart className="stroke-stone-400"/>
                            <h2 className="text-sm text-stone-400">No items</h2>
                        </div>
                        <DialogFooter className="items-end">
                            <DialogClose className="w-fit -none ring-0 text-stone-800 cursor-pointer px-4 md:px-5 py-2 text-sm md:text-md rounded-md tracking-tight bg-stone-200 active:bg-stone-300">
                                Close
                            </DialogClose>
                        </DialogFooter>
                    </div>
                )}

                {totalItemWishlist > 0 && (
                    <ScrollArea>
                        <ul className="w-full space-y-3 max-h-[70vh] p-2">
                            {wishlist.map((item) => (
                                <li 
                                    key={item.productId}
                                    className="space-x-2 flex items-center"
                                >
                                    <div className="relative w-20 h-20 md:w-30 md:h-30 flex-shrink-0 hover:scale-105 active:scale-105 transition-all duration-500">
                                        <Image
                                            alt="wishlist-product"
                                            src={item.image}
                                            fill
                                            sizes="(max-width: 768px) 136px, 160px"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="w-full h-full flex flex-col space-y-2 ">
                                        <h1 className="text-blue-950 font-bold text-xs md:text-sm text-center">{item.title}</h1>
                                        <h3 className="text-[10px] md:text-xs w-fit p-1 rounded-md bg-gradient-to-r from-blue-900 to-blue-950 text-white">{item.category}</h3>
                                        <ScrollArea>
                                            <DialogDescription className="px-1 max-h-16 md:max-h-20 font-light  text-justify text-stone-800 text-xs md:text-sm">
                                                {item.description}
                                            </DialogDescription>
                                        </ScrollArea>
                                        <Button 
                                            className="bg-gray-100 active:bg-gray-200 cursor-pointer mr-4 ml-auto outline-none border-none"
                                            onClick={() => dispatch(removeToWishlist(item.productId))}
                                        >
                                            <Trash className="stroke-red-500" strokeWidth={2}/>
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                )}
                <DialogFooter />
            </DialogContent>
        </Dialog>
    )
}

export default WishlistModal

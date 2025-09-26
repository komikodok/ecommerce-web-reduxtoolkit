"use client"

import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import Image from "next/image"
import { toastAnimate } from "@/lib/animation/toast-cart.animate"

const ToastAddCart = () => {
    const lastAddedItem = useSelector((state: RootState) => state.cart.lastAddedItem)

    const toastRef = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        toastAnimate(toastRef)
    },[lastAddedItem])
    
    return (
        <div ref={toastRef} className="fixed z-[70] bottom-10 right-3">
            <div className="relative w-10 mx-auto h-10">
                {lastAddedItem?.image && (
                    <Image 
                    src={lastAddedItem.image}
                    alt="toast-image"
                    fill
                    sizes="40px"
                    className="object-contain"
                    />
                )}
            </div>

            {lastAddedItem?.quantity && (
                <h2 className="text-amber-500 md:text-amber-400 font-bold text-xs">Add to cart +{lastAddedItem?.quantity}</h2>
            )}
        </div>
    )
}

export default ToastAddCart

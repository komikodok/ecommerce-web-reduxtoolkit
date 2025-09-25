"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import Image from "next/image"
import { toastCartAnimate } from "@/lib/animation/toast-cart.animate"

const ToastAddCart = () => {
    const lastAddedItem = useSelector((state: RootState) => state.cart.lastAddedItem)

    useEffect(() => {
        toastCartAnimate()
    },[lastAddedItem])
    return (
        <div className="toast-add-cart fixed z-[70] bottom-3 right-3">
            <div className="relative w-10 h-10">
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
        </div>
    )
}

export default ToastAddCart

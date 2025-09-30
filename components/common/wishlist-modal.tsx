import { RootState } from '@/lib/store'
import React from 'react'
import { useSelector } from 'react-redux'

const WishlistModal = () => {
    const wishlist = useSelector((state: RootState) => state.wishlist)
    
    return (
        <div></div>
    )
}

export default WishlistModal

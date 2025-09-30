import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistItem } from "../types/wishlist.type";


const initialState: WishlistItem[] = []

const wishlishSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
            const item = state.find(item => item.productId === action.payload.productId)

            if (item) return

            state.push(action.payload)
        },
        removeToWishlist: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.productId !== action.payload)
        }
    }
})

const wishlistReducer = wishlishSlice.reducer

export default wishlistReducer

export const { addToWishlist, removeToWishlist } = wishlishSlice.actions
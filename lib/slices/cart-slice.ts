import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, CartState } from "@/lib/types/cart.type"


const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const isExistItem = state.items.find(item => item.productId === action.payload.productId)

            if (isExistItem) {
                isExistItem.quantity += action.payload.quantity
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: action.payload.quantity
                })
            }

            state.lastAddedItem = action.payload
        },
        addOneFromCart: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.productId === action.payload)
            
            if (!item) return 

            item.quantity += 1
        },
        removeOneFromCart: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.productId === action.payload)

            if (!item) return

            switch (item.quantity > 1) {
                case true:
                    item.quantity -= 1
                    break
                case false:
                    state.items.filter(item => item.productId !== action.payload)
                    break
            }
        },
        resetCart: () => initialState
    }
})

const cartReducer = cartSlice.reducer

export default cartReducer

export const { addToCart, addOneFromCart, removeOneFromCart, resetCart } = cartSlice.actions
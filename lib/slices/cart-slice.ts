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
        removeOneFromCart: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.productId === action.payload)

            if (index !== -1) {
                state.items[index].quantity -=1
            } else {
                state.items.splice(index, 1)
            }
        },
        resetCart: () => {
            return initialState
        }
    }
})

const cartReducer = cartSlice.reducer

export default cartReducer

export const { addToCart, removeOneFromCart, resetCart } = cartSlice.actions
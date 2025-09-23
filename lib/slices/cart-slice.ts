import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartState } from "@/lib/types/cart.type"


const initialState: CartState[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<CartState, "quantity">>) => {
            const isExistItem = state.find(item => item.productId === action.payload.productId)

            if (isExistItem) {
                isExistItem.quantity += 1
            } else {
                state.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        removeOneFromCart: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(item => item.productId === action.payload)

            if (index !== -1) {
                state[index].quantity -=1
            } else {
                state.splice(index, 1)
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
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import { RootState } from "../store";

interface CartState {
    cartItems: Product[];
    price: number;
}

const initialState: CartState = {
    cartItems: [],
    price: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.cartItems.push(action.payload);
            state.price += action.payload.price;
        },
        deleteFromCart:(state, action: PayloadAction<number>) => {
            const indexToRemove = action.payload;
            const removedItem = state.cartItems[indexToRemove];
            state.cartItems.splice(indexToRemove, 1);
            state.price -= removedItem?.price || 0;
        },
    },
});
export const { addToCart,deleteFromCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart.cartItems;
export const selectCartTotalPrice = (state: RootState) => state.cart.price;
export const selectCarttotalCount = (state: RootState) => state.cart.cartItems.length;
export default cartSlice.reducer;

//file names should be in camelCase

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import { RootState } from "../store";

interface UserSlice {
    cash: number;
    orders: Product[]; 
}

const initialState: UserSlice = {
    cash: 1000,
    orders: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        orderProduct: (state, action: PayloadAction<Product>) => {
            state.cash -= action.payload.price;
            state.orders.push(action.payload); 
        },
    }
});

export const { orderProduct } = userSlice.actions;
export const selectCash = (state: RootState) => state.user.cash;
export const selectOrders = (state: RootState) => state.user.orders; 
export default userSlice.reducer;

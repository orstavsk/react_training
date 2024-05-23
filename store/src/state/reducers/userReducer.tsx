
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";
import { RootState } from "../store";

interface UserSlice {
    cash: number;
    orders: Product[]; 
    isLoggedIn: boolean;

}

const initialState: UserSlice = {
    cash: 1000,
    orders: [],
    isLoggedIn: false,

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        orderProduct: (state, action: PayloadAction<Product>) => {
            state.cash -= action.payload.price;
            state.orders.push(action.payload); 
        },
        login: (state) => {
            state.isLoggedIn = true;
        }
    }
});

export const { orderProduct,login } = userSlice.actions;
export const selectCash = (state: RootState) => state.user.cash;
export const selectOrders = (state: RootState) => state.user.orders; 
export const selectIsUserLoggedIn = (state: RootState) => state.user.isLoggedIn;
export default userSlice.reducer;

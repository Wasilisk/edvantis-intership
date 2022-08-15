import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {BasketProduct, BasketState} from "./types";

export const InitialState: BasketState = {
    basketProducts: {},
    totalPrice: 0,
    totalProductCount: 0
}

export const BasketSlice = createSlice({
    name: 'basket',
    initialState: InitialState,
    reducers: {
        addProductToBasket: (state, action: PayloadAction<{
            product: BasketProduct,
            count: number
        }>) => {
            const productExist = state.basketProducts[action.payload.product.id]

            if (productExist) {
                state.basketProducts[action.payload.product.id].count++;
            } else {
                state.basketProducts[action.payload.product.id] = action.payload;
            }
            state.totalPrice += action.payload.product.price * action.payload.count;
            state.totalProductCount += action.payload.count;
        },
        setProductCount: (state, action: PayloadAction<{productId: number, count: number}>) => {
            const currentProduct = {...state.basketProducts[action.payload.productId]};
            state.basketProducts[action.payload.productId].count = action.payload.count;
            state.totalPrice += ((currentProduct.product.price * action.payload.count) - (currentProduct.product.price * currentProduct.count));
            state.totalProductCount += (action.payload.count - currentProduct.count);
        },
        removeProduct: (state, action: PayloadAction<{productId: number}>) => {
            const currentProduct = state.basketProducts[action.payload.productId];
            state.totalPrice -= (currentProduct.product.price * currentProduct.count) ;
            state.totalProductCount -= currentProduct.count;
            delete state.basketProducts[action.payload.productId];
        },
        resetBasket: (state) => {
            state.basketProducts = {};
            state.totalPrice = 0;
            state.totalProductCount = 0;
        },
    },
})

export const {addProductToBasket, setProductCount, removeProduct, resetBasket} = BasketSlice.actions
export default BasketSlice.reducer;
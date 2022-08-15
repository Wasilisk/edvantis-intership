import {RootState} from "../../index";

export const selectCountOfProducts = (state: RootState) => state.basket.totalProductCount;
export const selectTotalPrice = (state: RootState) => state.basket.totalPrice;
export const selectBasketProducts = (state: RootState) => state.basket.basketProducts;
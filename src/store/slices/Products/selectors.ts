import {RootState} from "../../index";

export const selectAllProducts = (state: RootState) => state.products.allProducts;
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;

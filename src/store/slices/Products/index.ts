import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {ProductsService} from "../../../services";
import {ProductType} from "../../../models";
import {ProductsState} from "./types";

const initialState: ProductsState = {
    allProducts: null,
    selectedProduct: null
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        try {
            const response = await ProductsService.getAllProducts();
            return response.data;
        } catch (err) {
            throw err;
        }
    }
)

export const getProductBySearchName = createAsyncThunk(
    'products/getProductBySearchName',
    async (searchName: string) => {
        try {
            const response = await ProductsService.getProductBySearchName(searchName);
            return response.data;
        } catch (err) {
            throw err;
        }
    }
)

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
            state.allProducts = action.payload;
        })
        builder.addCase(getProductBySearchName.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
            state.selectedProduct = action.payload[0];
        })
    },

})

export default ProductsSlice.reducer;
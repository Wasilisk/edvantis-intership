import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {AppService} from "../../../services";
import {LayoutType} from "../../../models";
import {AppLayoutState} from "./types";

const initialState: AppLayoutState = {
    header: null,
    footer: null,
    isLoading: false,
}

export const getAppLayout = createAsyncThunk(
    'app_layout/getAppLayout',
    async () => {
        try {
            const response = await AppService.getAppLayout()
            return response.data;
        } catch (err) {
            throw err;
        }
    }
)

export const AppLayoutSlice = createSlice({
    name: 'app_layout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAppLayout.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAppLayout.fulfilled, (state, action: PayloadAction<LayoutType>) => {
            return {...state, ...action.payload, isLoading: false};
        })
        builder.addCase(getAppLayout.rejected, (state) => {
            state.isLoading = false;
        })
    },
})

export default AppLayoutSlice.reducer
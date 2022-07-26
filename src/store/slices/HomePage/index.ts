import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {AppService} from "../../../services";
import {HomePageType} from "../../../models";
import {HomePageState} from "./types";


const initialState: HomePageState = {
    main_banner: null,
    isLoading: false,
}

export const getHomePageData = createAsyncThunk(
    'home_page/getHomePageData',
    async () => {
        try {
            const response = await AppService.getHomePageData()
            return response.data;
        } catch (err) {
            throw err;
        }
    }
)

export const HomePageSlice = createSlice({
    name: 'home_page',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomePageData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getHomePageData.fulfilled, (state, action: PayloadAction<HomePageType>) => {
            return {...state, ...action.payload, isLoading: false};
        })
        builder.addCase(getHomePageData.rejected, (state) => {
            state.isLoading = false;
        })
    },
})

export default HomePageSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import AppLayoutReducer from './slices/AppLayout'
import HomePageReducer from "./slices/HomePage";


export const store = configureStore({
    reducer: {
        app_layout: AppLayoutReducer,
        home_page: HomePageReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
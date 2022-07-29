import { configureStore } from '@reduxjs/toolkit'
import AppLayoutReducer from './slices/AppLayout'
import HomePageReducer from "./slices/HomePage";

export const rootReducer = {
    app_layout: AppLayoutReducer,
    home_page: HomePageReducer
}

export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
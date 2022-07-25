import { configureStore } from '@reduxjs/toolkit'
import AppLayoutReducer from './slices/AppLayout'

export const store = configureStore({
    reducer: {
        app_layout: AppLayoutReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
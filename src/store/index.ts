import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AppLayoutReducer from './slices/AppLayout'
import HomePageReducer from "./slices/HomePage";
import FeedbacksReducer from "./slices/Feedbacks";
import ProductsReducer from "./slices/Products";
import BasketReducer from "./slices/Basket";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
    app_layout: AppLayoutReducer,
    home_page: HomePageReducer,
    feedbacks: FeedbacksReducer,
    products: ProductsReducer,
    basket: BasketReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['basket']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
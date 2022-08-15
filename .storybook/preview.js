import React from 'react';
import {GlobalStyle} from "../src/globalStyles";
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {rootReducer} from "../src/store";
import 'react-phone-input-2/lib/style.css'

const store = configureStore({
    reducer: rootReducer
});

export const decorators = [
    (Story) => (
        <BrowserRouter>
            <Provider store={store}>
                <Story/>
                <GlobalStyle/>
            </Provider>
        </BrowserRouter>
    ),
];
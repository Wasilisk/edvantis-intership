import React, {ReactElement, ReactNode} from 'react';
import {render as rtlRender} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import HistoryWrapper from "./history-wrapper";
import {rootReducer} from "../../store";

const render = (
    ui: ReactElement,
    {
        initialState,
        store = configureStore({
            reducer: rootReducer,
            preloadedState: initialState,
        }),
        ...renderOptions
    }: any = {}
) => {
    function Wrapper({children}: { children: ReactNode }) {
        return <HistoryWrapper>
            <Provider store={store}>
                {children}
            </Provider>
        </HistoryWrapper>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react';
export {render};
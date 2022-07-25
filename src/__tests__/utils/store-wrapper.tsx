import React, {ReactElement, ReactNode} from 'react';
import {render as rtlRender} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import AppLayoutReducer from '../../store/slices/AppLayout/index'

const render = (
    ui: ReactElement,
    {
        initialState,
        store = configureStore({
            reducer: {
                app_layout: AppLayoutReducer
            },
            preloadedState: initialState,
        }),
        ...renderOptions
    }: any = {}
) => {
    function Wrapper({children}: { children: ReactNode }) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react';
export {render};
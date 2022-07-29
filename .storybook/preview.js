import React from 'react';
import {GlobalStyle} from "../src/globalStyles";
import {BrowserRouter} from "react-router-dom";

export const decorators = [
    (Story) => (
        <BrowserRouter>
            <Story />
            <GlobalStyle/>
        </BrowserRouter>
    ),
];
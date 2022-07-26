import React from 'react';
import {GlobalStyle} from "./globalStyles";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
            <GlobalStyle/>
        </>
    );
}

export default App;

import React from 'react';
import {GlobalStyle} from "./globalStyles";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
            <GlobalStyle/>
            <ToastContainer theme="colored"/>
        </>
    );
}

export default App;

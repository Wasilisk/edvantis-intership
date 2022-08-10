import React from 'react';
import {GlobalStyle} from "./globalStyles";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import 'react-phone-input-2/lib/style.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import Layout from "./components/Layout";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";


function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="shop" element={<Shop/>}/>
                    <Route path="shop/:productName" element={<Product/>}/>
                </Routes>
            </Layout>
            <GlobalStyle/>
            <ToastContainer theme="colored"/>
        </>
    );
}

export default App;

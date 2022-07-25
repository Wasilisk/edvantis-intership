import React, {useEffect} from 'react';
import Header from "./components/Header";
import {GlobalStyle} from "./globalStyles";
import {useAppDispatch} from "./hooks";
import {getAppLayout} from "./store/slices/AppLayout";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAppLayout());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header/>
            <GlobalStyle/>
        </>
    );
}

export default App;

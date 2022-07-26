import React, {useEffect} from 'react';
import {LayoutProps} from "./types";
import Header from "../Header";
import {useAppDispatch} from "../../hooks";
import {getAppLayout} from "../../store/slices/AppLayout";

const Layout = ({children}: LayoutProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAppLayout());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layout;
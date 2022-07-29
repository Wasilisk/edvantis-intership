import React, {useEffect} from 'react';
import {LayoutProps} from "./types";
import Header from "../Header";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAppLayout} from "../../store/slices/AppLayout";
import {selectHeader} from "../../store/slices/AppLayout/selectors";

const Layout = ({children}: LayoutProps) => {
    const dispatch = useAppDispatch();
    const headerInfo = useAppSelector(selectHeader);

    useEffect(() => {
        dispatch(getAppLayout());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {headerInfo && <Header {...headerInfo}/>}
            {children}
        </>
    );
};

export default Layout;
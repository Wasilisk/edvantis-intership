import React, {useEffect} from 'react';
import {LayoutProps} from "./types";
import Header from "../Header";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAppLayout} from "../../store/slices/AppLayout";
import {selectFooter, selectHeader} from "../../store/slices/AppLayout/selectors";
import Footer from "../Footer";
import {LayoutStyles} from "./styles";

const Layout = ({children}: LayoutProps) => {
    const dispatch = useAppDispatch();
    const headerInfo = useAppSelector(selectHeader);
    const footerInfo = useAppSelector(selectFooter);

    useEffect(() => {
        dispatch(getAppLayout());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <LayoutStyles>
            {headerInfo && <Header {...headerInfo}/>}
            <div className="main-content">{children}</div>
            {footerInfo && <Footer {...footerInfo}/>}
        </LayoutStyles>
    );
};

export default Layout;
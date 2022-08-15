import React, {useEffect} from 'react';
import {LayoutProps} from "./types";
import Header from "../Header";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAppLayout} from "../../store/slices/AppLayout";
import {selectFooter, selectHeader} from "../../store/slices/AppLayout/selectors";
import Footer from "../Footer";
import {LayoutStyles} from "./styles";
import BasketBadge from "../BasketBadge";
import {selectCountOfProducts} from "../../store/slices/Basket/selectors";

const Layout = ({children}: LayoutProps) => {
    const dispatch = useAppDispatch();
    const headerInfo = useAppSelector(selectHeader);
    const footerInfo = useAppSelector(selectFooter);
    const productsCount = useAppSelector(selectCountOfProducts);

    useEffect(() => {
        dispatch(getAppLayout());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <LayoutStyles>
            {headerInfo && <Header {...headerInfo}/>}
            <BasketBadge count={productsCount}/>
            <div className="main-content">{children}</div>
            {footerInfo && <Footer {...footerInfo}/>}
        </LayoutStyles>
    );
};

export default Layout;
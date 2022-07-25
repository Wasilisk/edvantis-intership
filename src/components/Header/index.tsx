import React from 'react';
import {HeaderStyles} from "./styles";
import Navigation from "./Navigation";
import Button from "../common/Button";
import {useAppSelector, useMediaQuery} from "../../hooks";
import HeaderMenu from "./HeaderMenu";
import {selectHeader, selectIsLayoutLoading} from "../../store/slices/AppLayout/selectors";
import Skeleton from "../common/Skeleton";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 1024px)");
    const headerInfo = useAppSelector(selectHeader);
    const isHeaderLoading = useAppSelector(selectIsLayoutLoading);

    return (
        <HeaderStyles>
            <div className="logo-block">
                {
                    isHeaderLoading
                        ? <Skeleton variant="rounded" height="34px" width="110px"/>
                        : headerInfo && <img src={headerInfo.logo.url} alt="Logo"/>
                }
            </div>
            {
                isMobile
                    ? <HeaderMenu isLoading={isHeaderLoading} links={headerInfo && headerInfo.navigation}/>
                    : <>
                        <Navigation isLoading={isHeaderLoading} links={headerInfo && headerInfo.navigation}/>
                        <Button variant="outlined" size="small" label="Shop Now"/>
                    </>
            }
        </HeaderStyles>
    );
};

export default Header;
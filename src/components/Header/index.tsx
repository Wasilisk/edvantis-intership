import React from 'react';
import {HeaderStyles} from "./styles";
import Navigation from "./Navigation";
import Button from "../common/Button";
import {useMediaQuery} from "../../hooks";
import HeaderMenu from "./HeaderMenu";
import {HeaderType} from "../../models";

const Header = ({logo, navigation}: HeaderType) => {
    const isMobile = useMediaQuery("(max-width: 1024px)");

    return (
        <HeaderStyles>
            <div className="logo-block">
                <img src={logo?.url} alt="Logo"/>
            </div>
            {
                isMobile
                    ? <HeaderMenu links={navigation}/>
                    : <>
                        <Navigation links={navigation}/>
                        <Button variant="outlined" size="small" label="Shop Now" onClick={() => {}}/> //ToDo add OnClick logic
                    </>
            }
        </HeaderStyles>
    );
};

export default Header;
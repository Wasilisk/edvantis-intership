import React from 'react';
import {HeaderStyles} from "./styles";
import Navigation from "./Navigation";
import Button from "../common/Button";
import {useMediaQuery} from "../../hooks";
import HeaderMenu from "./HeaderMenu";
import {HeaderType} from "../../models";
import {Link, useNavigate} from "react-router-dom";

const Header = ({logo, navigation}: HeaderType) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width: 1024px)");

    const handleClick = () => navigate("/shop");

    return (
        <HeaderStyles>
            <Link className="logo-block" to="/">
                <img src={logo?.url} alt="Logo"/>
            </Link>
            {
                isMobile
                    ? <HeaderMenu links={navigation}/>
                    : <>
                        <Navigation links={navigation}/>
                        <Button variant="outlined" size="small" label="Shop Now" onClick={handleClick}/>
                    </>
            }
        </HeaderStyles>
    );
};

export default Header;
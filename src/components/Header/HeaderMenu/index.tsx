import React, {useState} from 'react';
import MenuIcon from "../MenuButton";
import Navigation from "../Navigation";
import Button from "../../common/Button";
import { HeaderMenuStyles } from './styles';
import {HeaderMenuProps} from "./types";
import {useDisableBodyScroll} from "../../../hooks";
import {useNavigate} from "react-router-dom";

const HeaderMenu = ({links}: HeaderMenuProps) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useDisableBodyScroll(isOpen);

    const handleClick = () => navigate("/shop");

    return (
        <>
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen}/>
            <HeaderMenuStyles isOpen={isOpen} onClick={() => setIsOpen(false)}>
                <Navigation links={links}/>
                <Button variant="outlined" size="small" label="Shop Now" onClick={handleClick}/>
            </HeaderMenuStyles>
        </>
    );
};

export default HeaderMenu;
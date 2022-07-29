import React, {useState} from 'react';
import MenuIcon from "../MenuButton";
import Navigation from "../Navigation";
import Button from "../../common/Button";
import { HeaderMenuStyles } from './styles';
import {HeaderMenuProps} from "./types";
import {useDisableBodyScroll} from "../../../hooks/useDisableBodyScroll";

const HeaderMenu = ({links, isLoading}: HeaderMenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useDisableBodyScroll(isOpen);

    return (
        <>
            <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen}/>
            <HeaderMenuStyles isOpen={isOpen} onClick={() => setIsOpen(false)}>
                <Navigation isLoading={isLoading} links={links}/>
                <Button variant="outlined" size="small" label="Shop Now" onClick={() => {}}/> //ToDo add OnClick logic
            </HeaderMenuStyles>
        </>
    );
};

export default HeaderMenu;
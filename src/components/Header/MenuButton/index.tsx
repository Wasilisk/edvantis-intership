import React from 'react';
import {MenuButtonStyles } from './styles';
import {MenuButtonProps} from "./types";

const MenuButton = ({isOpen, setIsOpen}: MenuButtonProps) => {

    const onClick = () => setIsOpen(!isOpen);

    return (
        <MenuButtonStyles isOpen={isOpen} onClick={onClick}>
            <span/>
            <span/>
            <span/>
        </MenuButtonStyles>
    );
};

export default MenuButton;
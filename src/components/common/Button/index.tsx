import React from 'react';
import { ButtonStyles } from './styles';
import {ButtonProps} from "./types";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

const Button = ({label, hasArrow = false, fullWidth = false, hoverVariant = "dark", ...props}: ButtonProps) => {
    return (
        <ButtonStyles fullWidth={fullWidth} hoverVariant={hoverVariant} {...props}>
            {label}
            {
                hasArrow && <ArrowIcon/>
            }
        </ButtonStyles>
    );
};

export default Button;
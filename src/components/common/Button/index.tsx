import React from 'react';
import { ButtonStyles } from './styles';
import {ButtonProps} from "./types";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow.svg";

const Button = ({label, type="button", hasArrow = false, fullWidth = false, hoverVariant = "dark", ...props}: ButtonProps) => {
    return (
        <ButtonStyles fullWidth={fullWidth} hoverVariant={hoverVariant} type={type} {...props}>
            {label}
            {
                hasArrow && <ArrowIcon/>
            }
        </ButtonStyles>
    );
};

export default Button;
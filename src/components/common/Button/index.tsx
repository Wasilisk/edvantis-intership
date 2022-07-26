import React from 'react';
import { ButtonStyles } from './styles';
import {ButtonProps} from "./types";
import ButtonArrow from "./ButtonArrow";

const Button = ({label, hasArrow = false, fullWidth = false, hoverVariant = "dark", ...props}: ButtonProps) => {
    return (
        <ButtonStyles fullWidth={fullWidth} hoverVariant={hoverVariant} {...props}>
            {label}
            {
                hasArrow && <ButtonArrow/>
            }
        </ButtonStyles>
    );
};

export default Button;
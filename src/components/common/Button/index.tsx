import React from 'react';
import { ButtonStyles } from './styles';
import {ButtonProps} from "./types";

const Button = ({label, fullWidth = false, hoverVariant = "dark", ...props}: ButtonProps) => {
    return (
        <ButtonStyles fullWidth={fullWidth} hoverVariant={hoverVariant} {...props}>
            {label}
        </ButtonStyles>
    );
};

export default Button;
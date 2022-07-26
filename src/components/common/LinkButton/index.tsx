import {ButtonStyles} from "../Button/styles";
import ButtonArrow from "../Button/ButtonArrow";
import React from "react";
import {ButtonLinkProps} from "./types";
import { LinkButtonStyles } from "./styles";

const LinkButton = ({
                        to,
                        label,
                        hasArrow = false,
                        fullWidth = false,
                        hoverVariant = "dark",
                        ...props
                    }: ButtonLinkProps) => {
    return (
        <LinkButtonStyles to={to}>
            <ButtonStyles fullWidth={fullWidth} hoverVariant={hoverVariant} {...props}>
                {label}
                {
                    hasArrow && <ButtonArrow/>
                }
            </ButtonStyles>
        </LinkButtonStyles>
    );
};

export default LinkButton;
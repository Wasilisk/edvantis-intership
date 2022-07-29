import {ButtonStyles} from "../Button/styles";
import React from "react";
import {LinkButtonProps} from "./types";
import { LinkButtonStyles } from "./styles";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

const LinkButton = ({
                        to,
                        label,
                        hasArrow = false,
                        fullWidth = false,
                        hoverVariant = "dark",
                        ...props
                    }: LinkButtonProps) => {
    return (
        <LinkButtonStyles to={to}>
            <ButtonStyles fullWidth={fullWidth} hoverVariant={hoverVariant} {...props}>
                {label}
                {
                    hasArrow && <ArrowIcon/>
                }
            </ButtonStyles>
        </LinkButtonStyles>
    );
};

export default LinkButton;
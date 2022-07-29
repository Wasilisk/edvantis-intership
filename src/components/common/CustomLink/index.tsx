import React from 'react';
import {CustomLinkStyles} from "./styles";
import {CustomLinkProps} from "./types";
import ButtonArrow from "../Button/ButtonArrow";

const CustomLink = ({to, label}: CustomLinkProps) => {
    return (
        <CustomLinkStyles to={to}>
            {label} <ButtonArrow/>
        </CustomLinkStyles>
    );
};


export default CustomLink;
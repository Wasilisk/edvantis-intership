import React from 'react';
import {CustomLinkStyles} from "./styles";
import {CustomLinkProps} from "./types";
import ButtonArrow from "../../../assets/icons/ArrowIcon";

const CustomLink = ({to, label}: CustomLinkProps) => {
    return (
        <CustomLinkStyles to={to}>
            {label} <ButtonArrow/>
        </CustomLinkStyles>
    );
};


export default CustomLink;
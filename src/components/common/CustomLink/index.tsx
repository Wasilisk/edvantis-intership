import React from 'react';
import {CustomLinkStyles} from "./styles";
import {CustomLinkProps} from "./types";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow.svg";

const CustomLink = ({to, label}: CustomLinkProps) => {
    return (
        <CustomLinkStyles to={to}>
            {label} <ArrowIcon/>
        </CustomLinkStyles>
    );
};


export default CustomLink;
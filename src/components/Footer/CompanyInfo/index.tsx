import React from 'react';
import { CompanyInfoStyles } from './styles';
import {CompanyInfoProps} from "./types";

const CompanyInfo = ({logo, company_description}: CompanyInfoProps) => {
    return (
        <CompanyInfoStyles>
            <img src={logo.url} alt="Logo"/>
            <p>{company_description}</p>
        </CompanyInfoStyles>
    );
};

export default CompanyInfo;
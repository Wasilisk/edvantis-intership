import React from 'react';
import { FooterStyles } from './styles';
import {FooterType} from "../../models";
import CompanyInfo from "./CompanyInfo";
import FooterNavigation from "./FooterNavigation";
import SocialLinks from "./SocialLinks";
import Feedback from "./Feedback";

const Footer = ({logo, company_description, social_links, navigation, created_by}: FooterType) => {
    return (
        <FooterStyles>
            <div className="footer-content">
                <div className="footer-info">
                    <CompanyInfo
                        logo={logo}
                        company_description={company_description}
                    />
                    <FooterNavigation links={navigation.slice(0, navigation.length / 2)}/>
                    <FooterNavigation links={navigation.slice(navigation.length / 2)}/>
                    <SocialLinks social_links={social_links}/>
                    <Feedback/>
                </div>
                <div className="owner-info">
                    <p>© Created by {created_by}</p>
                    <p>All rights Reserved</p>
                </div>
            </div>
        </FooterStyles>
    );
};

export default Footer;
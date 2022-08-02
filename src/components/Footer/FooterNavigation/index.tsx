import React from 'react';
import {FooterNavigationProps} from "./types";
import {FooterNavigationStyles} from "./styles";
import {Link} from "react-router-dom";

const FooterNavigation = ({links}: FooterNavigationProps) => {
    return (
        <FooterNavigationStyles>
            {
                links.map((link, index) => <Link
                    data-testid="link"
                    key={index}
                    to={link.to}
                >
                    {link.name}
                </Link>)
            }
        </FooterNavigationStyles>
    );
};

export default FooterNavigation;
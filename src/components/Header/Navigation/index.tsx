import React from 'react';
import {NavigationStyles} from "./styles";
import {Link} from "react-router-dom";
import {NavigationProps} from "./types";

const Navigation = ({links}: NavigationProps) => {
    return (
        <NavigationStyles>
            {
                links.map((link, index) => <li
                    key={index}
                >
                    <Link to={link.to}>{link.name}</Link>
                </li>)
            }
        </NavigationStyles>
    );
};

export default Navigation;
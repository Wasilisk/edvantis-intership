import React from 'react';
import {NavigationStyles} from "./styles";
import {NavigationProps} from "./types";
import {Link} from "react-router-dom";

const Navigation = ({links, isLoading}: NavigationProps) => {
    return (
        <NavigationStyles>
            {
                !isLoading && links && links.map((link, index) => <li
                        key={index}
                    >
                        <Link to={link.to}>{link.name}</Link>
                    </li>)
            }
        </NavigationStyles>
    );
};

export default Navigation;
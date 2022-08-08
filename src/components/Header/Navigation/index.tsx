import React from 'react';
import {NavigationStyles} from "./styles";
import {NavigationProps} from "./types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Link} from "react-scroll";

const Navigation = ({links}: NavigationProps) => {
    return (
        <NavigationStyles>
            {
                links.map((link, index) => <li
                    key={index}
                >
                    <Link to={link.to} smooth>{link.name}</Link>
                </li>)
            }
        </NavigationStyles>
    );
};

export default Navigation;
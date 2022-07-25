import React from 'react';
import {NavigationStyles} from "./styles";
import {NavigationProps} from "./types";

const Navigation = ({links, isLoading}: NavigationProps) => {
    return (
        <NavigationStyles>
            {
                !isLoading && links && links.map((link, index) => <li
                        key={index}
                    >
                        <a href={link.to}>{link.name}</a>
                    </li>)
            }
        </NavigationStyles>
    );
};

export default Navigation;
import React from 'react';
import { TabStyles } from './styles';
import {TabProps} from "./types";

const Tab = ({label, ...props}: TabProps) => {

    return (
        <TabStyles {...props}>
            <span>{label}</span>
        </TabStyles>
    );
};

export default Tab;
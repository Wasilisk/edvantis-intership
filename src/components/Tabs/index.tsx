import React from 'react';
import {TabsStyles} from './styles';
import {TabsProps} from "./types";

const Tabs = ({children}: TabsProps) => {

    return (
        <TabsStyles>
            <div className="tabs" data-testid="tabs">
                {children}
            </div>
        </TabsStyles>
    )
};

export default Tabs;
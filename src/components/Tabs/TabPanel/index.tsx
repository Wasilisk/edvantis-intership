import React from 'react';
import {TabPanelProps} from "./types";

const TabPanel = ({value, index, children}: TabPanelProps) => {
    return (
        <div className="tab-panel" role="tabpanel" data-testid={`tab-panel-${index}`} hidden={value !== index}>
            {value === index && children}
        </div>
    );
};

export default TabPanel;
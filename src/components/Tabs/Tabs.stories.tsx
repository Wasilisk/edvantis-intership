import {Story} from "@storybook/react";
import React, {useState} from "react";
import Tabs from "./index";
import {TabType} from "../../models/common";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const mockTabs: TabType[] = [
    {
        id: 1,
        label: "Tab 1",
        items: []
    },
    {
        id: 2,
        label: "Tab 2",
        items: []
    },
    {
        id: 3,
        label: "Tab 3",
        items: []
    },
]

export default {
    title: 'Application/Tabs',
    component: Tabs,
};

const Template: Story<{tabs: TabType[]}> = ({tabs}) => {
    const [value, setValue] = useState<number | string>(tabs[0].id);

    return (
        <>
            <Tabs>
                {
                    tabs.map(tab => {
                        const clickHandler = () => setValue(tab.id);

                        return <Tab
                            key={tab.id}
                            label={tab.label}
                            value={tab.id}
                            isActive={value === tab.id}
                            onClick={clickHandler}
                        />
                    })
                }
            </Tabs>
            {
                tabs.map(tab => <TabPanel value={value} index={tab.id}>
                    Tab Panel {tab.id}
                </TabPanel>)
            }
        </>
    )
};

export const Default = Template.bind({});
Default.args = {
    tabs: mockTabs,
};

import {Story} from "@storybook/react";
import React from "react";
import MainPopup from "./index";
import {MainPopupProps} from "./types";

export default {
    title: 'Application/Popups/MainPopup',
    component: MainPopup,
    argTypes: {
        isOpen: {
            control: "boolean"
        },
        title: {
            control: "text"
        },
    }
}

const Template: Story<MainPopupProps> = (props) => <MainPopup {...props}>Children</MainPopup>;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    title: "Main popup"
}

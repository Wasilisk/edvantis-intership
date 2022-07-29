import {CustomLinkProps} from "./types";
import {Story} from "@storybook/react";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import CustomLink from "./index";

export default {
    title: 'Application/Link',
    component: CustomLink,
};

const Template: Story<CustomLinkProps> = (props) => <CustomLink to={props.to} label={props.label}/>;

export const Default = Template.bind({});
Default.decorators = [
    (Story: Story) => {
        return (
            <BrowserRouter
            >
                <Story/>
            </BrowserRouter>
        );
    },
];
Default.args = {
    label: "Link",
    to: "/link/to"
};
import {Story} from "@storybook/react";
import React from "react";
import CustomLink from "./index";
import {CustomLinkProps} from "./types";

export default {
    title: 'Application/Links/CustomLink',
    component: CustomLink,
};

const Template: Story<CustomLinkProps> = (props) => <CustomLink {...props}/>;

export const Default = Template.bind({});
Default.args = {
    label: "Link",
    to: "/link/to"
};
import {Story} from "@storybook/react";
import React from "react";
import BasketBadge from "./index";
import {BasketBadgeProps} from "./types";

export default {
    title: 'Application/BasketBadge',
    component: BasketBadge,
};

const Template: Story<BasketBadgeProps> = (props) => <BasketBadge count={props.count}/>;

export const Default = Template.bind({});
Default.args = {
    count: 2
};
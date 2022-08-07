import {Story} from "@storybook/react";
import React from "react";
import StarRating from "./index";
import {StarRatingProps} from "./types";

export default {
    title: 'Application/StarRating',
    component: StarRating,
    argTypes: {
        readonly: {
            control: "boolean"
        },
        precision: {
            control: "number"
        },
        activeStar: {
            control: "number"
        }
    }
};

const Template: Story<StarRatingProps> = (props) => <StarRating {...props}/>;

export const Default = Template.bind({});
Default.args = {
    precision: 0.5
};

export const Readonly = Template.bind({});
Readonly.args = {
    precision: 0.5,
    readonly: true
};

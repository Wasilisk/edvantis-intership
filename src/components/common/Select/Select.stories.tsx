import {Story} from "@storybook/react";
import React from "react";
import Select from "./index";
import {SelectProps} from "./types";

const mockOptions = [
    {
        label: "Option 1",
        value: "1"
    },
    {
        label: "Option 2",
        value: "2"
    },
    {
        label: "Option 2",
        value: "2"
    }
];

export default {
    title: 'Application/Inputs/Select',
    component: Select,
    argTypes: {
        hasNoneValue: {
            control: "boolean"
        },
    }
};

const Template: Story<SelectProps> = (props) => <Select {...props}/>;

export const Default = Template.bind({});
Default.args = {
    options: mockOptions
};

export const WithNoneLabel = Template.bind({});
WithNoneLabel.args = {
    options: mockOptions,
    hasNoneValue: true
};

export const EmptySelect = Template.bind({});


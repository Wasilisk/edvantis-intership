import {Story} from "@storybook/react";
import React from "react";
import CustomLink from "./index";
import LinkButton from "./index";
import {LinkButtonProps} from "./types";

export default {
    title: 'Application/Links/LinkButton',
    component: CustomLink,
    argTypes: {
        variant: {
            options: ['filled', 'outlined'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        hoverVariant: {
            options: ['dark', 'light'],
            control: { type: 'select' },
        },
        hasArrow: {
            control: "boolean"
        },
        fullWidth: {
            control: "boolean"
        }
    }
};

const Template: Story<LinkButtonProps> = (props) => <LinkButton {...props} to="/link"/>;

export const OutlinedLinkButton = Template.bind({});
OutlinedLinkButton.args= {
    variant: "outlined",
    label: "Outlined",
    size: "medium",
    fullWidth: false
};

export const FilledLinkButton = Template.bind({});
FilledLinkButton.args= {
    variant: "filled",
    label: "Filled",
    size: "medium",
    hoverVariant: "dark",
    fullWidth: false
};

export const LinkButtonWithArrow = Template.bind({});
LinkButtonWithArrow.args= {
    variant: "filled",
    label: "Filled",
    size: "medium",
    hoverVariant: "dark",
    fullWidth: false,
    hasArrow: true
};
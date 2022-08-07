import {Story} from "@storybook/react";
import React from "react";
import Input from "../Input";

export default {
    title: 'Application/Inputs/Input',
    component: Input,
};

const Template: Story<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <Input {...props}/>;

export const TextInput = Template.bind({});
TextInput.args = {
    type: "text",
    placeholder: "Text"
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    type: "password",
    placeholder: "Password"
};

export const EmailInput = Template.bind({});
EmailInput.args = {
    type: "email",
    placeholder: "Email"
};


import {Story} from "@storybook/react";
import React from "react";
import FormField from "./index";
import {FormFieldProps} from "./types";
import Input from "../Input";

export default {
    title: 'Application/FormField',
    component: FormField,
};

const Template: Story<FormFieldProps> = (props) => <FormField {...props}>{props.children}</FormField>;

export const Default = Template.bind({});
Default.args = {
    label: "Form field",
    children: <Input placeholder="Input"/>
};

export const RequiredField = Template.bind({});
RequiredField.args = {
    label: "Form field",
    isRequired: true,
    children: <Input placeholder="Input"/>
};

export const FieldWithError = Template.bind({});
FieldWithError.args = {
    label: "Form field",
    isRequired: true,
    errors: "Error",
    children: <Input placeholder="Input"/>
};

import {Story} from "@storybook/react";
import React from "react";
import Textarea from "./index";

export default {
    title: 'Application/Inputs/Textarea',
    component: Textarea,
};

const Template: Story<React.TextareaHTMLAttributes<HTMLInputElement>> = (props) => <Textarea {...props}/>;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Textarea"
}



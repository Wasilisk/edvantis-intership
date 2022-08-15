import {Story} from "@storybook/react";
import React from "react";
import FeedbackForm from "./index";
import {FeedbackFormProps} from "./types";

export default {
    title: 'Application/Forms/FeedbackForm',
    component: FeedbackForm,
};

const Template: Story<FeedbackFormProps> = (props) => <FeedbackForm {...props}/>;

export const Default = Template.bind({});
Default.args = {
    onClose: () => {}
}
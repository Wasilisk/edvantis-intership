import {Story} from "@storybook/react";
import React from "react";
import {StyledTextType} from "../../../models/common";
import StyledText from "./index";

export default {
    title: 'Application/StyledText',
    component: StyledText,
    decorators: [
        (Story: Story) => (
            <h2>
                <Story/>
            </h2>
        )
    ]
};

const Template: Story<StyledTextType> = (props) => <StyledText {...props}/>;

export const SimpleText = Template.bind({});
SimpleText.args = {
    before_highlight: "Simple Text"
};

export const WithHighlight = Template.bind({});
WithHighlight.args = {
    before_highlight: "Text with",
    highlight: "Highlight"
};
import {Story} from "@storybook/react";
import React from "react";
import FeedbackCard from "./index";
import {FeedbackType} from "../../../models";

const mockFeedbackCards: FeedbackType = {
    id: 3,
    firstname: "Jim",
    surname: "Mockeen",
    email: "email@email.com",
    phone_number: "123456789",
    rating: 4,
    department: "SOFA - 40 Warren St, Boston",
    comment: "I not only found the perfect sofa at a reasonable price but also stylish lamps which were exactly what I wanted. Thank you, SOFA!",
    created_at: 1659871715043
}

export default {
    title: 'Application/Cards/FeedbackCard',
    component: FeedbackCard,
    decorators: [
        (Story: Story) => (
            <div style={{width: "400px"}}>
                <Story/>
            </div>
        )
    ]
};

const Template: Story<FeedbackType> = (props) => <FeedbackCard{...props}/>;

export const Default = Template.bind({});
Default.args = {
    ...mockFeedbackCards,
};

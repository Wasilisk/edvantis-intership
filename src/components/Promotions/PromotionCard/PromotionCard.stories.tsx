import PromotionCard from "./index";
import {PromotionCardProps} from "./types";
import {Story} from "@storybook/react";
import React from "react";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'Application/PromotionCard',
    component: PromotionCard,
};

const Template: Story<PromotionCardProps> = (props) => <PromotionCard content={props.content}/>;

export const Default = Template.bind({});
Default.decorators = [
    (Story: Story) => {
        return (
            <BrowserRouter
            >
                <Story/>
            </BrowserRouter>
        );
    },
];
Default.args = {
    content: {
        id: 1,
        image: {
            url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e334f7786cda400222d1564_optimized_1396?nowebp",
            alt: "Modern Collection"
        },
        title: {
            highlight: "NEW!",
            plain_text: "Modern Collection"
        },
        link: {
            name: "Learn more",
            to: "#promotions"
        }
    }
};
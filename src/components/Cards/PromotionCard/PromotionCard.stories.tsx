import PromotionCard from "./index";
import {Story} from "@storybook/react";
import React from "react";
import {PromotionType} from "../../../models";

const mockPromotion: PromotionType = {
    id: 1,
    image: {
        url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e334f7786cda400222d1564_optimized_1396?nowebp",
        alt: "Modern Collection"
    },
    title: {
        highlight: "NEW!",
        after_highlight: "Modern Collection"
    },
    link: {
        name: "Learn more",
        to: "#promotions"
    }
}

export default {
    title: 'Application/Cards/PromotionCard',
    component: PromotionCard,
};

const Template: Story<PromotionType> = (props) => <PromotionCard {...props}/>;

export const Default = Template.bind({});
Default.args = {
    ...mockPromotion
}
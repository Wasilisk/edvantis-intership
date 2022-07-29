import {ComponentMeta, Story} from "@storybook/react";
import React from "react";
import {BannerType} from "../../../models";
import MainBanner from "./index";

const mockMainBanner: BannerType = {
    title: {
        highlight: "Furniture",
        after_highlight: "for Home & Office"
    },
    description: "500+ models of cushioned furniture, lamps and accessories.",
    image: {
        url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34250c4982e30021320262_optimized_1920"
    },
    link: {
        name: "Best-selling products",
        to: "/to"
    }
}

export default {
    title: 'Application/Banners/MainBanner',
    component: MainBanner,
} as ComponentMeta<typeof MainBanner>;

const Template: Story<BannerType> = (props) => <MainBanner {...props}/>;

export const Default = Template.bind({});
Default.args = {
    ...mockMainBanner
};

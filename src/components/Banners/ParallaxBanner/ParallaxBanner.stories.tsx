import {ComponentMeta, Story} from "@storybook/react";
import React from "react";
import {BannerType} from "../../../models";
import ParallaxBanner from "./index";

const mockParallaxBanner: BannerType = {
    title: {
        before_highlight: "Spring",
        highlight: "2020",
        after_highlight: "collection"
    },
    description: "Best styles for your home or office in the most trending colors of 2020. Shop cushioned furniture, lamps, coffee tables and accessories here.",
    image: {
        url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e31adf6a948e70023c38554_optimized_1920"
    },
    link: {
        name: "OUR FAVES",
        to: "#to"
    }
}

export default {
    title: 'Application/Banners/ParallaxBanner',
    component: ParallaxBanner,
} as ComponentMeta<typeof ParallaxBanner>;

const Template: Story<BannerType> = (props) => <ParallaxBanner {...props}/>;

export const Default = Template.bind({});
Default.args = {
    ...mockParallaxBanner
};

import {ComponentMeta, Story} from "@storybook/react";
import React from "react";
import {SectionBannerType} from "../../../models";
import SectionBanner from "./index";

const mockSectionBanner: SectionBannerType = {
    banner_texture: {
        url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e341fc418c4d700210727e5"
    },
    title: {
        "highlight": "Top Collections",
        "after_highlight": "of Designer Cushioned Furniture"
    }
}

export default {
    title: 'Application/Banners/SectionBanner',
    component: SectionBanner,
} as ComponentMeta<typeof SectionBanner>;

const Template: Story<SectionBannerType> = (props) => <SectionBanner {...props}/>;

export const Default = Template.bind({});
Default.args = {
    ...mockSectionBanner
};

import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import Header from './index';
import {HeaderType} from "../../models";

const mockHeader: HeaderType = {
    logo: {
        url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e33277186cda400222c9970_optimized_259?nowebp"
    },
    navigation: [
        {
            name: "Promotions",
            to: "/link"
        },
        {
            name: "Best-selling",
            to: "/link"
        },
        {
            name: "Collection",
            to: "/link"
        },
        {
            name: "Testimonials",
            to: "/link"
        },
        {
            name: "Blog",
            to: "/link"
        },
        {
            name: "Contact us",
            to: "/link"
        }
    ],
};

export default {
    title: 'Application/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: Story<HeaderType> = (props) => <Header {...props}/>;

export const Default = Template.bind({});
Default.args = {
    ...mockHeader,
}



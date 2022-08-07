import React from 'react';
import {Story} from '@storybook/react';
import {FooterType} from "../../models";
import Footer from "./index";

const mockFooter: FooterType = {
    logo: {
        url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e332770198fdb0021a86911_optimized_266?nowebp"
    },
    company_description: "We sell designer furniture, lamps & decor across the USA. We offer the best collections by American and European designers.",
    social_links: {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        youtube: "https://www.youtube.com/"
    },
    created_by: "Vasyl Petryna",
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
    title: 'Application/Layout/Footer',
    component: Footer,
};

const Template: Story<FooterType> = (props) => <Footer {...props}/>;

export const Default = Template.bind({});
Default.args = {
    ...mockFooter,
}



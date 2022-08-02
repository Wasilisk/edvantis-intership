import {Story} from "@storybook/react";
import React from "react";
import OfferCard from "./index";
import {OfferCardProps} from "./types";

const mockOfferCards = [
    {
        id: 1,
        caption: "Bring brightness to the interior",
        title: "Get 15% off on colorful 2020 furniture collections.",
        description: "Set bright accents in your interior. \nShop the collections of selected designers.",
        image: {
            url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e31af4a633eb20022a30b7e_optimized.webp"
        },
        link: {
            name: "Learn more",
            to: "/link"
        }
    },
    {
        id: 2,
        caption: "Black & white are always in trend ",
        title: "Only black and white furniture collections. Nothing extra.",
        description: "Top models of furniture & lamps.\nFind your inspiration in our B&W collections.",
        image: {
            url: "https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e31b05f633eb20022a30d29_optimized.webp"
        },
        link: {
            name: "Learn more",
            to: "/link"
        }
    }
]

export default {
    title: 'Application/Cards/OfferCard',
    component: OfferCard,
    decorators: [
        (Story: Story) => (
            <div style={{display: "flex"}}>
                <Story/>
            </div>
        )
    ]
};

const Template: Story<OfferCardProps> = (props) =>
    <OfferCard
        {...props}
        variant={props.variant}
    />;

export const DarkVariantCard = Template.bind({});
DarkVariantCard.args = {
    ...mockOfferCards[0],
    variant: "dark"
};

export const LightVariantCard = Template.bind({});
LightVariantCard.args = {
    ...mockOfferCards[1],
    variant: "light"
};
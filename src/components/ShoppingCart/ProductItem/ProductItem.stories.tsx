import PromotionCard from "./index";
import {Story} from "@storybook/react";
import React from "react";
import ProductItem from "./index";
import {ProductItemProps} from "./types";
import {ProductType} from "../../../models";

const mockProductCard: Omit<ProductType, "additional_info"> = {
    id: 1,
    search_name: "lord-armchair-miedel-home",
    name: "Lord armchair, Miedel Home",
    price: 120.5,
    image: {
        url: "https://e-c.storage.googleapis.com/res/5f731c835a5a2667cb27290e/480"
    },
    status: "out of stock"
}

export default {
    title: 'Application/ProductListItem',
    component: ProductItem,
};

const Template: Story<ProductItemProps> = (props) => <PromotionCard {...props}/>;

export const Default = Template.bind({});
Default.args = {
    product: mockProductCard,
    count: 1
}
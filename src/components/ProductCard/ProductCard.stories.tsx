import {Story} from "@storybook/react";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import ProductCard from "./index";
import {ProductCardProps} from "./types";

const mockProductCard = {
    id: 1,
    search_name: "lord-armchair-miedel-home",
    name: "Lord armchair, Miedel Home",
    price: 120.5,
    image: {
        url: "https://e-c.storage.googleapis.com/res/5f731c835a5a2667cb27290e/480"
    }
}

export default {
    title: 'Application/ProductCard',
    component: ProductCard,
    decorators: [
        (Story: Story) => (
            <div style={{ width: "300px" }}>
                <Story />
            </div>
        ),
    ],
};

const Template: Story<ProductCardProps> = (props) => <BrowserRouter>
    <ProductCard
    content={props.content}
    buttonVariant={props.buttonVariant}
/>
</BrowserRouter>;

export const WithOutlinedButton = Template.bind({});
WithOutlinedButton.args = {
    content: mockProductCard,
    buttonVariant: "outlined"
};

export const WithFilledButton = Template.bind({});
WithFilledButton.args = {
    content: mockProductCard,
    buttonVariant: "filled"
};
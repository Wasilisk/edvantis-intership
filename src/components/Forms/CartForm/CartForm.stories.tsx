import {Story} from "@storybook/react";
import React from "react";
import CartForm from "./index";
import {CartFormProps} from "./types";

export default {
    title: 'Application/Forms/CartForm',
    component: CartForm,
};

const Template: Story<CartFormProps> = (props) => <CartForm {...props}/>;

export const Default = Template.bind({});
Default.args = {
    onClose: () => {},
    products: []
}
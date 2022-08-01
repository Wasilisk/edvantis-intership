import {TabsSectionType} from "../../models";
import {mockProductCard} from "./mock-product-card";

export const mockTabsSection: TabsSectionType = {
    title: "Title",
    description: "Description",
    tabs: [
        {
            id: 1,
            label: "Tab 1",
            items: [...Array(4)].map((_, id) => Object.assign({}, mockProductCard, { id }))
        },
        {
            id: 2,
            label: "Tab 2",
            items: [...Array(4)].map((_, id) => Object.assign({}, mockProductCard, { id }))
        },
        {
            id: 3,
            label: "Tab 3",
            items: [...Array(4)].map((_, id) => Object.assign({}, mockProductCard, { id }))
        },
    ]
}
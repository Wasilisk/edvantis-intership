import {GoodsSelectionType} from "../../models";
import {mockProductCard} from "./mock-product-card";

export const mockGoodsSelection: GoodsSelectionType = {
    title: "Section title",
    description: "Section description",
    products: [...Array(4)].map((_, index) => Object.assign({}, mockProductCard, { id: index }))
}
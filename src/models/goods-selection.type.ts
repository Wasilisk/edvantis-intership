import {ProductType} from "./product.type";

export type GoodsSelectionType = {
    id_name: string,
    title: string,
    description: string,
    products: ProductType[]
}
import {ImageType} from "./common";

export type ProductStatus = "in stock" | "out of stock";

export type ProductType = {
    id: number,
    search_name: string,
    name: string,
    price: number,
    image: ImageType,
    status: ProductStatus
    description: string
}
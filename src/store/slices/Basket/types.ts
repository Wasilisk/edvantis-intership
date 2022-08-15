import {ProductType} from "../../../models";

export type BasketProduct = Omit<ProductType, "additional_info">;

export type BasketState = {
    basketProducts: {
        [key: string]: {
            product: BasketProduct,
            count: number
        }
    };
    totalPrice: number,
    totalProductCount: number
};

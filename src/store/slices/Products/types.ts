import { ProductType} from "../../../models";

export type ProductsState = {
    allProducts: Nullable<ProductType[]>,
    selectedProduct: Nullable<ProductType>
}
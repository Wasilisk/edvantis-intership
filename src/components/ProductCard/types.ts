import {ProductType} from "../../models";
import {ButtonVariants} from "../common/Button/types";

export type ProductCardProps = {
    content: ProductType,
    buttonVariant: ButtonVariants
}
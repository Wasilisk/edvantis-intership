import {ProductType} from "../../../models";
import {ButtonVariants} from "../../common/Button/types";

export type ProductCardProps = Omit<ProductType, "additional_info"> & { buttonVariant: ButtonVariants }
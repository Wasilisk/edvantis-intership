import {OfferType} from "../../../models";

export type OfferCardVariants = "light" | "dark";

export type OfferCardStylesProps = {
    backgroundImage: string,
    variant: OfferCardVariants
}

export type OfferCardProps = OfferType & {variant: OfferCardVariants}
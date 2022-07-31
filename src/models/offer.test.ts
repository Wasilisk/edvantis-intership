import {ImageType, LinkType} from "./common";

export type OfferType = {
    id: number,
    caption: string,
    title: string,
    description: string,
    image: ImageType,
    link: LinkType
}
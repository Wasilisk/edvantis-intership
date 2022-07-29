import {LinkType, StyledTextType} from "./common";

export type PromotionType = {
    id: number,
    image: {
        url: string,
        alt: string
    },
    title: StyledTextType,
    link: LinkType
}
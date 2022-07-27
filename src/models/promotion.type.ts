import {LinkType} from "./common";

export type PromotionType = {
    id: number,
    image: {
        url: string,
        alt: string
    },
    title: {
        highlight?: string,
        plain_text: string
    }
    link: LinkType
}
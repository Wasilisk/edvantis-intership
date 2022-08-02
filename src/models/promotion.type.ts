import {ImageType, LinkType, StyledTextType} from "./common";

export type PromotionType = {
    id: number,
    image: ImageType & {alt: string },
    title: StyledTextType,
    link: LinkType
}
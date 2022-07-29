import {LinkType, StyledTextType} from "./index";

export type BannerType = {
    title: StyledTextType,
    description: string,
    image: {
        url: string
    },
    link: LinkType
}
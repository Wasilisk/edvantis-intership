import {LinkType, StyledTextType} from "./common";

export type MainBannerType = {
    title: StyledTextType,
    description: string,
    image: {
        url: string
    },
    link: LinkType
}
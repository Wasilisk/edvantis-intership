import {LinkType} from "./common";

export type MainBannerType = {
    highlight: string,
    plain_title: string,
    description: string,
    image: {
        url: string
    },
    link: LinkType
}
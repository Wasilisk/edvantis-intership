import {ImageType, LinkType} from "./common";

export type FooterType = {
    logo: ImageType,
    navigation: LinkType[],
    company_description: string,
    social_links: {
        instagram: string,
        facebook: string,
        youtube: string
    },
    created_by: string
}
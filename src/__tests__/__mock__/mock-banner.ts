import {BannerType} from "../../models";

export const mockBanner: BannerType = {
    title: {
        highlight: "Highlight text",
        after_highlight: "Simple text",
    },
    description: "Main banner description",
    image: {
        url: "main_banner.png"
    },
    link: {
        name: "Link name",
        to: "/home/link"
    }
}
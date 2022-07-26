import {MainBannerType} from "../../models";

export const mockMainBanner: MainBannerType = {
    highlight: "Highlight text",
    plain_title: "Simple text",
    description: "Main banner description",
    image: {
        url: "main_banner.png"
    },
    link: {
        name: "Link name",
        to: "/home/link"
    }
}
import {BannerType} from "./common";
import {PromotionType} from "./promotion.type";
import {SectionBannerType} from "./section-banner.type";
import {GoodsSelectionType} from "./goods-selection.type";
import {OfferType} from "./offer.test";


export type HomePageType = {
    main_banner: BannerType,
    promotions: PromotionType[],
    section_banner: SectionBannerType,
    goods_selection: GoodsSelectionType,
    parallax_banner: BannerType,
    offers: OfferType[]
}
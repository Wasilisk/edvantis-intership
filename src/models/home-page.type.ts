import {MainBannerType} from "./main-banner.type";
import {PromotionType} from "./promotion.type";
import {SectionBannerType} from "./section-banner.type";
import {GoodsSelectionType} from "./goods-selection.type";

export type HomePageType = {
    main_banner: MainBannerType,
    promotions: PromotionType[],
    section_banner: SectionBannerType,
    goods_selection: GoodsSelectionType
}
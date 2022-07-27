import {RootState} from "../../index";

export const selectMainBanner = (state: RootState) => state.home_page.main_banner;
export const selectPromotions = (state: RootState) => state.home_page.promotions;
export const selectSectionBanner = (state: RootState) => state.home_page.section_banner;
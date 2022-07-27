import {RootState} from "../../index";

export const selectMainBanner = (state: RootState) => state.home_page.main_banner;
export const selectPromotions = (state: RootState) => state.home_page.promotions;
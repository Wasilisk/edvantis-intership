import {RootState} from "../../index";

export const selectHeader = (state: RootState) => state.app_layout.header;
export const selectFooter = (state: RootState) => state.app_layout.footer;
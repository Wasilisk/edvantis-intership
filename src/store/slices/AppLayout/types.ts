import {FooterType, HeaderType} from "../../../models";

export type AppLayoutState = {
    header: Nullable<HeaderType>,
    footer: Nullable<FooterType>,
    isLoading: boolean
}
import {HeaderType} from "../../../models";

export type AppLayoutState = {
    header: Nullable<HeaderType>,
    footer: any //ToDo Add footer type
    isLoading: boolean
}
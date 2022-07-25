import {LinkType} from "../../../models/common";

export type HeaderMenuProps = {
    isLoading: boolean,
    links: Nullable<LinkType[]>
}

export type HeaderMenuStylesProps = {
    isOpen: boolean
}
import {ReactNode} from "react";

export type MainPopupProps = {
    title: string,
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}
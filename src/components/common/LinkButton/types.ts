import {ButtonProps} from "../Button/types";

export type ButtonLinkProps = Omit<ButtonProps, "onClick"> & {to: string};
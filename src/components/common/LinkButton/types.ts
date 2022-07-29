import {ButtonProps} from "../Button/types";

export type LinkButtonProps = Omit<ButtonProps, "onClick"> & {to: string};
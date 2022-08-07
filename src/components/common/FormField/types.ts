import {ReactNode} from "react";

export type FormFieldProps = {
    label: string,
    errors?: string,
    children: ReactNode,
    isRequired?: boolean
}
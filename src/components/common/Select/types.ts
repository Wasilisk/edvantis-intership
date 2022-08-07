import {OptionType} from "../../../models/common";
import React from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    options?: OptionType[],
    hasNoneValue?: boolean
}
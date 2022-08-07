import React from "react";

export type StarRatingProps = {
    activeStar: number,
    precision: number,
    readonly?: boolean
    onChange?: (stars: number) => void,
    onBlur?: React.FocusEventHandler<HTMLSelectElement> | undefined
}

export type StarBlockProps = {
    showRatingWithPrecision: boolean,
    activeState: number
};

export type StarRatingStylesProps = Pick<StarRatingProps, "readonly">
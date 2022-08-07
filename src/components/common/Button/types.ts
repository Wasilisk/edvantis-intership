export type ButtonVariants = "filled" | "outlined";
export type ButtonSizes = "small" | "medium" | "large";
export type ButtonHoverVariants = "light" | "dark";
export type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = {
    variant: ButtonVariants,
    hoverVariant?: ButtonHoverVariants,
    fullWidth?: boolean,
    size: ButtonSizes,
    label: string,
    hasArrow?: boolean,
    disabled?: boolean,
    onClick?: () => void,
    type?: ButtonType
}


export type ButtonStylesProps = Omit<ButtonProps, "label" | "hasArrow" | "onClick">;

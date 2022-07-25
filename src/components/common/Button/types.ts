export type ButtonVariants = "filled" | "outlined";
export type ButtonSizes = "small" | "medium" | "large";
export type ButtonHoverVariants = "light" | "dark";

export type ButtonProps = {
    variant: ButtonVariants,
    hoverVariant?: ButtonHoverVariants,
    fullWidth?: boolean,
    size: ButtonSizes,
    label: string
}

export type ButtonStylesProps = Omit<ButtonProps, "label">;

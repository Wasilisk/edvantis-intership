export type MenuButtonProps = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void;
};

export type MenuButtonStylesProps = Omit<MenuButtonProps, "setIsOpen">;
import styled, {css} from "styled-components";
import {ButtonHoverVariants, ButtonSizes, ButtonStylesProps, ButtonVariants} from "./types";

const buttonSizeStyles = (size: ButtonSizes) => {
    switch (size) {
        case "small": {
            return css`
              height: 42px;
              font-size: 10px;
              padding: 0 26px;
            `
        }
        case "medium": {
            return css`
              height: 50px;
              font-size: 12px;
              padding: 0 30px;
            `
        }
        case "large": {
            return css`
              height: 55px;
              font-size: 14px;
              padding: 0 36px;
            `
        }
    }
}

const buttonVariantStyles = (variant: ButtonVariants, hoverVariant: ButtonHoverVariants = "dark") => {
    switch (variant) {
        case "outlined": {
            return css`
              border: 2px solid #7bb57c;
              background-color: transparent;
              color: #757171;
              
              :hover {
                background-color: #7bb57c;
                color: white;
              }
            `
        }
        case "filled": {
            return css`
              background-color: #7bb57c;
              border: none;
              color: #ffffff;
              box-shadow: 0 3px 10px 0 rgb(39 37 40 / 28%);
              
              :hover {
                background-color: ${hoverVariant === "dark" ? "#333333" : "#ffffff"};
                color: ${hoverVariant === "light" && "#333333"}
              }
            `
        }
    }
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  width: ${({fullWidth}) => fullWidth ? "100%" : "fit-content"};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Hind', sans-serif;
  letter-spacing: 0;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  
  svg {
    height: 24px;
    width: 24px;
    margin-left: 5px;
  }
  
  :disabled {
    opacity: .5;
    pointer-events: none;
    cursor: not-allowed;
    user-select: none;
  }

  ${({size}) => buttonSizeStyles(size)}
  ${({variant, hoverVariant}) => buttonVariantStyles(variant, hoverVariant)}
`
import styled, {css} from "styled-components";
import {MenuButtonStylesProps} from "./types";

export const MenuButtonStyles = styled.div<MenuButtonStylesProps>`
  width: 24px;
  height: 16px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 2;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: black;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  
  & span:nth-child(1) {
    top: 0;
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }

  & span:nth-child(2) {
    top: 7px;
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }

  & span:nth-child(3) {
    top: 14px;
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
  
  ${({isOpen}) => isOpen && css`
    & span:nth-child(1) {
      transform: rotate(45deg);
      top: -3px;
      left: 4px;
    }

    & span:nth-child(2) {
      width: 0;
      opacity: 0;
    }

    & span:nth-child(3) {
      transform: rotate(-45deg);
      left: 4px;
    }
  `}
`


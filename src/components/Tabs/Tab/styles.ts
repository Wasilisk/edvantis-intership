import styled, {css} from "styled-components";
import {TabStylesProps} from "./types";

export const TabStyles = styled.div<TabStylesProps>`
  color: #7bb57c;
  margin: 0;
  padding: 15px 20px;
  position: relative;
  cursor: pointer;

  :hover {
    span {
      opacity: 1;
    }
  }
  
  span {
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 0;
    color: #333333;
    opacity: .6;
    transition: opacity .2s ease-in-out;
  }
  
  
  ${({isActive}) => isActive && css`
    span {
      opacity: 1;
    }
    :after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      color: inherit;
      background-color: currentColor;
    }
  `}
`
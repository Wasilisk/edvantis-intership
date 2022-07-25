import styled from "styled-components";
import {HeaderMenuStylesProps} from "./types";
import {NavigationStyles} from "../Navigation/styles";
import {ButtonStyles} from "../../common/Button/styles";

export const HeaderMenuStyles = styled.div<HeaderMenuStylesProps>`
  position: fixed;
  display: ${({isOpen}) => isOpen ? "flex": "none"};
  max-width: 100vw;
  max-height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 100px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  
  ${NavigationStyles} {
    flex-direction: column;

    li {
      margin: 10px 8px;
    }
  }
  
  ${ButtonStyles} {
    margin-top: 30px;
  }
`
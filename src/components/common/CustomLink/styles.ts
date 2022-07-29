import {Link} from "react-router-dom";
import styled from "styled-components";

export const CustomLinkStyles = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: #242424;
  font-size: 12px;
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
  
  :hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`
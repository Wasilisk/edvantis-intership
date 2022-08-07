import styled from "styled-components";
import {StarBlockProps, StarRatingStylesProps} from "./types";

export const StarRatingStyles = styled.div<StarRatingStylesProps>`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  text-align: left;
  ${({readonly}) => readonly && 'pointer-events: none'};
  
  div {
    height: 24px;
    width: 24px;
  }
`

export const StarBlock = styled.div<StarBlockProps>`
  position: relative;
  cursor: pointer;

  .filled {
    width: ${({
                showRatingWithPrecision,
                activeState
              }) => showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%'};
    overflow: hidden;
    position: absolute;
  }

`


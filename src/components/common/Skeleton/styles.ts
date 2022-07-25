import styled, {css, keyframes} from "styled-components";
import {SkeletonStylesProps, SkeletonVariants} from "./types";

const skeletonVariantStyles = (variant: SkeletonVariants) => {
    switch (variant) {
        case "rounded": {
            return css`
              border-radius: 5px;
            `
        }
        case "circle": {
            return css`
              border-radius: 50%;
            `
        }
    }
}

const shineAnimation = keyframes`
  to {
    background-position-x: -200%;
  }
`

export const SkeletonStyles = styled.div<SkeletonStylesProps>`
  width: ${({width}) => width ? width : "auto"};
  height: ${({height}) => height ? height : "auto"};
  background: #f7f5f6;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 400%;
  animation: 1.5s ${shineAnimation} linear infinite;
  
  ${({variant}) => variant && skeletonVariantStyles(variant)}
`
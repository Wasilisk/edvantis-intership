import styled from "styled-components";
import {ParallaxBannerStylesProps} from "./types";

export const ParallaxBannerStyles = styled.div<ParallaxBannerStylesProps>`
  width: 100%;
  padding: 160px 40px 170px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;

  .banner-wrapper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }
  
  .banner-info {
    max-width: 670px;
    
    h1 {
      font-size: 84px;
      color: #333333;
      font-family: Poppins,sans-serif;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 1.1;
      margin: 0;
      display: inline-block;
      word-break: break-word;
    }
    p {
      font-size: 18px;
      overflow-wrap: anywhere;
      margin: 40px 0;
    }
  }

  .banner-image {
    width: 100%;
    position: absolute;
    background-image: ${({parallaxImage}) => `url(${parallaxImage})`};
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    padding: 135px 32px 140px 32px;
  }
  @media (max-width: 425px) {
    .banner-info {
      h1 {
        font-size: 50px;
      }
      p {
        margin: 25px 0;
      }
    }
    padding: 100px 24px;
  }
`
import styled from "styled-components";
import {MainBannerStylesProps} from "./types";
import {LinkButtonStyles} from "../../common/LinkButton/styles";

export const MainBannerStyles = styled.div<MainBannerStylesProps>`
  height: calc(100vh - 102px);;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  
  .banner-info {
    max-width: 770px;

    h1 {
      font-size: 84px;
      color: #333333;
      font-family: Poppins,sans-serif;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 1.1;
      margin: 0;
      overflow-wrap: anywhere;
    }
    p {
      font-size: 18px;
      overflow-wrap: anywhere;
      margin: 50px 0;
    }
  }
  
  .banner-image {
    height: 100vh;
    position: absolute;
    background-image: ${({backgroundImage}) => `url(${backgroundImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 70%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 72px);
    .banner-info {
      h1 {
        font-size: 70px;
      }
    }
    .banner-image {
      height: 100vh;
    }
  }
  @media (max-width: 425px) {
    .banner-info {
      h1 {
        font-size: 58px;
      }
    }
    
    ${LinkButtonStyles} {
      width: auto;
    }
  }
`;
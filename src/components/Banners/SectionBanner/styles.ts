import styled from "styled-components";
import {SectionBannerStylesProps} from "./types";

export const SectionBannerStyles = styled.div<SectionBannerStylesProps>`
  width: 100%;
  padding: 160px 0;
  display: flex;
  justify-content: center;
  background-image: ${({backgroundImage}) => `url(${backgroundImage});`};
  background-position:  center center / 22px;
  background-repeat: repeat;

  .banner-info {
    max-width: 1200px;
    text-align: center;
    padding: 0 15px;

    & > h2 {
      font-size: 84px;
      margin: 0;
      overflow-wrap: anywhere;
    }
  }


  @media (max-width: 1024px) {
    .banner-info {
      h2 {
        font-size: 70px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 130px 0;
    .banner-info {
      h2 {
        font-size: 56px;
      }
    }
  }
  
  @media (max-width: 320px) {
    padding: 100px 0;
    .banner-info {
      h2 {
        font-size: 40px;
      }
    }
  }
`
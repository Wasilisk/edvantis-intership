import styled from "styled-components";
import {CustomLinkStyles} from "../../common/CustomLink/styles";

export const PromotionCardStyles = styled.div`
  flex-basis: 33%;
  max-width: 33%;
  padding: 0 24px;
  box-sizing: border-box;

  
  .card-image {
    display: block;
    width: 100%;
    height: 20vw;
    max-height: 250px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  span {
    font-weight: 600;
  }
  
  h4 {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    line-height: 1.3;
    color: #333333;
  }
  
  ${CustomLinkStyles} {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-top: 50px;

    .card-image {
      height: 70vw;
      max-height: 470px;
      min-height: 184px;
    }
  }
`;
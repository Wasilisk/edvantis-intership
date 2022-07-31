import styled from "styled-components";
import {ProductCardStyles} from "../Cards/ProductCard/styles";

export const GoodsSelectionStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  .text-info {
    text-align: center;
    
    h4 {
      font-size: 38px;
      color: #333333;
      line-height: 1.2;
      font-weight: 600;
      margin: 0;
    }
    
    p {
      font-size: 18px;
      line-height: 1.56;
      font-weight: 400;
      color: #333333;
      margin-top: 25px;
      margin-bottom: 0;
    }
  }
  
  .products-block {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    & > ${ProductCardStyles} {
      flex-basis: 33.33333%;
      max-width: 33.33333%;
    }
  }

  @media (max-width: 768px) {
    .products-block {
      flex-direction: column;
      ${ProductCardStyles} {
        flex-basis: 100%;
        max-width: 100%;
      }
      
      ${ProductCardStyles}:not(:first-of-type) {
        margin-top: 50px;
      }
    }
  }
`
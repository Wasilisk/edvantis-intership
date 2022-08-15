import styled from "styled-components";
import {ProductItemStyles} from "./ProductItem/styles";

export const ShoppingCartStyles = styled.div`
  display: flex;
  flex-direction: column;
  
  .section-title {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: .05em;
    font-weight: 700;
    color: #707070;
    margin-bottom: 8px;
    margin-top: 10px;
  }
  
  .products-list {
    ${ProductItemStyles}:not(:last-child) {
      margin-bottom: 20px;
    }
    
    ${ProductItemStyles}:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -10px;
      left: 0;
      background-color: rgba(0,0,0,.05);
    }
  }
  
  .total-price {
    p {
      font-size: 18px;
      font-weight: 700;
      text-align: right;
      line-height: 22px;
      letter-spacing: .05em;
      color: #707070;
      margin-top: 16px;
    }
  }
  
  .empty-cart {
    text-align: center;
    padding: 56px 0;
    
    .title {
      font-size: 18px;
      line-height: 1.56;
      letter-spacing: 0;
      color: #333;
    }
    
    .description {
      margin-top: 8px;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: .05em;
      color: #707070;
    }
  }
`;
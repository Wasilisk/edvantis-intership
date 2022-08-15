import styled from "styled-components";
import {NumberInputStyles} from "../../common/NumberInput/styles";

export const ProductItemStyles = styled.div`
  max-width: 520px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .preview {
    height: 46px;
    width: 46px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      width: auto;
    }
  }

  .product-info {
    display: flex;
    flex-grow: 1;
    width: 70%;
    align-items: center;
    padding: 0 20px 0 30px;

    .name {
      flex-grow: 1;
      max-width: calc(100% - 200px);
      box-sizing: border-box;
      text-decoration: none;

      p {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: .05em;
        color: #707070;
        text-transform: none;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
      }
    }
    
    .price-info {
      display: flex;
      align-items: center;
      
      ${NumberInputStyles} {
        max-width: 75px;
        height: 36px;
        margin-left: 10px;
      }

      .price {
        max-width: 110px;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: .05em;
        color: #707070;
        padding-left: 20px;
        box-sizing: border-box;
      }
    }
  }

  .delete-button {
    height: 24px;
    width: 24px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      background: #f7f8fa;
    }
  }

  @media (max-width: 768px) {
    .preview {
      height: 80px;
      width: 80px;
    }
    
    .product-info {
      flex-direction: column;
      align-items: flex-start;
      
      .name {
        max-width: calc(100% - 50px);
      }
      
      .price-info {
        ${NumberInputStyles} {
          max-width: 75px;
          margin-left: 0;
        }
        
        .price {
          padding-left: 10px;
        }
      }
    }
  }
  @media (max-width: 425px) {
    .preview {
      height: 50px;
      width: 50px;
    }
    
    .product-info {
      padding: 0 5px 0 15px;
    }
  }
`;
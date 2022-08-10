import styled from "styled-components";
import {TabStyles} from "../../components/Tabs/Tab/styles";
import {NumberInputStyles} from "../../components/common/NumberInput/styles";

export const ProductPageStyles = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 40px auto;
  padding: 0 24px;
  display: flex;


  & > div {
    flex-basis: 50%;
    max-width: 50%;
    padding: 0 15px;
  }

  .product-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    img {
      height: auto;
      width: 90%;
    }
  }

  .product-info {
    .text-info {
      line-height: 1.5;
      letter-spacing: .05em;
      color: #707070;
      position: relative;
      padding-bottom: 48px;

      .not-available {
        color: #d9534c;
      }

      .status {
        margin: 0;
      }

      .product-name {
        font-size: 22px;
        line-height: 1.3;
        font-weight: 500;
        color: #333;
        margin: 0;
      }

      .product-code {
        font-size: 14px;
        line-height: 1.6;
        letter-spacing: .05em;
        color: #858585;
        margin: 8px 0 0 0;
      }

      .price {
        font-weight: 600;
        font-size: 20px;
        color: #333;
        margin: 24px 0 0 0;
      }

      :after {
        content: "";
        position: absolute;
        height: 1px;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        opacity: .125;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      padding: 24px 0;

      ${NumberInputStyles} {
        margin-right: 20px;
      }
    }

    .additional-info {

      ${TabStyles} {
        padding: 0 10px 10px;

        span {
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
        }
      }

      pre {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        word-break: keep-all;

        font-size: 16px;
        line-height: 1.5;
        font-family: Poppins, sans-serif;
        letter-spacing: .05em;
        color: #707070;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > div {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`;
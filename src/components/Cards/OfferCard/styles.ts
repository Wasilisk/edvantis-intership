import styled, {css} from "styled-components";
import {OfferCardStylesProps, OfferCardVariants} from "./types";

const cardVariantStyles = (variant: OfferCardVariants) => {
    return variant === "dark"
        ? css`
              .text-info {
                .caption {
                  color: #2c2c2c;
                }
                .title {
                  color: #333333;
                }
                .description {
                  color: #707070;
                }
              }
        `
        : css`
              .text-info {
                .caption {
                  color: #a9a9a9;
                }
                .title {
                  color: #ffffff;
                }
                .description {
                  color: #ffffff;
                }
              }
        `
}

export const OfferCardStyles = styled.div<OfferCardStylesProps>`
  padding: 60px 30px;
  background-image: ${({backgroundImage}) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 47.57%;
  flex-basis: 50%;
  max-width: 50%;

  .text-info {
    max-width: 400px;
    
    
    .caption {
      font-size: 14px;
      line-height: 1.33;
      font-weight: 500;
      letter-spacing: .064em;
      color: #2c2c2c;
      margin: 0;
    }

    .title {
      margin-top: 20px;
      font-size: 22px;
      line-height: 1.3;
      font-weight: 500;
      color: #333333;
    }

    .description {
      margin-top: 20px;
      margin-bottom: 35px;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: .05em;
      color: #707070;
    }
  }

  ${({variant}) => cardVariantStyles(variant)};

  @media (max-width: 768px) {
    padding: 46px 40px 46px 30px;
    flex-basis: 100%;
    max-width: 100%;
  }
`;
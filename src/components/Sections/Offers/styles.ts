import styled from "styled-components";
import {OfferCardStyles} from "../../Cards/OfferCard/styles";

export const OffersStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 50px 24px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  
  ${OfferCardStyles} {
    margin: 0 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 80px 24px 50px 24px;
    
    ${OfferCardStyles} {
      margin: 0;
    }
    ${OfferCardStyles}:first-child {
      margin-bottom: 50px;
    }
  }
`;
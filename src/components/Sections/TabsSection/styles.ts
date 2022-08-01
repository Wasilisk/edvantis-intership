import styled from "styled-components";
import {TabsStyles} from "../../Tabs/styles";
import {ProductCardStyles} from "../../Cards/ProductCard/styles";

export const TabsSectionStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 50px 24px;
  
  .text-info {
    padding: 0 15px;
    
    .title {
      font-size: 38px;
      color: #333333;
      line-height: 1.2;
      font-weight: 600;
      letter-spacing: 0;
      margin: 0;
    }

    .description {
      font-size: 18px;
      line-height: 1.56;
      letter-spacing: 0;
      color: #333333;
      margin: 25px 0 0 0;
    }
  }

  .tab-panel {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 30px;

    ${ProductCardStyles} {
      padding: 0 15px;
    }
  }
  
  ${TabsStyles} {
    margin-top: 40px;
  }

  @media (max-width: 1024px) {
    .tab-panel {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .text-info {
      padding: 0;
    }
  }

  @media (max-width: 425px) {
    .tab-panel {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;



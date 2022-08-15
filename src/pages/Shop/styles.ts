import styled from "styled-components";

export const ShopStyles = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 24px;

  
  .title {
    font-size: 30px;
    line-height: 1.2;
    font-weight: 600;
    color: #333333;
    padding-left: 20px;
    margin-bottom: 20px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 40px;
  }

  @media (max-width: 1024px) {
    .product-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    .title {
      text-align: center;
      padding: 0;
    }
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 425px) {
    .product-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
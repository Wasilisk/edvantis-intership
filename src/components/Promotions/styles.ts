import styled from "styled-components";

export const PromotionsStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 100px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 0;
  }
`
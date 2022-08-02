import styled from "styled-components";

export const CompanyInfoStyles = styled.div`
  p {
    margin-top: 30px;
    margin-bottom: 0;
  }

  img {
    height: 34px;
    width: auto;
  }

  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      img {
        height: 34px;
        width: auto;
      }
`;
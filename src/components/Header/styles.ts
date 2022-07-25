import styled from "styled-components";

export const HeaderStyles = styled.div`
  max-width: 1200px;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  
  .logo-block {
    flex-grow: 1;
    display: flex;
    align-items: center;
    z-index: 2;
    
    img {
      height: 32px;
      width: auto;
    }
  }
  
  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`
import styled from "styled-components";

export const FooterNavigationStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin: 10px 5px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    transition: color 0.2s;
    text-align: center;

    :hover {
      color: #7bb57c;
    }

    :first-of-type {
      margin-top: 0;
    }
  }
`
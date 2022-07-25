import styled from "styled-components";

export const NavigationStyles = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  
  li {
    list-style: none;
    margin: 5px 8px;
    
    a {
      text-decoration: none;
      color: black;
      font-weight: 500;
      transition: color 0.2s;
      
      :hover {
        color: #7bb57c;
      }
    }
  }
`
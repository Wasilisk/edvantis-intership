import styled from "styled-components";

export const InputStyles = styled.input`
  background-color: rgba(51, 51, 51, 0.12);
  display: block;
  box-sizing: border-box;
  width: 100%;
  box-shadow: none;
  font-family: Poppins,sans-serif;
  font-size: 14px;
  text-overflow: ellipsis;
  border: 0;
  border-radius: 5px;
  color: inherit;
  padding: 16px 30px;
  
  :focus {
    outline-color: #3b99fc;
  }
`;
import styled from "styled-components";

export const SelectStyles = styled.select`
  display: block;
  font-family: Poppins,sans-serif;
  font-size: 14px;
  text-overflow: ellipsis;
  line-height: 1.3;
  color: #707070;
  padding: 16px 60px 16px 30px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  border: none;
  background-color: rgba(51, 51, 51, 0.12);
  border-radius: .5em;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23707070%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 1.4em top 50%, 0 0;
  background-size: .65em auto, 100%;

  ::-ms-expand { 
    display: none;
  
  }
  :focus {
    border-color: #3b99fc;
    outline: none;
  }
  option { 
    font-weight:normal; 
  }
 
`;
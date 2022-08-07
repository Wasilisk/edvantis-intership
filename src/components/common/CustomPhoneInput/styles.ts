import PhoneInput from "react-phone-input-2";
import styled from "styled-components";


export const PhoneInputStyles = styled(PhoneInput)`
    width: 100%;
  
  .form-control {
    width: 100%;
    padding: 20px 20px 20px 50px;
    background-color: rgba(51, 51, 51, 0.12);
    display: block;
    box-sizing: border-box;
    box-shadow: none;
    font-family: Poppins,sans-serif;
    font-size: 14px;
    text-overflow: ellipsis;
    border: 0;
    border-radius: 5px;
    color: inherit;

    :focus {
      outline-color: #3b99fc;
    }
  }
  
  .flag-dropdown {
    background-color: rgba(51, 51, 51, 0.12);
    border: none;
    
    &.open {
      background: rgba(51, 51, 51, 0.12);
    }
    
    .selected-flag {
      :hover {
        background-color: rgba(51, 51, 51, 0.12);
      }
    }
  }
`
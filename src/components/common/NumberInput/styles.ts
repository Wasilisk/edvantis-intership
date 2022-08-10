import styled from "styled-components";

export const NumberInputStyles = styled.div`
  display: inline-flex;
  width: 75px;
  height: 50px;
  max-width: 128px;
  border: 1px solid #c5cbd6;
  box-shadow: inset 0 1px 0 rgb(35 33 54 / 8%);
  border-radius: 3px;
  background: #fff;
  padding: 8px 12px;
  box-sizing: border-box;

  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    width: 100%;
    border: none;
    
    :focus {
      outline: none;
    }
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .input-arrows {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    & > svg {
      cursor: pointer;
    }
    .down-arrow {
      transform: rotate(180deg);
    }
  }
`;

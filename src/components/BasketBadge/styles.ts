import styled from "styled-components";

export const BasketBadgeStyles = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 1px rgb(33 39 54 / 4%), 0 2px 4px rgb(33 39 54 / 16%);
  position: fixed;
  top: 80px;
  right: 30px;
  background-color: #ffffff;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  
  svg {
    height: 100%;
    width: 100%;
  }
  
  .counter {
    background-color: #7bb57c;
    color: #ffffff;
    top: -2px;
    right: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
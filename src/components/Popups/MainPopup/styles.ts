import styled from "styled-components";

export const MainPopupStyles = styled.div`
  min-width: 320px;
  height: 100%;
  background-color: #ffffff;
  z-index: 2;
  border-radius: 5px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  
  ::-webkit-scrollbar {
    display: none;
  }

  .popup-header {
    background-color: rgb(247, 248, 250);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: sticky;
    top: 0;
    z-index: 3;

    h4 {
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: .05em;
      font-weight: 500;
      color: #333;
      margin: 0;
    }

    svg {
      cursor: pointer;
      width: 18px;
      height: 18px;
    }
  }

  .popup-content {
    padding: 10px 24px 16px 24px;
  }

  @media (max-width: 425px) {
    width: 100%;
    border-radius: 0;
  }
`;
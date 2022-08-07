import styled  from "styled-components";

export const OverlayingPopupStyles = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    padding: 0;
  }
`;
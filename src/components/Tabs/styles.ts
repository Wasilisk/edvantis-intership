import styled from "styled-components";

export const TabsStyles = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 30px;

    :after {
      content: "";
      position: absolute;
      height: 1px;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      opacity: .125;
    }
    
    .tabs {
      display: flex;
      justify-content: flex-start;
      overflow: auto;
      ::-webkit-scrollbar {
        display: none;
      }
    }
`;
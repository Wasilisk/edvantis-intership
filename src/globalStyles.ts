import { createGlobalStyle } from 'styled-components'
import {MainPopupStyles} from "./components/Popups/MainPopup/styles";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', 'Hind', sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      position: absolute;
      background-color: #fff;
      width: 16px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: #fff;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #fff;
    }
    
    ::-webkit-scrollbar-button {
      display:none;
    }
  }
  
  .highlight {
    color: #7bb57c;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-enter .overlay {
    background-color: transparent;
  }
  .modal-enter-active .overlay {
    transition: all 1s;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-exit .overlay {
    background-color: rgba(0, 0, 0, 0.5);;
  }
  .modal-exit-active .overlay {
    transition: all 1s;
    background-color: transparent;
  }

  .modal-enter ${MainPopupStyles} {
    opacity: 0;
    transform: translateX(100%) scale(0.5);
  }
  .modal-enter-active ${MainPopupStyles} {
    transition: all 1s;
    opacity: 1;
    transform: scale(1);
  }
  .modal-exit ${MainPopupStyles} {
    opacity: 1;
    transform: scale(1);
  }
  .modal-exit-active ${MainPopupStyles} {
    transition: all 1s;
    transform: translateX(100%) scale(0.5);
    opacity: 0;
  }
`
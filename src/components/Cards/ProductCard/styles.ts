import styled from "styled-components";

export const ProductCardStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  
  .card-text {
    text-align: center;
    margin-top: 24px;
    
    a {
      color: #333333;
      text-decoration: none;
      overflow-wrap: break-word;
      word-wrap: break-word;
      font-size: 20px;
      line-height: 1.33;
      font-weight: 500;
      letter-spacing: .05em;
      text-transform: none;
    }
    
    p {
      font-weight: 700;
      font-size: 20px;
      white-space: nowrap;
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
  
  .card-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    float: left;
    
    
    img {
      position: absolute;
      height: 100%;
      left: 50%;
      transform: translate(-50%, 0);
      object-fit: contain;
    }
    
    .out-of-stock {
      background: #ffddd9;
      color: #cc3833;
      position: absolute;
      height: 32px;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 16px;
      line-height: 1.5;
      letter-spacing: .05em;
    }
  }
`
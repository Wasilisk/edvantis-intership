import styled from "styled-components";

export const FeedbackCardStyles = styled.div`
  padding: 50px 35px;
  background-color: #ffffff;
  
  .username {
    font-size: 22px;
    line-height: 1.3;
    font-weight: 500;
    color: #333333;
    margin: 0;
  }
  
  .department {
    font-size: 14px;
    line-height: 1.33;
    font-weight: 500;
    letter-spacing: .064em;
    color: #2c2c2c;
    margin: 20px 0 0 0;
  }
  
  .rating {
    display: flex;
    align-items: center;
    margin-top: 20px;
    
    span {
      font-size: 14px;
      line-height: 1.33;
      font-weight: 500;
      letter-spacing: .064em;
      color: #2c2c2c;
      margin-left: 10px;
    }
  }
  
  .comment {
    line-height: 1.5;
    letter-spacing: .05em;
    color: #707070;
    margin-top: 30px;
  }
`;
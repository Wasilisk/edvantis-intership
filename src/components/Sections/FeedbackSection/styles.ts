import styled from "styled-components";
import {FeedbackCardStyles} from "../../Cards/FeedbackCard/styles";

export const FeedbackSectionStyles = styled.div`
  background-color: #f5f5f5;
  padding: 0 24px;
  
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 38px;
      color: #333333;
      line-height: 1.2;
      font-weight: 600;
      margin: 0;
      text-align: center;
    }

    .description {
      font-size: 18px;
      line-height: 1.56;
      font-weight: 400;
      color: #333333;
      margin: 25px 0 0 0;
      text-align: center;
    }
    
    .feedback-cards {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      margin-top: 50px;
      
      & > ${FeedbackCardStyles} {
        margin: 0 15px;
      }
    }
  }
  
  @media(max-width: 768px) {
    .wrapper {
      .feedback-cards {
        & > ${FeedbackCardStyles}:last-child {
          display: none;
        }
      }
    }
  }
  @media(max-width: 600px) {
    .wrapper {
      .feedback-cards {
        flex-wrap: wrap;
        & > ${FeedbackCardStyles}:first-child {
          margin-bottom: 15px;
        }
      }
    }
  }
  @media(max-width: 425px) {
    .wrapper {
      .feedback-cards {
        & > ${FeedbackCardStyles}:not(:first-child) {
          display: none;
        }
        & > ${FeedbackCardStyles}:first-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
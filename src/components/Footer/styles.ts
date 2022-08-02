import styled from "styled-components";

export const FooterStyles = styled.div`
  background: #333333;

  .footer-content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    color: #ffffff;

    .footer-info {
      padding: 95px 24px 30px 24px;
      display: flex;
      justify-content: space-between;
      position: relative;

      & > div {
        flex-basis: 20%;
        max-width: 20%;
        padding: 0 15px;
        box-sizing: border-box;
      }

      :after {
        content: "";
        width: calc(100% - 48px);
        position: absolute;
        height: 1px;
        bottom: 1px;
        left: 24px;
        background: currentColor;
        opacity: .2;
      }
    }

    .owner-info {
      padding: 20px 24px;
      display: flex;
      justify-content: space-between;
      color: #a9a9a9;
      font-size: 14px;
      line-height: 1.33;
      font-weight: 500;
      letter-spacing: .064em;
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      .footer-info {
        flex-direction: column;
        align-items: center;

        & > div {
          flex-basis: 100%;
          max-width: 100%;
        }

        & > div:not(:first-of-type) {
          margin-top: 50px;
        }
      }
    }
    .owner-info {
      flex-direction: column;
      align-items: center;
    }
  }
`
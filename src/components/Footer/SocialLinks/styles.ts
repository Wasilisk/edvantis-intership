import styled from "styled-components";

export const SocialLinksStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin: 0;
  }

  .links {
    display: flex;
    margin-top: 30px;

    a {
      width: 30px;
      height: 30px;
      color: #ffffff;
      margin: 0 8px 15px 8px;

      svg {
        fill: #ffffff;
        transition: fill 0.2s ease-in-out;
      }

      :hover {
        svg {
          fill: #7bb57c;
        }
      }
    }
  }
`;
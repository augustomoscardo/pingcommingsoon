import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: hsl(0, 0%, 59%);
    font-weight: 300;
    width: 100%;
    text-align: center;
  }

  strong {
    font-weight: 700;
    color: #111;
  }

  span {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 20px;
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }
`;

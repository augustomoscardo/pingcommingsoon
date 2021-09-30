import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--gray);

  width: 100%;

  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    margin-top: 2rem;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  div p + p {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--gray);
    font-weight: bold;
  }

  a:hover {
    filter: brightness(0.6);
  }

  @media (max-width: 375px) {
    font-size: 12px;

    p {
      /* margin-bottom: 1rem;  */
    }

    div {
      flex-direction: column;
      gap: 0;
    }

    div p + p {
      margin-top: 1rem;
    }
  }
`;

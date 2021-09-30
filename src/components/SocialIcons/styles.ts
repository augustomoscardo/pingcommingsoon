import styled from "styled-components";

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 5rem;

  width: 100%;

  a {
    font-size: 1rem;
    color: var(--blue);
    text-decoration: none;
    border: 1px solid #f7f7f7;
    border-radius: 100%;
    padding: 0.625rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover {
    background: var(--blue);
    color: #fff;
  }

  @media (max-width: 375px) {
    a {
      font-size: 0.75rem;
    }
  }
`;

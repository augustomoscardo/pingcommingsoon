import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
  }

  @media (max-width: 375px) {
    img {
      width: 50px;
    }
  }
`;

import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 375px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFF;
    --blue: hsl(223, 87%, 63%);
    --pale-blue: hsl(223, 100%, 88%);
    --light-red: hsl(354, 100%, 66%);
    --gray: hsl(0, 0%, 59%);
    --very-dark-blue: hsl(209, 33%, 12%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

    max-width: 1120px;
    margin: 0 auto;

    @media(max-width: 375px) {
      padding: .75rem 1.5rem;
    }
  }

  body, input, textarea, button {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;

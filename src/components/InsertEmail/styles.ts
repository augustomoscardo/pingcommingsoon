import styled, { css } from "styled-components";
import { lighten } from "polished";

import { Form as FormikForm } from "formik";

type InputMail = {
  error: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  margin-bottom: 3rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  p {
    font-size: 0.75rem;
    color: var(--light-red);

    margin-left: 1.5rem;
    margin-top: 0.5rem;
    font-style: italic;
  }

  @media (max-width: 375px) {
    align-items: center;
    /* width: 100%; */

    p {
      margin-left: 0;
    }
  }
`;

export const Form = styled(FormikForm)`
  //way to rename Form from Formik to insert CSS.
  display: flex;
  align-items: flex-start;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputEmail = styled.input<InputMail>`
  padding: 0.625rem 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--gray);
  width: 350px;

  outline: none;

  &::placeholder {
    color: var(--gray);
  }

  // way to set border-color: red when error = true. ({error}) = (props.error)
  ${({ error }) =>
    error &&
    css`
      border-color: var(--light-red);
    `}

  @media(max-width: 375px) {
    width: 300px;
  }
`;

export const NotifyButton = styled.button`
  background: var(--blue);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 1.5rem;

  width: 150px;
  margin-left: 1rem;

  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  outline: none;

  &:hover {
    background: ${lighten(0.1, "hsl(223, 87%, 63%)")};
  }

  @media (max-width: 375px) {
    width: 300px;
    margin-left: 0;

    margin-top: 1.5rem;
  }
`;

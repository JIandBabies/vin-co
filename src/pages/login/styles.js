import styled from "styled-components";
import { containerStyle } from "../../styles/styleConstants";

const Container = styled.div`
  ${containerStyle}
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  input[type="text"],
  input[type="password"] {
    padding: 0.75rem 1rem;
    border: 1px solid lightgray;
    outline: none;
  }

  input[type="password"] {
    border-top: none;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.75rem 1rem;
    background-color: transparent;
    border: 1px solid #27397d;
    width: 100%;
  }
`;

export { Container, Form };

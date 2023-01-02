import styled from "styled-components";
import { containerStyle } from "../../styles/styleConstants";

const StyledFooter = styled.footer`
  margin-top: 6.25rem;
  border-top: 1px #e5e7eb solid;
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  padding: 0.5rem 0;
`;

const Container = styled.div`
  ${containerStyle}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.1;
  strong {
    font-weight: 600;
  }
`;

const RowDiv = styled.div`
  display: flex;

  div {
    width: 50%;
  }
`;

export { StyledFooter, Container, Wrapper, ColumnDiv, RowDiv };

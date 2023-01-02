import styled from "styled-components";
import { containerStyle } from "../../styles/styleConstants";

const Container = styled.div`
  ${containerStyle}
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Category = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  cursor: pointer;
  @media screen and (min-width: 990px) {
    font-size: 22px;
    display: block;
    max-width: 1440px;
  }
  div {
    padding: 8px;
  }
`;

// 상품 목록
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (min-width: 990px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { Container, List, Category };
